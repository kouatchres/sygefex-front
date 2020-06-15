
import React from 'react';
import { useMutation } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import useForm from '../utils/useForm'
import { createNewSubjectTypeMutation } from '../queries&Mutations&Functions/Mutations'

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
        subjectTypeName: Yup
            .string()
            .required("Nom Du type d'Enseignement Obligatoire"),
        subjectTypeCode: Yup
            .string()
            .required("Code Du type d'Enseignement Obligatoire")
    });

const CreateNewSubjectType = () => {
    const initialValues = {
        subjectTypeName: "",
        subjectTypeCode: ""
    }

    const [createSubjectType, { loading, error }] = useMutation(createNewSubjectTypeMutation)
    return (

        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createSubjectType({ variables: values });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>{({ isSubmitting }) => {
                return (

                    <MinimStyledPage>
                        <h4>Crée Type de Matière</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygexInput name="subjectTypeName" type="text" label="Nom du Type de Matière" disabled={isSubmitting} />
                                        <SygexInput name="subjectTypeCode" type="text" label="Code du Type de Matière" disabled={isSubmitting} />

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
export default CreateNewSubjectType;