
import React from 'react';
import { useMutation } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createExamMutation } from '../queries&Mutations&Functions/Mutations'

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;

const validationSchema = Yup
  .object()
  .shape({
    examName: Yup
      .string()
      .required("Nom de l'examen obligatoire"),
    examCode: Yup
      .string()
      .required("Code de l'examen obligatoire")
  });

const CreateNewExam = () => {
  const initialValues = {
    examName: '',
    examCode: ''
  }
  const [createExam, { loading, error }] = useMutation(createExamMutation)
  return (

    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions, setSubmitting, resetForm) => {
        const res = await createExam({ variables: values });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          actions.resetForm(true);
          actions.setSubmitting(false);
        }, 400);
      }}>
      {({ values, isSubmitting }) => {
        return (

          <MinimStyledPage>
            <h4>Nouvel Examen</h4>
            <Error error={error} />
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput name="examName" type="text" label="Nom Examen" />
                    <SygexInput name="examCode" type="text" label="Code Examen" />

                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
                  </ButtonStyled>
                </AllControls>
              </Form>
            </StyledForm>
          </MinimStyledPage>
        )
      }}
    </Formik>

  );
}
export default CreateNewExam;