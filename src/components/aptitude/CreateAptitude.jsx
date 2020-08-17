import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { createAptitudeMutation } from "../queries&Mutations&Functions/Mutations";

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
  aptitudeName: Yup.string().required("Nom de l'aptitude obligatoire"),
  aptitudeCode: Yup.string().required("Code de l'aptitude obligatoire"),
});

const CreateAptitude = () => {
  const initialValues = {
    aptitudeName: "",
    aptitudeCode: "",
  };
  const [createAptitude, { loading, error }] = useMutation(
    createAptitudeMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions, setSubmitting, resetForm) => {
        const res = await createAptitude({ variables: values });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          actions.resetForm(true);
          actions.setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Nouvel Aptitude</h4>
            <Error error={error} />
            <StyledForm
              disabled={isSubmitting || loading}
              aria-busy={isSubmitting || loading}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="aptitudeName"
                      type="text"
                      label="Nom aptitude"
                    />
                    <SygexInput
                      name="aptitudeCode"
                      type="text"
                      label="Code aptitude"
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type="submit">
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
export default CreateAptitude;
