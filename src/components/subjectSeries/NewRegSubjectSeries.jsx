
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import useForm from '../utils/useForm'
import * as Yup from 'yup';
import { registerNewSubjectSeriesMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, removeTypename } from "../queries&Mutations&Functions/Functions";
import {
    getAllEducationTypesQuery,
    getAllSubjectsOfAnEducTypeQuery,
    getAllSeriesOfAnEducationTypeQuery
} from "../queries&Mutations&Functions/Queries";

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

        series: Yup
            .string()
            .required("Choix de la Série Obligatoire"),
        subjectSeries: Yup
            .string()
            .required("Choix de la matière Obligatoire"),
        coeff: Yup
            .number()
            .min(1, "Le coefficient doit etre au moins 1")
            .required("Choix de la matière Obligatoire"),

    });

const NewRegSubjectSeries = () => {

    const makeSeriesObject = (seriesID, seriesCode) => {
        const storedSeries = {
            id: `${seriesID}`,
            seriesCode: `${seriesCode}`
        };
        return storedSeries;
    };
    const initialValues = {
        series: " ",
        subjectSeries: " ",
        coeff: ""
    };

    const [state, setState, handleReactSelectChange] = useForm({ educTypeID: " ", })

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataEducType, loadingEducType, errorEducType } = useQuery(getAllEducationTypesQuery)
    { loadingEducType && <p>loading...</p>; }
    { errorEducType && <Error error={errorEducType} />; }
    console.log(dataEducType);

    const getEducTypes = dataEducType && dataEducType.educationTypes;
    console.log(getEducTypes);
    const getEducTypeOptions =
        getEducTypes &&
        getEducTypes.map(item => (
            { value: item.id, label: item.educationTypeName }
        ));

    const { data: dataSeries, loading: loadingSeries, error: errorSeries } = useQuery(getAllSeriesOfAnEducationTypeQuery, {
        skip: !state.educTypeID,
        variables: { id: state.educTypeID }
    })
    { loadingSeries && <p>loading...</p>; }
    { errorSeries && <Error error={errorSeries} />; }
    console.log(dataSeries);

    const getSeriesEducType = dataSeries && dataSeries.educationType;
    const { series } = { ...getSeriesEducType };
    console.log(series);

    const refinedSeries = series && removeTypename(series);
    const getSeriesOptions =
        refinedSeries &&
        refinedSeries.map(item => ({ ...item, value: item.id, label: item.seriesName }))


    const { data: dataSubj, loading: loadingSubj, error: errorSubj } = useQuery(getAllSubjectsOfAnEducTypeQuery, {
        skip: !state.educTypeID,
        variables: { id: state.educTypeID }
    })
    { loadingSubj && <p>loading...</p>; }
    { errorSubj && <Error error={errorSubj} />; }
    console.log(dataSubj);
    const getEducationType = dataSubj && dataSubj.educationType;
    const { subject } = { ...getEducationType };
    console.log(subject);
    const refinedSubject = subject && removeTypename(subject);
    const getSubjectOptions =
        refinedSubject &&
        refinedSubject.map(item => ({ ...item, value: item.id, label: item.subjectName }));

    const [createSubjectSeries, { loading, error }] = useMutation(registerNewSubjectSeriesMutation)
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createSubjectSeries({
                    variables: {
                        ...values,
                        series: refinedSeries && makeSeriesObject(values.series.value, values.series.seriesCode),
                        subjectName: refinedSubject && values.subjectSeries.subjectName,
                        subjectCode: refinedSubject && values.subjectSeries.subjectCode

                    }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 200);
            }}>
            {({ values, isSubmitting, setFieldValue }) => {
                return (
                    <MinimStyledPage>
                        <h4>Donner les matières aux Séries</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygefexSelect onChange={handleReactSelectChange} name="educTypeID" placeholder="Le type d'enseignement" options={getEducTypeOptions} disbled={isSubmitting} />
                                        <SygefexSelect onChange={(value) => (setFieldValue('series', value))} name="series" placeholder="La Série" options={getSeriesOptions} disbled={isSubmitting} />
                                        <SygefexSelect onChange={(value) => (setFieldValue('subjectSeries', value))} name="subjectSeries" placeholder="La matière" options={getSubjectOptions} disbled={isSubmitting} />
                                        <SygexInput name="coeff" type="number" label="Coefficient de la matière" disabled={isSubmitting} />

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
export default NewRegSubjectSeries;