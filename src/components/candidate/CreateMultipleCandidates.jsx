import { useMutation } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import Router from "next/router";
import useForm from "../utils/useForm";
import styled from "styled-components";
import * as Yup from "yup";
import { createMultipleCandidatesMutation } from "../queries&Mutations&Functions/Mutations";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import { uniqueCodeGen } from "../queries&Mutations&Functions/Functions";
import { FormikDatepicker, FormikRadio } from "@dccs/react-formik-mui";
import { FormLabel, RadioGroup } from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  img {
    margin: 1rem auto;
    margin-top: 1rem;
    height: 15rem;
    width: 15rem;
    border-radius: 15px;
    background-size: contain;
    background-position: center;
  }
`;

const RadioButtons = styled.div`
  display: flex;
  padding: 0 0.5rem;
  label {
    font-size: 1.3rem;
  }

  flex-direction: row;
  align-items: center;
  .RadioSet {
    FormikRadio {
      font-size: 1.5rem;
    }
    padding: 0 1rem;

    display: flex;
    flex-direction: row;
    label {
      font-size: 1.3rem;
    }
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  padding-left: 1rem;
`;

const TwoGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
`;
const AllControls = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  img {
    margin-top: 0.15rem;
    /* margin-left: 0.5rem; */
    height: 15rem;
    width: 13rem;
    justify-content: center;
    border-radius: 0.9rem;
    background-size: contain;
    background-position: center;
  }
`;

const validationSchema = Yup.object().shape({
  cand1stName: Yup.string().required("Nom obligatoire"),
  cand2ndName: Yup.string().required("Prénom obligatoire"),
  cand3rdName: Yup.string(),
  momName: Yup.string().required("Noms de la mere obligatoire"),
  dadName: Yup.string().required("Noms du pere obligatoire"),
  placeOfBirth: Yup.string().required("Lieu de naissance obligatoire"),
  birthCertNumber: Yup.string().required(
    "Numéro de l'acte de naissance obligatoire"
  ),
  phoneNumb: Yup.number().required("Numéro de portable obligatoire"),
  gender: Yup.string().required("Choix du sexe obligatoire"),
  dateOfBirth: Yup.date()
    .min(new Date("01-01-1900"))
    .max(new Date())
    .required("Date de naissance obligatoire"),
  email: Yup.string().email("Email invalide").required("Email obligatoire"),
});

const CreateMultipleCandidates = () => {
  const [photo, setPhoto] = useForm({ image: "" });
  const initialValues = {
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    momName: "",
    dadName: "",
    email: "",
    image: "",
    phoneNumb: "",
    placeOfBirth: "",
    dateOfBirth: "",
    birthCertNumber: "",
    gender: "",
  };

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
    // this.setState({ image: file.secure_url });
    setPhoto({ image: file.secure_url });
  };

  console.log(photo.image);
  const [createMultipleCandidates, { error }] = useMutation(
    createMultipleCandidatesMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createMultipleCandidates({
          variables: {
            ...values,
            image: photo.image,
            candCode: uniqueCodeGen(12),
          },
        });
        Router.push({
          pathname: "/show/singleCand",
          query: {
            id: res.data.createMultipleCandidates.id,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm();
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <MiniStyledPage>
          <h4>Renseignement info Candidat</h4>
          <Error error={error} />
          <StyledForm
            disabled={isSubmitting}
            aria-busy={isSubmitting || uploadFile}
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

                    <SygexInput
                      name="cand1stName"
                      type="text"
                      label="Nom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="cand2ndName"
                      type="text"
                      label="Prénom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="cand3rdName"
                      type="text"
                      label="Autres Noms"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="placeOfBirth"
                      type="text"
                      label="Lieu de Naissance"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="dadName"
                      type="text"
                      label="Noms du pere"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="momName"
                      type="text"
                      label="Noms de la mere"
                      disabled={isSubmitting}
                    />

                    <SygexInput
                      name="birthCertNumber"
                      type="text"
                      label="Numéro acte de Naissance"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="phoneNumb"
                      type="number"
                      label="Numéro de portable"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <InputGroup>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <FormikDatepicker
                        name="dateOfBirth"
                        label="Brith Date"
                        format="DD MMMM YYYY"
                      ></FormikDatepicker>
                    </MuiPickersUtilsProvider>
                    <SygexInput
                      name="email"
                      type="email"
                      label="Email"
                      disabled={isSubmitting}
                    />
                    <RadioButtons>
                      <FormLabel>Sexe</FormLabel>
                      <RadioGroup name="gender" className="RadioSet">
                        <FormikRadio
                          label="Femele"
                          name="gender"
                          value="Femele"
                          defaultChecked
                        />
                        <FormikRadio label="Male" name="gender" value="Male" />
                      </RadioGroup>
                    </RadioButtons>
                    <PicFrame>
                      {photo.image && (
                        <img
                          src={photo.image}
                          alt="Upload image"
                          disabled={isSubmitting}
                        />
                      )}
                    </PicFrame>
                  </InputGroup>
                </TwoGroups>
                <ButtonStyled>
                  <StyledButton type="submit">
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </StyledButton>
                </ButtonStyled>
              </AllControls>
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )}
    </Formik>
  );
};
export default CreateMultipleCandidates;
