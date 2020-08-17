import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import { SygexInput, customStyle, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getSelectedObject, removeTypename } from '../queries&Mutations&Functions/Functions';
import { createCenterExamSessionSeriesMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterQuery,
    getAllEducationTypesQuery,
    getAllSeriesOfAnEducationTypeQuery
} from '../queries&Mutations&Functions/Queries';

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
        exam: Yup
            .string()
            .required("Choix De l'examen Obligatoire"),
        session: Yup
            .string()
            .required("Choix de la session Obligatoire"),
        centerNumber: Yup
            .number()
            .min(0, 'Pas de Numéro négative')
            .required('Numéro du centre obligatoire'),
        educType: Yup
            .string()
            .required("Choix du Type d'enseignement Obligatoire"),
        series: Yup
            .string()
            .required('Série Obligatoire'),
    });

class NewCenterTakesSeries extends Component {
    initialValues = {
        exam: "",
        session: "",
        centerNumber: "",
        educType: "",
        series: "",
    };
    state = {
        exam: "",
        session: "",
        centerNumber: "",
        educType: "",
        series: "",
    }

    handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number"
            ? parseInt(value)
            : value;
        this.setState({ [name]: val });
    };

    makeCenterVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerNumber: `${centerCodeValue}`
        };
        return storedCenter;
    };

    makeExaminerObject = (profCodeValue) => {
        const storedProf = {
            examinerCode: `${profCodeValue}`
        };
        return storedProf;
    };
    makeCESSObject = (candCodeValue) => {
        const objCESS = {
            id: `${candCodeValue}`
        };
        return objCESS;
    };

    render() {

        const { educType, centerNumber, series, session, exam } = this.state

        this.initialValues.centerNumber = centerNumber
        this.initialValues.educType = educType
        this.initialValues.exam = exam
        this.initialValues.session = session
        this.initialValues.series = series

        return (
            <Query query={getAllExamsQuery}>
                {({ data, loading, error }) => {
                    {
                        loading && <p>loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }

                    const { exams } = data;
                    console.log(exams);
                    const refinedExams = exams && removeTypename(exams);
                    const getExams = refinedExams && refinedExams.map((item) => ({ ...item, value: item.id, label: item.examName }))
                    return (
                        <Query query={getAllSessionsQuery}>
                            {({ data, loading, error }) => {
                                {
                                    loading && <p>
                                        loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }

                                const { sessions } = data;
                                const refinedSessions = sessions && removeTypename(sessions);
                                const getSessions = refinedSessions && refinedSessions.map((item) => ({ ...item, value: item.id, label: item.sessionName }))
                                return (

                                    <Query
                                        query={getExamSessionQuery}
                                        variables={{
                                            exam: refinedExams && getSelectedObject(refinedExams, exam),
                                            session: refinedSessions && getSelectedObject(refinedSessions, session)
                                        }}
                                        skip={getAllSessionsQuery.loading}
                                        skip={getAllExamsQuery.loading}>
                                        {({ data, error, loading }) => {
                                            console.log(data)
                                            const { examSessions } = {
                                                ...data
                                            }
                                            const refinedES = examSessions && removeTypename(examSessions)
                                            const reducedES = refinedES && refinedES[0]
                                            console.log(reducedES)

                                            return (
                                                <Query
                                                    query={getSingleCenterQuery}
                                                    variables={{
                                                        centerNumber: centerNumber
                                                    }}
                                                    skip={getExamSessionQuery.loading}>
                                                    {({ data, error, loading }) => {
                                                        {
                                                            loading && <p>...Loading</p>
                                                        }
                                                        {
                                                            error && <Error error={error} />
                                                        }
                                                        const { centerByNumber } = {
                                                            ...data
                                                        }
                                                        centerByNumber && removeTypename(centerByNumber)
                                                        console.log(centerByNumber)
                                                        return (
                                                            <Query
                                                                query={getSingleCenterExamSessionQuery}
                                                                variables={{
                                                                    examSession: reducedES && reducedES,
                                                                    center: centerByNumber && centerByNumber
                                                                }}>
                                                                {({ data, error, loading }) => {
                                                                    {
                                                                        loading && <p>...Loading</p>
                                                                    }
                                                                    {
                                                                        error && <Error error={error} />
                                                                    }
                                                                    console.log(data);
                                                                    const { centerExamSessionsByCode } = data;
                                                                    console.log(centerExamSessionsByCode);
                                                                    // remove typename from the object
                                                                    const refinedCenterExamSessionsByCode = centerExamSessionsByCode && removeTypename(centerExamSessionsByCode);
                                                                    // transform the array into a single object
                                                                    const getObj = refinedCenterExamSessionsByCode && refinedCenterExamSessionsByCode[0]
                                                                    console.log(getObj);

                                                                    return (
                                                                        <Query query={getAllEducationTypesQuery}>
                                                                            {({ data, loading, error }) => {
                                                                                {
                                                                                    loading && (
                                                                                        <p>loading...</p>
                                                                                    );
                                                                                }
                                                                                {
                                                                                    error && (<Error error={error} />);
                                                                                }
                                                                                console.log(data);
                                                                                const { educationTypes } = data;
                                                                                const educTypeOptions = educationTypes && educationTypes.map((item) => (
                                                                                    <option key={item.id} value={item.id}>
                                                                                        {item.educationTypeName}
                                                                                    </option>
                                                                                ));

                                                                                return (
                                                                                    <Query
                                                                                        query={getAllSeriesOfAnEducationTypeQuery}
                                                                                        variables={educationTypes && getSelectedObject(educationTypes, educTypeID)}>
                                                                                        {({ data, loading, error }) => {
                                                                                            {
                                                                                                loading && (
                                                                                                    <p>
                                                                                                        loading...
                                                                                                    </p>
                                                                                                );
                                                                                            }
                                                                                            {
                                                                                                error && (<Error error={error} />);
                                                                                            }
                                                                                            console.log(data);

                                                                                            const { educationType } = data;

                                                                                            const seriesEducType = {
                                                                                                ...educationType
                                                                                            };
                                                                                            const { series } = seriesEducType;
                                                                                            console.log(series);

                                                                                            const refinedSeries = series && removeTypename(series)
                                                                                            const seriesOptions = series && series.map((item) => (
                                                                                                <option key={item.id} value={item.id}>
                                                                                                    {item.seriesName}
                                                                                                </option>
                                                                                            ));

                                                                                            return (

                                                                                                <Mutation mutation={createCenterExamSessionSeriesMutation}>
                                                                                                    {(createCenterExamSessionSeries, { loading, error }) => (

                                                                                                        <Formik
                                                                                                            method="POST"
                                                                                                            initialValues={this.initialValues}
                                                                                                            validationSchema={validationSchema}
                                                                                                            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                                                                const res = await createCenterExamSessionSeries({
                                                                                                                    variables: {
                                                                                                                        series: refinedSeries && getSelectedObject(refinedSeries, values.series),
                                                                                                                        centerExamSession: getObj && getObj
                                                                                                                    }
                                                                                                                });
                                                                                                                setTimeout(() => {
                                                                                                                    console.log(JSON.stringify(values, null, 2));
                                                                                                                    console.log(res.data.createCenterExamSessionSeries);
                                                                                                                    actions.resetForm(true);
                                                                                                                    actions.setSubmitting(false);
                                                                                                                }, 200);
                                                                                                            }}>
                                                                                                            <MinimStyledPage>
                                                                                                                <h4>
                                                                                                                    Spécialités offertes par Centre</h4>
                                                                                                                <Error error={error} />
                                                                                                                <StyledForm disabled={loading} aria-busy={loading} >
                                                                                                                    <Form>
                                                                                                                        <AllControls>
                                                                                                                            <InputGroup>
                                                                                                                                <SygexInput
                                                                                                                                    value={centerByNumber && centerByNumber.centerCode}
                                                                                                                                    name="centerName"
                                                                                                                                    type="text"
                                                                                                                                    label=" Nom du centre" />
                                                                                                                                <SygexInput
                                                                                                                                    onChange={this.handleChange}
                                                                                                                                    name="centerNumber"
                                                                                                                                    type="number"
                                                                                                                                    label="Numéro du centre" />

                                                                                                                                <Select onChange={(value) => (setFieldValue('session', value))} name="session" styles={customStyle} options={getSessions} placeholder={"La Session"} />
                                                                                                                                <Select onChange={(value) => (setFieldValue('session', value))} name="exam" styles={customStyle} options={getSessions} placeholder={"La Session"} />
                                                                                                                                <Select onChange={(value) => (setFieldValue('session', value))} name="educType" styles={customStyle} options={getSessions} placeholder={"La Session"} />
                                                                                                                                <Select onChange={(value) => (setFieldValue('session', value))} name="series" styles={customStyle} options={getSessions} placeholder={"La Session"} />
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

                                                                                            )
                                                                                        }}</Query>
                                                                                )
                                                                            }}</Query>
                                                                    )
                                                                }}</Query>
                                                        )
                                                    }
                                                    }
                                                </Query>)
                                        }}</Query>)
                            }}</Query>
                    )
                }
                }</Query>
        );
    }
}
export default NewCenterTakesSeries;