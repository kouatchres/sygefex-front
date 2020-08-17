import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { createNewSessionMutation } from "../queries&Mutations&Functions/Mutations";

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
  sessionName: Yup.string().required("Required"),
  sessionCode: Yup.string().required("Required"),
});

const CreateNewSessionHook = () => {
  const initialValues = {
    sessionName: "",
    sessionCode: "",
  };

  const [createSession, { loading, error }] = useMutation(
    createNewSessionMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSession({ variables: values });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Nouvelle Session</h4>
            <Error error={error} />
            <StyledForm
              disabled={isSubmitting || loading}
              aria-busy={isSubmitting || loading}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="sessionName"
                      type="text"
                      label="Nom Session"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="sessionCode"
                      type="text"
                      label="Code Session"
                      disabled={isSubmitting}
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
export default CreateNewSessionHook;
