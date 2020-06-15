
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Select from 'react-select'
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton, customStyle, SygefexSelect } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { updateScoreMutation } from "../queries&Mutations&Functions/Mutations";
import { getObjectFromID, removeTypename } from "../queries&Mutations&Functions/Functions";
import {
    getAllEducationTypesQuery,
    getAllSubjectsOfASeriesQuery,
    getAllSeriesOfAnEducationTypeQuery
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;

const validationSchema = Yup
    .object()
    .shape({
        candExamSecretCode: Yup
            .string()
            .required("Code d'Anonymat du candidat Obligatoire"),
        educType: Yup
            .string()
            .required("Choix Du type d'Enseignement Obligatoire"),
        subjectSeries: Yup
            .string()
            .required("Choix de la matière Obligatoire"),
        series: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
        subjectAve: Yup
            .number()
            .min(0, 'Pas de note négative')
            .max(20, 'Pas de note supérieure a 20')
            .required('Note du candidate obligatoire'),
    });

const EnterNewMarks = () => {
    const initialValues = {
        subjectAve: "",
        series: "12",
        subjectSeries: "",
        educType: "12",
        candExamSecretCode: "",
    };


    const [state, setState, handleReactSelectChange] = useForm({ educTypeID: "", seriesID: "" })

    const { data: dataEducType, loadingEducType, errEducType } = useQuery(getAllEducationTypesQuery)
    { loadingEducType && <p>loading...</p>; }
    { errEducType && <Error error={errEducType} />; }
    console.log(dataEducType);

    const getEducationTypes = dataEducType && dataEducType.educationTypes;
    console.log(getEducationTypes);
    const getEducTypesOptions =
        getEducationTypes &&
        getEducationTypes.map(item => ({ value: item.id, label: item.educationTypeName }));

    const { data: dataEducationType, loading: loadingSeries, error: errSeries } = useQuery(getAllSeriesOfAnEducationTypeQuery, {
        skip: !state.educTypeID,
        variables: { id: state.educTypeID }
    })

    { loadingSeries && <p>loading...</p>; }
    { errSeries && <Error error={errSeries} />; }
    console.log(dataEducationType);
    const getEducationType = dataEducationType && dataEducationType.educationType;
    const { series } = { ...getEducationType };
    console.log(series);
    const refinedSeries = series && removeTypename(series);
    const getSeriesOptions =
        refinedSeries &&
        refinedSeries.map(item => ({ value: item.id, label: item.seriesName }));


    const { data: dataSubjSeries, loading: loadingSubjSer, error: errSubjSer } = useQuery(getAllSubjectsOfASeriesQuery, {
        skip: !state.seriesID,
        variables: { id: state.seriesID }
    })

    { loadingSubjSer && <p>loading...</p>; }
    { errSubjSer && <Error error={errSubjSer} />; }
    console.log(dataSubjSeries);
    const getSeries = dataSubjSeries && dataSubjSeries.series;
    const { subjectSeries } = { ...getSeries };
    console.log(subjectSeries);

    const refinedSubjectSeries =
        subjectSeries && removeTypename(subjectSeries);
    const getSubjectsOptions =
        refinedSubjectSeries &&
        refinedSubjectSeries.map(item => ({ value: item.id, label: item.subjectName }));


    const [updateScore, { loading, error }] = useMutation(updateScoreMutation)
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
                const res = await updateScore({
                    variables: {
                        ...values,
                        subjectSeries: refinedSubjectSeries && getObjectFromID(values.subjectSeries.value)
                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>
            {({ values, setFieldValue, isSubmitting }) => {
                return (
                    <MinimStyledPage>
                        <h4>Notes des candidats</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygefexSelect onChange={handleReactSelectChange} name="educTypeID" placeholder={"Le type d'enseignement"} options={getEducTypesOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="seriesID" placeholder={"La Serie"} options={getSeriesOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={(value) => (setFieldValue('subjectSeries', value))} name="subjectSeries" placeholder={"Matiere"} options={getSubjectsOptions} disabled={isSubmitting} />

                                        <SygexInput name="candExamSecretCode" type="text" label="Anonymat du candidat" disabled={isSubmitting} />
                                        <SygexInput
                                            name="subjectAve"
                                            type="number"
                                            step="0.001"
                                            label="Note en la matière"
                                            disabled={isSubmitting}
                                        />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit" disabled={isSubmitting}>Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
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
export default EnterNewMarks;