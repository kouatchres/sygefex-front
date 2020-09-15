import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
  SygefexSelect,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { enterMarksMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import {
  getAllEducationTypesQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
  getAllSpecialtiesOfAnEducationTypeQuery,
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const validationSchema = Yup.object().shape({
  candExamSecretCode: Yup.string().required(
    "Code d'Anonymat du candidat Obligatoire"
  ),
  subjectSpecialty: Yup.string().required("Choix de la matière Obligatoire"),
  subjectAve: Yup.number()
    .min(0, "Pas de note négative")
    .max(20, "Pas de note supérieure a 20")
    .required("Note du candidate obligatoire"),
});

const EnterNewMarks = () => {
  const initialValues = {
    subjectAve: "",
    subjectSpecialty: "",
    candExamSecretCode: "",
  };

  const [state, setState, handleReactSelectChange] = useForm({
    educTypeID: "",
    specialtyID: "",
  });

  const {
    data: dataEducType,
    loading: loadingEducType,
    error: errEducType,
  } = useQuery(getAllEducationTypesQuery);
  {
    loadingEducType && <p>loading...</p>;
  }
  {
    errEducType && <Error error={errEducType} />;
  }
  console.log(dataEducType);

  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  console.log(getEducationTypes);
  const getEducTypesOptions =
    getEducationTypes &&
    getEducationTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const {
    data: dataEducationType,
    loading: loadingSpecialty,
    error: errSpecialty,
  } = useQuery(getAllSpecialtiesOfAnEducationTypeQuery, {
    skip: !state.educTypeID,
    variables: { id: state.educTypeID },
  });

  {
    loadingSpecialty && <p>loading...</p>;
  }
  {
    errSpecialty && <Error error={errSpecialty} />;
  }
  console.log(dataEducationType);
  const getEducationType = dataEducationType && dataEducationType.educationType;
  const { specialty } = { ...getEducationType };
  console.log(specialty);
  const refinedSpecialty = specialty && removeTypename(specialty);
  const getSpecialtyOptions =
    refinedSpecialty &&
    refinedSpecialty.map((item) => ({
      value: item.id,
      label: item.specialtyName,
    }));

  const {
    data: dataSubjSpecialty,
    loading: loadingSubjSer,
    error: errSubjSer,
  } = useQuery(getAllSubjectSpecialtiesOfASpecialtyQuery, {
    skip: !state.specialtyID,
    variables: { id: state.specialtyID },
  });

  console.log(dataSubjSpecialty);
  const getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;
  const { subjectSpecialty } = { ...getSubjSpecialty };
  console.log(subjectSpecialty);

  const refinedSubjectSpecialty =
    subjectSpecialty && removeTypename(subjectSpecialty);
  const getSubjectsOptions =
    refinedSubjectSpecialty &&
    refinedSubjectSpecialty.map((item) => ({
      value: item.id,
      label: item.subject.subjectName,
    }));

  const [enterMarks, { loading, error }] = useMutation(enterMarksMutation);
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await enterMarks({
          variables: {
            ...values,
            subjectSpecialty:
              refinedSubjectSpecialty &&
              getObjectFromID(values.subjectSpecialty.value),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Notes des candidats</h4>
            <Error error={error} />
            <StyledForm
              disabled={
                isSubmitting ||
                loadingSpecialty ||
                loadingEducType ||
                loadingSubjSer ||
                loading
              }
              aria-busy={
                isSubmitting ||
                loadingSpecialty ||
                loadingEducType ||
                loadingSubjSer ||
                loading
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="educTypeID"
                      placeholder={"Le type d'enseignement"}
                      options={getEducTypesOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="specialtyID"
                      placeholder={"La Spécialité"}
                      options={getSpecialtyOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) =>
                        setFieldValue("subjectSpecialty", value)
                      }
                      name="subjectSpecialty"
                      placeholder={"matière"}
                      options={getSubjectsOptions}
                      disabled={isSubmitting}
                    />

                    <SygexInput
                      name="candExamSecretCode"
                      type="text"
                      label="Anonymat du candidat"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="subjectAve"
                      type="number"
                      step="0.001"
                      label="Note en la matière"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type="submit" disabled={isSubmitting}>
                      Valid{isSubmitting ? "ation en cours" : "er"}
                    </StyledButton>
                  </ButtonStyled>
                </AllControls>
              </Form>
            </StyledForm>
          </MinimStyledPage>
        );
      }}
    </Formik>
  );
};
export default EnterNewMarks;
