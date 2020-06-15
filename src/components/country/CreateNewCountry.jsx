
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MiniStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createNewCountryMutation } from '../queries&Mutations&Functions/Mutations'

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
    countryName: Yup
      .string()
      .required('Nom du pays obligatoire'),
    countryCode: Yup
      .string()
      .required('Code du pays obligatoire')
  });

class CreateNewCountry extends Component {
  initialValues = {
    countryName: '',
    countryCode: ''
  }

  render() {
    return (
      <Mutation mutation={createNewCountryMutation}>
        {(createCountry, { loading, error }) => (
          <Formik
            method="POST"
            initialValues={this.initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
              const res = await createCountry({ variables: values });
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                console.log(res);
                actions.resetForm(true);
                actions.setSubmitting(false);
              }, 400);
            }}>
            <MiniStyledPage>
              <Error error={error} />
              <h4>Crée Nouveau Pays</h4>
              <StyledForm disabled={loading} aria-busy={loading} >
                <Form>
                  <AllControls>
                    <InputGroup>
                      <SygexInput name="countryName" type="text" label="Nom du Pays" />
                      <SygexInput name="countryCode" type="text" label="Code du Pays" />

                    </InputGroup>
                    <ButtonStyled>
                      <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                    </ButtonStyled>
                  </AllControls>
                </Form>
              </StyledForm>
            </MiniStyledPage>
          </Formik>
        )
        }
      </Mutation>

    );
  }
}
export default CreateNewCountry;