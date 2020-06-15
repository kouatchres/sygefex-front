
import React, { Component } from 'react';
import { Query } from 'react-apollo'
import { MinimStyledPage } from '../../styles/StyledPage'
import Error from '../../ErrorMessage.js';
import Router from 'next/router'
import { Formik, Form } from 'formik';
import { SygexInput, SygexSelect, StyledForm, ButtonStyled, StyledButton } from '../../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getSelectedObject } from '../../queries&Mutations&Functions/Functions';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterQuery
} from '../../queries&Mutations&Functions/Queries';

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
        examID: Yup
            .string()
            .required("Choix De l'examen Obligatoire"),
        sessionID: Yup
            .string()
            .required("Choix de la session Obligatoire"),
        centerNumber: Yup
            .number()
            .min(0, 'Pas de note négative')
            .required('No du centre obligatoire'),
    });

class NewGenCenterResults extends Component {
    initialValues = {
        examID: "",
        sessionID: "",
        centerNumber: "",

    };
    state = { centerNumber: "", examID: "", sessionID: "12" }

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

        const { centerNumber, sessionID, examID } = this.state
        this.initialValues.sessionID = sessionID
        this.initialValues.centerNumber = centerNumber
        this.initialValues.examID = examID

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
                    const getExamName = exams && { ...getSelectedObject(exams, examID) }
                    const refinedExams =
                        exams && exams.map(({ __typename, examName, ...others }) => others);
                    const examsOptions = exams && exams.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.examName}
                        </option>
                    ))
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
                                const getSessionName = sessions && { ...getSelectedObject(sessions, sessionID) }
                                const refinedSessions = sessions && sessions.map(({ __typename, sessionName, ...others }) => others);
                                const sessionsOptions = sessions && sessions.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.sessionName}
                                    </option>
                                ))
                                return (

                                    <Query query={getExamSessionQuery}
                                        variables={{

                                            exam: refinedExams && getSelectedObject(refinedExams, examID),
                                            session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                        }} delay="skip" >
                                        {({ data, error, loading, load }) => {
                                            console.log(`examName-- ${getExamName}, examen--${examID},  session- ${sessionID}`);
                                            console.log(data)
                                            const { examSessions } = { ...data }
                                            const refinedES = examSessions && examSessions.map(({ __typename, ...others }) => others)
                                            const reducedES = refinedES && refinedES.reduce((item) => item)
                                            console.log(reducedES)

                                            return (
                                                <Query query={getSingleCenterQuery}
                                                    variables={{ centerNumber: centerNumber, }}  >
                                                    {({ data, error, loading }) => {
                                                        { loading && <p>...Loading</p> }
                                                        { error && <Error error={error} /> }
                                                        const { centerByNumber } = { ...data }
                                                        centerByNumber && delete centerByNumber.__typename
                                                        console.log(centerByNumber)
                                                        return (
                                                            <Query
                                                                query={getSingleCenterExamSessionQuery}
                                                                variables={{
                                                                    examSession: reducedES && reducedES,
                                                                    center: centerByNumber && centerByNumber
                                                                }} delay="skip">
                                                                {({ data, error, loading, load }) => {
                                                                    { loading && <p>...Loading</p> }
                                                                    { error && <Error error={error} /> }
                                                                    console.log(data);
                                                                    const { centerExamSessionsByCode } = { ...data };
                                                                    console.log(centerExamSessionsByCode);
                                                                    // remove typename from the object
                                                                    const refinedCenterExamSessions =
                                                                        centerExamSessionsByCode && centerExamSessionsByCode.map(({ __typename, ...others }) => others);
                                                                    // transform the array into a single object
                                                                    const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
                                                                    console.log(getObj);
                                                                    getObj && Router.push({
                                                                        pathname: '/show/results/centerResults',
                                                                        query: {
                                                                            id: getObj.id
                                                                        }
                                                                    });


                                                                    return (
                                                                        <Formik
                                                                            method="POST"
                                                                            initialValues={this.initialValues}
                                                                            validationSchema={validationSchema}>
                                                                            <MinimStyledPage>
                                                                                <h4>Resultats d'un Centre</h4>
                                                                                <Error error={error} />
                                                                                <StyledForm>
                                                                                    <Form>
                                                                                        <AllControls>
                                                                                            <InputGroup>
                                                                                                <SygexInput
                                                                                                    value={centerByNumber && centerByNumber.centerCode}
                                                                                                    name="centerName" type="text" label=" Nom du centre" />
                                                                                                <SygexInput onChange={this.handleChange} name="centerNumber" type="number" label="no du centre" />

                                                                                                <SygexSelect onChange={this.handleChange} name="sessionID">
                                                                                                    <option>La session</option>
                                                                                                    {sessionsOptions}
                                                                                                </SygexSelect>
                                                                                                <SygexSelect onChange={this.handleChange} name="examID">
                                                                                                    <option>L'Examen </option>
                                                                                                    {examsOptions}
                                                                                                </SygexSelect>

                                                                                            </InputGroup>
                                                                                            <ButtonStyled>
                                                                                                <StyledButton onclick={load} type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                                                                            </ButtonStyled>
                                                                                        </AllControls>
                                                                                    </Form>
                                                                                </StyledForm>
                                                                            </MinimStyledPage>
                                                                        </Formik>
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

        );
    }
}
export default NewGenCenterResults;