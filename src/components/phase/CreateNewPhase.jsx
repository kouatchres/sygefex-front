import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { createPhaseMutation } from "../queries&Mutations&Functions/Mutations";
import { useMutation } from "@apollo/react-hooks";
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

const validationSchema = Yup.object().shape({
  phaseName: Yup.string().required("Nom de la Phase de l'examen obligatoire"),
  phaseCode: Yup.string().required("Nom de la Phase de l'examen obligatoire"),
});

const CreateNewPhase = () => {
  const initialValues = {
    phaseName: "",
    phaseCode: "",
  };

  const [createPhase, { loading, error }] = useMutation(createPhaseMutation);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createPhase({ variables: values });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ isSubmitting, values }) => (
        <MinimStyledPage>
          <h4>Crée phase de l'Examen</h4>
          <Error error={error} />
          <StyledForm
            disabled={isSubmitting || loading}
            aria-busy={isSubmitting || loading}
          >
            <Form>
              <AllControls>
                <InputGroup>
                  <SygexInput
                    name="phaseName"
                    type="text"
                    label="Nom Phase de l'examen"
                    disabled={isSubmitting}
                  />
                  <SygexInput
                    name="phaseCode"
                    type="text"
                    label="Code Phase de l'examen"
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
      )}
    </Formik>
  );
};
export default CreateNewPhase;
