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
import { signupUserMutation } from "../queries&Mutations&Functions/Mutations";
import { currentUserQuery } from "../queries&Mutations&Functions/Queries";

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
  }
`;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Email, 3 characters au moins")
    .required("Email Obligatoire")
    .email("Email invalide"),
  name: Yup.string()
    .min(3, "Nom, 3 characters au moins")
    .required("Nom Obligatoire"),
  password: Yup.string()
    .required("Mot de passe Obligatoire")
    .min(8, "Mot de passe, 8 characters au moins"),
  confirmPassword: Yup.string()
    .required("Confirme mot de passe Obligatoire")
    .oneOf([Yup.ref("password")], "Les mots de passe ne correspondent pas")
    .min(8, "Mot de passe, 8 characters au moins"),
});

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [signup, { loading, error }] = useMutation(signupUserMutation, {
    refetchQueries: ["currentUserQuery"],
  });

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await signup({
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
            <h4>Ouverture de compte</h4>
            <Error error={error} />
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
                    <SygexInput
                      name="name"
                      type="text"
                      label="Nom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="password"
                      type="password"
                      label="Mot de passe"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="confirmPassword"
                      type="password"
                      label="Confirme mot de passe"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <LoginStyled>
                    <ul>
                      <h9>Acceder a votre compte. </h9>
                      <Link href="/creates/login">
                        <a>Connectez-vous</a>
                      </Link>
                    </ul>
                  </LoginStyled>
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
export default Signup;
