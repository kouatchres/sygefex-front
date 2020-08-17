import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import Router from "next/router";
import styled from "styled-components";
import * as Yup from "yup";
import useForm from "../utils/useForm";
import { getAllGendersQuery } from "../queries&Mutations&Functions/Queries";
import { createExaminerMutation } from "../queries&Mutations&Functions/Mutations";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import {
  uniqueCodeGen,
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  min-width: 12rem;
`;

const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  img {
    margin-top: 1rem;
    margin-left: 5rem;
    height: 15rem;
    width: 15rem;
    border-radius: 15px;
    background-size: contain;
    background-position: center;
  }
`;
const TwoGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  img {
    margin-top: 0.15rem;
    margin-left: 0.5rem;
    height: 13rem;
    width: 13rem;
    border-radius: 0.9rem;
    background-size: contain;
    background-position: center;
  }
`;

const validationSchema = Yup.object().shape({
  examiner1stName: Yup.string().required("Nom obligatoire"),
  examiner2ndName: Yup.string().required("Prénom obligatoire"),
  examinerOtherNames: Yup.string(),
  examinerMatricule: Yup.string().required("No de Matricule obligatoire"),
  examinerCNI: Yup.string().required("Numero de la CNI obligatoire"),
  examinerPhone: Yup.number().required("Numero de portable obligatoire"),
  gender: Yup.string().required("Choix de votre sexe obligatoire"),
});

const CreateNewExaminer = () => {
  const initialValues = {
    examiner1stName: "",
    examiner2ndName: "",
    examinerOtherNames: "",
    examinerEmail: "",
    examinerPhone: "",
    examinerCNI: "",
    examinerCode: "",
    examinerMatricule: "",
    gender: "",
  };

  const [state, setState] = useForm({ examinerImage: "" });

  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ineximages");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/inex/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    console.log(file.secure_url);
    setState({ examinerImage: file.secure_url });
  };

  const {
    data: dataGender,
    loading: loadingGender,
    error: errorGender,
  } = useQuery(getAllGendersQuery);

  {
    loadingGender && <p>Loading...</p>;
  }
  {
    errorGender && <Error error={errorGender} />;
  }
  const getGenders = dataGender && dataGender.genders;
  const refinedGenders = getGenders && removeTypename(getGenders);

  const getGenderOptions =
    refinedGenders &&
    refinedGenders.map((item) => ({ value: item.id, label: item.genderName }));

  const [createExaminer, { loading, error }] = useMutation(
    createExaminerMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createExaminer({
          variables: {
            ...values,
            examinerImage: state.examinerImage,
            gender: getObjectFromID(values.gender.value),
            examinerCode: uniqueCodeGen(12),
          },
        });
        Router.push({
          pathname: "/show/singleExaminer",
          query: {
            id: res.data.createExaminer.id,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm({ values: "" });
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <MinimStyledPage>
          <h4>Renseignement Examinateur</h4>
          <Error error={error} />
          <StyledForm
            disabled={isSubmitting || loading || loadingGender}
            aria-busy={isSubmitting || loading || loadingGender}
          >
            <Form>
              <AllControls>
                <TwoGroups>
                  <InputGroup>
                    <SygexInput
                      name="file"
                      type="file"
                      onChange={uploadFile}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      name="gender"
                      onChange={(value) => setFieldValue("gender", value)}
                      disabled={isSubmitting}
                      placeholder={"Votre Sexe"}
                      options={getGenderOptions}
                    />

                    <SygexInput
                      name="examiner1stName"
                      type="text"
                      label="Nom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="examiner2ndName"
                      type="text"
                      label="Prénom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="examinerOtherNames"
                      type="text"
                      label="Autres Noms"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="examinerMatricule"
                      type="text"
                      label="Numéro Matricule"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="examinerCNI"
                      type="text"
                      label="Numéro de Carte d'Identité"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="examinerPhone"
                      type="number"
                      label="Numéro de portable"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="examinerEmail"
                      type="email"
                      label="Votre Email"
                      disabled={isSubmitting}
                    />
                    <PicFrame>
                      {state.examinerImage && (
                        <img src={state.examinerImage} alt="Upload image" />
                      )}
                    </PicFrame>
                  </InputGroup>
                </TwoGroups>
                <ButtonStyled>
                  <StyledButton disabled={isSubmitting} type="submit">
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </StyledButton>
                </ButtonStyled>
              </AllControls>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )}
    </Formik>
  );
};
export default CreateNewExaminer;
