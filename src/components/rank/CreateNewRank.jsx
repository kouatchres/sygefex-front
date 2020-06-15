import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createNewRankMutation } from '../queries&Mutations&Functions/Mutations'

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
        rankName: Yup
            .string()
            .required('Nom du Poste obligatoire'),
        rankCode: Yup
            .string()
            .required('Code du Poste obligatoire')
    });

class CreateNewRank extends Component {
    initialValues = {
        rankName: '',
        rankCode: ''
    }

    render() {

        return (
            <Mutation mutation={createNewRankMutation}>
                {(createRank, { loading, error }) => (
                    <Formik
                        initialValues={this.initialValues}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                            const res = await createRank({ variables: values });
                            setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                console.log(res);
                                actions.resetForm(true);
                                actions.setSubmitting(false);
                            }, 400);
                        }}>
                        <MinimStyledPage>
                            <h4>Crée Poste</h4>
                            <Error error={error} />
                            <StyledForm disabled={loading} aria-busy={loading} >
                                <Form>
                                    <AllControls>
                                        <InputGroup>
                                            <SygexInput name="rankName" type="text" label="Nom Poste" />
                                            <SygexInput name="rankCode" type="text" label="Code Poste" />

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
export default CreateNewRank;