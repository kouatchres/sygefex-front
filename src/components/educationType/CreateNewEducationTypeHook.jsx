
import React from 'react';
import { useMutation } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createEducationTypeMutation } from '../queries&Mutations&Functions/Mutations'

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
    educationTypeName: Yup
      .string()
      .required("Nom Du type d'Enseignement Obligatoire"),
    educationTypeCode: Yup
      .string()
      .required("Code Du type d'Enseignement Obligatoire")
  });

const CreateNewEducationType = () => {
  const initialvalues = {
    educationTypeName: "",
    educationTypeCode: ""
  }
  const [createEducationType, { loading, error }] = useMutation(createEducationTypeMutation)

  return (

    <Formik
      method="POST"
      initialValues={initialvalues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions, setSubmitting, resetForm) => {
        const res = await createEducationType({ variables: values });
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
            <h4>Nouveau Type d'Enseignement</h4>
            <Error error={error} />
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput name="educationTypeName" type="text" label="Nom du Type D'Enseignement" />
                    <SygexInput name="educationTypeCode" type="text" label="Code du Type D'Enseignement" />

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
export default CreateNewEducationType;