import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import Link from "next/link";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { loginUserMutation } from "../queries&Mutations&Functions/Mutations";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: left;
  a {
    display: block;
    cursor: pointer;
  }
  h9 {
    display: block;
    padding-left: 0;
    padding-right: 2rem;
  }
`;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Email 3 characters au moins")
    .required("Email Obligatoire")
    .email("Email invalide"),

  password: Yup.string()
    .required("Mot de passe Obligatoire")
    .min(3, "Mot de passe 3 characters au moins"),
});

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [login, { loading, error }] = useMutation(loginUserMutation, {
    refetchQueries: ["currentUserQuery"],
  });

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await login({
          variables: { ...values },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Acceder a son compte</h4>
            <Error error={error} />
            <StyledForm
              disabled={isSubmitting || loading}
              aria-busy={isSubmitting || loading}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="email"
                      type="email"
                      label="Email"
                      disabled={isSubmitting || loading}
                    />
                    <SygexInput
                      name="password"
                      type="password"
                      label="Mot de passe"
                      disabled={isSubmitting || loading}
                    />
                  </InputGroup>
                  <LoginStyled>
                    <ul>
                      <h6>Pas encore de compte?</h6>
                      <Link href="/creates/signup">
                        <a>Créez votre compte</a>
                      </Link>
                    </ul>
                  </LoginStyled>
                  <ButtonStyled>
                    <StyledButton
                      type="submit"
                      disabled={isSubmitting || loading}
                    >
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
export default Login;
