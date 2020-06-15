
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Router from 'next/router'
import { Formik, Form } from 'formik';
import { customStyle, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import Select from 'react-select'
import * as Yup from 'yup';
import { getSelectedObject, removeTypename, getObjectFromID, uniqueCodeGen, candExamSessionCode } from '../queries&Mutations&Functions/Functions';
import { createRegistrationMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getAllSeriesOfACenterExamSessionQuery,
    getCenterExamSessionSeriesQuery,
    getSingleCenterQuery
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
        series: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
        centerNumber: Yup
            .number()
            .min(0, 'Pas de note négative')
            .required('No du centre obligatoire'),
    });

class RecentNewRegistration extends Component {
    initialValues = {
        exam: "",
        session: "",
        centerNumber: "",
        candCode: "",
        series: "",

    };
    state = { series: "", centerNumber: "", exam: "", session: "12" }

    handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        this.setState({ [name]: val });
    };

    makeCenterVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerNumber: `${centerCodeValue}`
        };
        return storedCenter;
    };

    candRegistrationNumber = (centerCode, exam, session) => {

        return `${centerCode + exam + session}`

    };
    makeCandVariableObject = (candCodeValue) => {
        const storedCandidate = {
            candCode: `${candCodeValue}`
        };
        return storedCandidate;
    };
    makeCESSObject = (candCodeValue) => {
        const objCESS = {
            id: `${candCodeValue}`
        };
        return objCESS;
    };

    render() {

        const { centerNumber, session, exam, series } = this.state
        this.initialValues.centerNumber = centerNumber
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
                    const getExamName = exams && { ...getSelectedObject(exams, exam) }
                    const refinedExams =
                        exams && removeTypename(exams);
                    const getExams = refinedExams && refinedExams.map((item) => ({ ...item, value: item.id, label: item.examName }))
                    console.log('state values', this.state);
                    return (
                        <Query query={getAllSessionsQuery}>
                            {({ data, loading, error }) => {
                                {
                                    loading && <p> loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }

                                const { sessions } = data;
                                const getSessionName = sessions && { ...getSelectedObject(sessions, session) }
                                const refinedSessions = sessions && removeTypename(sessions);
                                const getSessions = refinedSessions && refinedSessions.map((item) => ({ ...item, value: item.id, label: item.sessionName }))
                                return (

                                    <Query query={getExamSessionQuery}
                                        variables={{
                                            exam: refinedExams && getSelectedObject(refinedExams, exam),
                                            session: refinedSessions && getSelectedObject(refinedSessions, session)
                                        }}  >
                                        {({ data, error, loading }) => {
                                            console.log(data)
                                            const { examSessions } = { ...data }
                                            const refinedES = examSessions && removeTypename(examSessions)
                                            const reducedES = refinedES && refinedES[0]
                                            console.log(reducedES)

                                            return (
                                                <Query query={getSingleCenterQuery}
                                                    variables={{ centerNumber: centerNumber, }}  >
                                                    {({ data, error, loading }) => {
                                                        { loading && <p>...Loading</p> }
                                                        { error && <Error error={error} /> }
                                                        const { centerByNumber } = { ...data }
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
                                                                    { loading && <p>...Loading</p> }
                                                                    { error && <Error error={error} /> }
                                                                    console.log(data);
                                                                    const { centerExamSessionsByCode } = { ...data };
                                                                    console.log(centerExamSessionsByCode);
                                                                    // remove typename from the object
                                                                    const refinedCenterExamSessions =
                                                                        centerExamSessionsByCode && removeTypename(centerExamSessionsByCode);
                                                                    // transform the array into a single object
                                                                    const getObj = refinedCenterExamSessions && refinedCenterExamSessions[0]
                                                                    console.log(getObj);

                                                                    return (
                                                                        <Query
                                                                            query={getAllSeriesOfACenterExamSessionQuery}
                                                                            variables={{ id: getObj && getObj.id }}>
                                                                            {({ data, loading, error }) => {
                                                                                { loading && <p>...Loading</p> }
                                                                                { error && <Error error={error} /> }
                                                                                console.log(data);

                                                                                const { centerExamSession } = data;

                                                                                const seriesCES = { ...centerExamSession };
                                                                                const { centerExamSessionSeries } = seriesCES;
                                                                                console.log(centerExamSessionSeries);
                                                                                // get all the series out of this object

                                                                                const newSeries = centerExamSessionSeries && centerExamSessionSeries.map((item) => (item.series))
                                                                                const refinedSeries =
                                                                                    newSeries && removeTypename(newSeries);
                                                                                console.log(refinedSeries);
                                                                                const getSeries = refinedSeries && refinedSeries.map((item) => ({ ...item, value: item.id, label: item.seriesName }))
                                                                                return (

                                                                                    <Query query={getCenterExamSessionSeriesQuery}
                                                                                        variables={{
                                                                                            centerExamSession: getObj && getObj,
                                                                                            series: refinedSeries && getSelectedObject(refinedSeries, series)
                                                                                        }}
                                                                                    >
                                                                                        {({ data, error, loading }) => {
                                                                                            { loading && <p>...Loading</p> }
                                                                                            { error && <Error error={error} /> }
                                                                                            console.log(refinedSeries && getSelectedObject(refinedSeries, series));
                                                                                            const { centerExamSessionSerieses } = { ...data }
                                                                                            const getCESS = centerExamSessionSerieses && centerExamSessionSerieses[0]
                                                                                            const { id: idObj } = { ...getCESS }
                                                                                            const refinedCESS = idObj && this.makeCESSObject(idObj)
                                                                                            console.log(refinedCESS)
                                                                                            return (
                                                                                                <Mutation mutation={createRegistrationMutation}>

                                                                                                    {(createRegistration, { loading, error }) => (
                                                                                                        <Formik
                                                                                                            method="POST"
                                                                                                            initialValues={this.initialValues}
                                                                                                            validationSchema={validationSchema}
                                                                                                            onSubmit={async ({ candCode, series, session, exam, centerNumber, ...others }, actions, setSubmitting, resetForm) => {
                                                                                                                const res = await createRegistration({
                                                                                                                    variables: {
                                                                                                                        others,
                                                                                                                        candExamSecretCode: uniqueCodeGen(8),
                                                                                                                        candidate: this.makeCandVariableObject(candCode),
                                                                                                                        centerExamSession: getObj && getObj,
                                                                                                                        series: refinedSeries && getSelectedObject(refinedSeries, series),
                                                                                                                        centerExamSessionSeries: refinedCESS && refinedCESS,
                                                                                                                        candExamSession: candExamSessionCode(candCode, exam, session),
                                                                                                                        candRegistrationNumber: exams && sessions && this.candRegistrationNumber(centerNumber, getExamName.examCode, getSessionName.sessionName)
                                                                                                                    }

                                                                                                                });
                                                                                                                res && Router.push({
                                                                                                                    pathname: '/show/results/registrationReceipt',
                                                                                                                    query: { id: res.data.createRegistration.id },
                                                                                                                });
                                                                                                                setTimeout(() => {
                                                                                                                    console.log(JSON.stringify(others, null, 2));
                                                                                                                    console.log(res);
                                                                                                                    actions.resetForm(true);
                                                                                                                    actions.setSubmitting(false);
                                                                                                                }, 400);
                                                                                                            }}>
                                                                                                            {({ setFieldValue }) => {

                                                                                                                return (


                                                                                                                    <MinimStyledPage>
                                                                                                                        <h4>Inscription à l'Examen</h4>
                                                                                                                        <Error error={error} />
                                                                                                                        <StyledForm disabled={loading} aria-busy={loading} >
                                                                                                                            <Form>
                                                                                                                                <AllControls>
                                                                                                                                    <InputGroup>
                                                                                                                                        <SygexInput
                                                                                                                                            value={centerByNumber && centerByNumber.centerCode}
                                                                                                                                            name="centerName" type="text" label=" Nom du centre" />
                                                                                                                                        <SygexInput onChange={this.handleChange} name="centerNumber" value={centerNumber} type="number" label="Numero du centre" />

                                                                                                                                        <Select onChange={(value) => (setFieldValue('session', value))} styles={customStyle} name="session" options={getSessions} placeholder={'La Session'} />
                                                                                                                                        <Select onChange={(value) => (setFieldValue('exam', value))} styles={customStyle} name="exam" options={getExams} placeholder={"L'Examen"} />
                                                                                                                                        <Select onChange={(value) => (setFieldValue('series', value))} styles={customStyle} name="series" options={getSeries} placeholder={'La Serie'} />

                                                                                                                                        <SygexInput name="candCode" type="text" label="Code secret candidat" />
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
                                                    }</Query>
                                            )
                                        }
                                        }</Query>
                                )
                            }
                            }</Query>
                    )
                }
                }</Query>
        );
    }
}
export default RecentNewRegistration;