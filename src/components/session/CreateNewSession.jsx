
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createNewSessionMutation } from '../queries&Mutations&Functions/Mutations'

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
    sessionName: Yup
      .string()
      .required('Required'),
    sessionCode: Yup
      .string()
      .required('Required')
  });

class CreateNewSession extends Component {
  initialFormState = {
    sessionName: '',
    sessionCode: ''
  }

  render() {
    return (
      <Mutation mutation={createNewSessionMutation}>
        {(createSession, { loading, error }) => (
          <Formik
            method="POST"
            initialValues={this.initialFormState}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
              const res = await createSession({ variables: values });
              setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                console.log(res);
                actions.resetForm(true);
                actions.setSubmitting(false);
              }, 400);
            }}>
            <MinimStyledPage>
              <h4>Crée Session</h4>
              <Error error={error} />
              <StyledForm disabled={loading} aria-busy={loading} >
                <Form>
                  <AllControls>
                    <InputGroup>
                      <SygexInput name="sessionName" type="text" label="Nom Session" />
                      <SygexInput name="sessionCode" type="text" label="Code Session" />

                    </InputGroup>
                    <ButtonStyled>
                      <StyledButton type="submit">Valid{loading
                        ? 'ation en cours'
                        : 'er'}</StyledButton>
                    </ButtonStyled>
                  </AllControls>
                </Form>
              </StyledForm>
            </MinimStyledPage>
          </Formik>
        )
        }
      </Mutation>

    );
  }
}
export default CreateNewSession;