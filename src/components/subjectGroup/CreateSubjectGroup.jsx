import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import useForm from "../utils/useForm";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { createNewSubjectGroupMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const validationSchema = Yup.object().shape({
  subjectGroupName: Yup.string().required(
    "Libéllé du groupe de la matière obligatoire"
  ),
  subjectGroupCode: Yup.string().required(
    "Code du groupe de la matière obligatoire"
  ),
});

const CreateSubjectGroup = () => {
  const initialValues = {
    subjectGroupName: "",
    subjectGroupCode: "",
  };

  const [createSubjectGroup, { loading, errorSubj }] = useMutation(
    createNewSubjectGroupMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSubjectGroup({
          variables: { ...values },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setSubmitting(false);
          resetForm(true);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Nouveaux group de Matière</h4>
            <Error error={errorSubj} />
            <StyledForm disabled={loading} aria-busy={loading}>
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="subjectGroupName"
                      type="text"
                      label="Libéllé du groupe de la Matière"
                      disabled={isSubmitting || loading}
                    />
                    <SygexInput
                      name="subjectGroupCode"
                      type="text"
                      label="Code du groupe de la Matière"
                      disabled={isSubmitting || loading}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type="submit">
                      Valid{loading ? "ation en cours" : "er"}
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
export default CreateSubjectGroup;
