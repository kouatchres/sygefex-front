
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Router from 'next/router'
import { Formik, Form } from 'formik';
import { SygexInput, SygexSelect, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getSelectedObject, removeTypename } from '../queries&Mutations&Functions/Functions';
import { createCenterExamSessionMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterQuery
} from '../queries&Mutations&Functions/Queries';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
    padding-bottom:0;
    margin-bottom:0;
   
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

class NewCenterExamSession
    extends Component {
    initialValues = {
        examID: "",
        sessionID: "",
        centerNumber: "",

    };
    state = {
        centerNumber: "",
        examID: "",
        sessionID: "12"
    }


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

        const {
            centerNumber,
            sessionID,
            examID,
        } = this.state

        this.initialValues.centerNumber = centerNumber
        this.initialValues.examID = examID
        this.initialValues.sessionID = sessionID

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
                    const refinedExams = exams && removeTypename(exams)
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
                                const refinedSessions = sessions && removeTypename(sessions);
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
                                        }}
                                    >
                                        {({ data, error, loading }) => {
                                            console.log(data)
                                            const { examSessions } = { ...data }
                                            const refinedES = examSessions && removeTypename(examSessions)
                                            const reducedES = refinedES && refinedES[0]
                                            console.log(reducedES)

                                            return (
                                                <Query query={getSingleCenterQuery}
                                                    variables={{ centerNumber: centerNumber }}
                                                >
                                                    {({ data, error, loading }) => {
                                                        { loading && <p>...Loading</p> }
                                                        { error && <Error error={error} /> }
                                                        const { centerByNumber } = { ...data }
                                                        centerByNumber && delete centerByNumber.__typename
                                                        console.log(centerByNumber)


                                                        return (

                                                            <Mutation mutation={createCenterExamSessionMutation}>
                                                                {(createCenterExamSession, { loading, error }) => (

                                                                    <Formik
                                                                        method="POST"
                                                                        initialValues={this.initialValues}
                                                                        validationSchema={validationSchema}
                                                                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                            const res = await createCenterExamSession({
                                                                                variables: {
                                                                                    center: centerByNumber && centerByNumber,
                                                                                    examSession: reducedES && reducedES,
                                                                                }
                                                                            });

                                                                            setTimeout(() => {
                                                                                console.log(JSON.stringify(values, null, 2));
                                                                                console.log(res);
                                                                                actions.resetForm(true);
                                                                                actions.setSubmitting(false);
                                                                            }, 400);
                                                                        }}>
                                                                        <MinimStyledPage>
                                                                            <h4> Inscrire un Centre à un Examen pour une session</h4>
                                                                            <Error error={error} />
                                                                            <StyledForm disabled={loading} aria-busy={loading}  >
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
                                                                                                label="no du centre" />

                                                                                            <SygexSelect
                                                                                                onChange={this.handleChange}
                                                                                                name="sessionID"
                                                                                            >
                                                                                                <option>La session de l'examen</option>
                                                                                                {sessionsOptions}
                                                                                            </SygexSelect>
                                                                                            <SygexSelect
                                                                                                onChange={this.handleChange}
                                                                                                name="examID"
                                                                                            >
                                                                                                <option>L'Examen </option>
                                                                                                {examsOptions}
                                                                                            </SygexSelect>
                                                                                        </InputGroup>
                                                                                        <ButtonStyled>
                                                                                            <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
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
                }</Query >

        );
    }
}
export default NewCenterExamSession
    ;