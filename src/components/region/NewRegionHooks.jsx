import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";
import { createNewRegionMutation } from "../queries&Mutations&Functions/Mutations";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllControlsComplete = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const validationSchema = Yup.object().shape({
  regName: Yup.string().required("Nom Région Obligatoire"),
  regCode: Yup.string().required("Code Région Obligatoire"),
});

const NewRegionHooks = () => {
  const initialValues = {
    regName: "",
    regCode: "",
  };

  const [createRegion, { loading, error }] = useMutation(
    createNewRegionMutation,
    {
      refetchQueries: ["getAllRegionsQueries"],
    }
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRegion({ variables: { ...values } });
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
            <h4>Nouvelle Région</h4>
            <Error error={error} />
            <StyledForm
              disabled={isSubmitting || loading}
              aria-busy={isSubmitting || loading}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      name="regName"
                      type="text"
                      label="Nom la Région"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="regCode"
                      type="text"
                      label="Code la Région"
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
export default NewRegionHooks;
