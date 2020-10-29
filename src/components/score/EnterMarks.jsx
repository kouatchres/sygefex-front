import React, { useState } from "react";
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
  registrationIDFromSecretCodeQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
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
  // candExamSecretCode: Yup.string().required(
  //   "Code anonymat du candidat Obligatoire"),
  subjectSpecialty: Yup.string().required("Choix de la matière Obligatoire"),
  subjectAve: Yup.number()
    .min(0, "Pas de note négative")
    .max(20, "Pas de note supérieure a 20")
    .required("Note du candidate obligatoire"),
});

const EnterMarks = () => {
  const [state, setState] = useForm({ candExamSecretCode: "" });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const initialValues = {
    subjectAve: "",
    subjectSpecialty: "",
    candExamSecretCode: "",
  };

  // console.log(state.candExamSecretCode)

  const {
    data: dataSpecialty,
    loading: loadingSpecialty,
    error: errSpecialty,
  } = useQuery(registrationIDFromSecretCodeQuery, {
    skip: !state.candExamSecretCode,
    variables: {
      candExamSecretCode: state.candExamSecretCode && state.candExamSecretCode,
    },
  });

  // console.log(dataSpecialty);
  const registrationID = dataSpecialty && dataSpecialty.getRegistration;
  const { specialty } = { ...registrationID };

  //  console.log({specialty})

  const {
    data: dataSubjSpecialty,
    loading: loadingSubjSer,
    error: errSubjSer,
  } = useQuery(getAllSubjectSpecialtiesOfASpecialtyQuery, {
    skip: !specialty,
    variables: { id: specialty && specialty.id },
  });

  // console.log(dataSubjSpecialty);
  const getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;
  const { subjectSpecialty } = { ...getSubjSpecialty };
  // console.log(subjectSpecialty);

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
            subjectName:
              refinedSubjectSpecialty && values.subjectSpecialty.label,
            subjectSpecialty:
              refinedSubjectSpecialty &&
              getObjectFromID(values.subjectSpecialty.value),
            candExamSecretCode:
              state.candExamSecretCode && state.candExamSecretCode,
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
            <Error error={error || errSubjSer || errSpecialty} />

            <StyledForm
              disabled={
                isSubmitting || loadingSubjSer || loadingSpecialty || loading
              }
              aria-busy={
                isSubmitting || loadingSubjSer || loadingSpecialty || loading
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="candExamSecretCode"
                      type="text"
                      onChange={handleChange}
                      value={state.candExamSecretCode || ""}
                      label="Anonymat du candidat"
                      disabled={isSubmitting}
                    />

                    <SygefexSelect
                      onChange={(value) =>
                        setFieldValue("subjectSpecialty", value)
                      }
                      name="subjectSpecialty"
                      placeholder="matière"
                      options={getSubjectsOptions}
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
export default EnterMarks;
