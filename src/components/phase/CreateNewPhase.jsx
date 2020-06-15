import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createPhaseMutation } from '../queries&Mutations&Functions/Mutations'

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
        phaseName: Yup
            .string()
            .required("Nom de la Phase de l'examen obligatoire"),
        phaseCode: Yup
            .string()
            .required("Nom de la Phase de l'examen obligatoire")
    });

class CreateNewPhase extends Component {
    initialFormState = {
        phaseName: '',
        phaseCode: ''
    }

    render() {
        return (
            <Mutation mutation={createPhaseMutation}>
                {(createPhase, { loading, error }) => (
                    <Formik
                        initialValues={this.initialFormState}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                            const res = await createPhase({ variables: values });
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                console.log(res);
                                actions.resetForm(true);
                                actions.setSubmitting(false);
                            }, 400);
                        }}>
                        <MinimStyledPage>
                            <h4>Crée phase de l'Examen</h4>
                            <Error error={error} />
                            <StyledForm disabled={loading} aria-busy={loading} >
                                <Form>
                                    <AllControls>
                                        <InputGroup>
                                            <SygexInput name="phaseName" type="text" label="Nom Phase de l'examen" />
                                            <SygexInput name="phaseCode" type="text" label="Code Phase de l'examen" />

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
export default CreateNewPhase;