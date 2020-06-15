import React from 'react';
import { useMutation } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
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

const CreateNewRankHook = () => {
    const initialValues = {
        rankName: '', rankCode: ''
    }
    const [createRank, { loading, error }] = useMutation(createNewRankMutation)

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createRank({ variables: values });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 200);
            }}>
            {({ isSubmitting }) => {
                return (

                    <MinimStyledPage>
                        <h4>Crée Poste</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygexInput name="rankName" type="text" label="Nom Poste" />
                                        <SygexInput name="rankCode" type="text" label="Code Poste" />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit" disabled={isSubmitting}>
                                            Valid{isSubmitting ? 'ation en cours' : 'er'}
                                        </StyledButton>
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
export default CreateNewRankHook;