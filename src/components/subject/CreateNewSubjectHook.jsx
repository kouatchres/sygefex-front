
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import useForm from '../utils/useForm'
import { SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getAllSubjectTypesQuery, getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import { createNewSubjectMutation } from "../queries&Mutations&Functions/Mutations";
import { getObjectFromID, removeTypename } from "../queries&Mutations&Functions/Functions";

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
        subjectName: Yup
            .string()
            .required('Libéllé de la matière obligatoire'),
        subjectCode: Yup
            .string()
            .required('Code de la matière obligatoire'),
        educType: Yup.string().required("Choix d'un type d'enseignement obligatiore"),
        subjectType: Yup
            .string()
            .required("Choix d'un type de matière obligatiore")
    });

const CreateNewSubject = () => {
    const initialValues = {
        subjectName: '',
        subjectCode: '',
        educType: "",
        subjectType: "",

    }


    const { data: dataEducType, loading: loadingEducType, error: errEducType } = useQuery(getAllEducationTypesQuery)

    { loadingEducType && <p>Loading...</p>; }
    { errEducType && <Error error={errEducType} />; }

    const getEducationTypes = dataEducType && dataEducType.educationTypes;
    const refinedEducTypes =
        getEducationTypes && removeTypename(getEducationTypes);
    const getEducTypeOptions =
        refinedEducTypes &&
        refinedEducTypes.map((item) => ({ value: item.id, label: item.educationTypeName }));

    const { data, loading, error } = useQuery(getAllSubjectTypesQuery)

    { loading && <p>Loading...</p>; }
    { error && <Error error={error} />; }
    const getSubjectTypes = data && data.subjectTypes;
    const refinedSubjectType = getSubjectTypes && removeTypename(getSubjectTypes);
    console.log(refinedSubjectType);
    const getSubjectTypeOptions =
        refinedSubjectType &&
        refinedSubjectType.map(item => ({ value: item.id, label: item.subjectTypeName }));

    const [createSubject, { loadingSubj, errorSubj }] = useMutation(createNewSubjectMutation)
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createSubject({
                    variables:
                    {
                        ...values,
                        subjectType: refinedSubjectType && getObjectFromID(values.subjectType.value),
                        educType: refinedEducTypes && getObjectFromID(values.educType.value),
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.setSubmitting(false);
                    actions.resetForm(true);
                }, 400);
            }}>
            {({ values, setFieldValue, isSubmitting }) => {

                return (

                    <MinimStyledPage>
                        <h4>Nouvelle Matière</h4>
                        <Error error={errorSubj} />
                        <StyledForm disabled={loading} aria-busy={loading} >
                            <Form>
                                <AllControls>
                                    <InputGroup>

                                        <SygefexSelect name="educType" onChange={(value) => (setFieldValue('educType', value))} options={getEducTypeOptions} placeholder={"Le Type d'Enseignement"} disabled={isSubmitting} />
                                        <SygefexSelect name="subjectType" onChange={(value) => (setFieldValue('subjectType', value))} options={getSubjectTypeOptions} placeholder={"Le Type de Matière"} disabled={isSubmitting} />

                                        <SygexInput name="subjectName" type="text" label="Libéllé de la Matière" disabled={isSubmitting} />
                                        <SygexInput name="subjectCode" type="text" label="Code de la Matière" disabled={isSubmitting} />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
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
export default CreateNewSubject;