import React, { useState } from "react";
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
import { useMutation } from "@apollo/react-hooks";
import { requestResetMutation } from "../queries&Mutations&Functions/Mutations";

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
  email: Yup.string()
    .min(3, "Email 3 characters au moins")
    .required("Email Obligatoire")
    .email("Email invalide"),
});

const RequestReset = () => {
  const [state, setState] = useState({});
  const initialValues = { email: "" };

  const [requestReset, { loading, error, called }] = useMutation(
    requestResetMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { data } = await requestReset({
          variables: { ...values },
        });
        setState({ data });
        <BestModal />;
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(data.requestReset.message);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Demande de Changer Mot de passe</h4>
            <Error error={error} />
            <p>
              {!error && !loading && called && state.data.requestReset.message}
            </p>
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="email"
                      type="email"
                      label="Email"
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
// 1 TODO TAKE IT OFF
// choose to take all of the things out of the way
// we are the last of the remaining survivors

export default RequestReset;
