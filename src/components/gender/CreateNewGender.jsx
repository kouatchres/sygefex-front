import React from "react";
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
import { createNewGenderMutation } from "../queries&Mutations&Functions/Mutations";
import { useMutation } from "@apollo/react-hooks";

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
  genderName: Yup.string().required("Nom du sexe Obligatoire"),
  genderCode: Yup.string().required("Code du sexe Obligatoire"),
});

const CreateNewGender = () => {
  const initialValues = {
    genderName: "",
    genderCode: "",
  };
  const [createGender, { loading, error }] = useMutation(
    createNewGenderMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createGender({ variables: values });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <MinimStyledPage>
          <Error error={error} />
          <h4>Nouveau Sexe</h4>
          <StyledForm
            disabled={loading || isSubmitting}
            aria-busy={loading || isSubmitting}
          >
            <Form>
              <AllControls>
                <InputGroup>
                  <SygexInput name="genderName" type="text" label="Nom Sexe" />
                  <SygexInput name="genderCode" type="text" label="Code Sexe" />
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
      )}
    </Formik>
  );
};
export default CreateNewGender;
