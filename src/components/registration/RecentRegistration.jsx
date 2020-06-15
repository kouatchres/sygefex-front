import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import Router from 'next/router'
import { getSelectedObject, uniqueCodeGen, candExamSessionCode } from '../queries&Mutations&Functions/Functions';
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

const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	text-align: center;
	margin: 0 auto;
    .submitButton{
paddding-top:2rem;
    }
`;


const OtherSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
`;

class RecentRegistration extends Component {
    state = {
        examID: "",
        sessionID: "",
        centerNumber: "",
        candCode: "",
        seriesID: "",
    };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: val });
    };

    resetForm = () => {
        this.setState({ candCode: '' });
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
        const {
            candCode,
            seriesID,
            examID,
            sessionID,
            centerNumber
        } = this.state;
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

                    return (
                        <Query query={getAllSessionsQuery}>
                            {({ data, loading, error }) => {
                                {
                                    loading && (
                                        <p >
                                            loading...
                                        </p>
                                    );
                                }
                                {
                                    error && (<Error error={error} />);
                                }

                                const { sessions } = data;
                                console.log(sessions);
                                const getSessionName = sessions && { ...getSelectedObject(sessions, sessionID) }
                                const refinedSessions = sessions && sessions.map(({ __typename, sessionName, ...others }) => others);

                                return (

                                    <Query query={getExamSessionQuery}
                                        variables={{

                                            exam: refinedExams && getSelectedObject(refinedExams, examID),
                                            session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                        }}  >
                                        {({ data, error, loading }) => {
                                            console.log(data)
                                            const { examSessions } = { ...data }
                                            const refinedES = examSessions && examSessions.map(({ __typename, ...others }) => others)
                                            const reducedES = refinedES && refinedES.reduce((item) => item)
                                            console.log(reducedES)

                                            return (
                                                <Query query={getSingleCenterQuery}
                                                    variables={{ this.makeCenterVariableObject(centerNumber) }}  >
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
                                                                }}>
                                                                {({ data, error, loading }) => {
                                                                    { loading && <p>...Loading</p> }
                                                                    { error && <Error error={error} /> }
                                                                    console.log(data);
                                                                    const { centerExamSessions } = {
                                                                        ...data
                                                                    };
                                                                    console.log(centerExamSessions);
                                                                    // remove typename from the object
                                                                    const refinedCenterExamSessions =
                                                                        centerExamSessions && centerExamSessions.map(({ __typename, ...others }) => others);
                                                                    // transform the array into a single object
                                                                    const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
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

                                                                                const seriesCES = {
                                                                                    ...centerExamSession
                                                                                };
                                                                                const { centerExamSessionSeries } = seriesCES;
                                                                                console.log(centerExamSessionSeries);
                                                                                // get all the series out of this object

                                                                                const newSeries = centerExamSessionSeries && centerExamSessionSeries.map((item) => (item.series))
                                                                                const refinedSeries =
                                                                                    newSeries && newSeries.map(({ __typename, seriesName, ...others }) => others);


                                                                                const seriesOptions = newSeries && newSeries.map((item) => (
                                                                                    <option key={item.id} value={item.id}>
                                                                                        {item.seriesName}
                                                                                    </option>
                                                                                ));

                                                                                return (

                                                                                    <Query query={getCenterExamSessionSeriesQuery} variables={{
                                                                                        centerExamSession: getObj && getObj,
                                                                                        series: refinedSeries && getSelectedObject(refinedSeries, seriesID)
                                                                                    }}   >
                                                                                        {({ data, error, loading }) => {
                                                                                            { loading && <p>...Loading</p> }
                                                                                            { error && <Error error={error} /> }
                                                                                            const { centerExamSessionSerieses } = { ...data }
                                                                                            const getCESS = centerExamSessionSerieses && centerExamSessionSerieses.reduce((item) => item)
                                                                                            console.log(getCESS)
                                                                                            console.log(refinedSeries)
                                                                                            const { id: idObj } = { ...getCESS }
                                                                                            const refinedCESS = idObj && this.makeCESSObject(idObj)
                                                                                            console.log(refinedCESS)
                                                                                            console.log(this.candRegistrationNumber(centerNumber, getExamName.examCode, getSessionName.sessionName, (99).pad(5))
                                                                                            )

                                                                                            return (
                                                                                                <Mutation
                                                                                                    mutation={createRegistrationMutation}
                                                                                                    variables={{
                                                                                                        ...this.state,
                                                                                                        candExamSecretCode: uniqueCodeGen(8),
                                                                                                        candidate: this.makeCandVariableObject(candCode),
                                                                                                        centerExamSession: getObj && getObj,
                                                                                                        series: refinedSeries && getSelectedObject(refinedSeries, seriesID),
                                                                                                        centerExamSessionSeries: refinedCESS && refinedCESS,
                                                                                                        candExamSession: candExamSessionCode(candCode, examID, sessionID),
                                                                                                        candRegistrationNumber: exams && sessions && this.candRegistrationNumber(centerNumber, getExamName.examCode, getSessionName.sessionName)

                                                                                                    }}>
                                                                                                    {(createRegistration, { loading, error }) => (
                                                                                                        <MiniStyledPage >
                                                                                                            <Form
                                                                                                                method="POST"
                                                                                                                onSubmit={async (e) => {
                                                                                                                    e.preventDefault();
                                                                                                                    const res = await createRegistration();
                                                                                                                    console.log(res);
                                                                                                                    this.resetForm();
                                                                                                                    res && Router.push({
                                                                                                                        pathname: '/show/results/registrationReceipt',
                                                                                                                        query: { id: res.data.createRegistration.id },
                                                                                                                    });
                                                                                                                }}>
                                                                                                                <h4>
                                                                                                                    S'Inscrire à un Examen
                                                                                                                                                    </h4>
                                                                                                                <Error error={error} />
                                                                                                                <fieldset disabled={loading} aria-busy={loading}>
                                                                                                                    <StyledDivision >

                                                                                                                        <OtherSelect >
                                                                                                                            <input
                                                                                                                                type="textarea"
                                                                                                                                id="centerName"
                                                                                                                                name="centerName"
                                                                                                                                placeholder="Nom du centre"
                                                                                                                                value={centerByNumber && centerByNumber.centerCode}
                                                                                                                                rows="2"
                                                                                                                                wrap="soft"
                                                                                                                                readOnly
                                                                                                                            />
                                                                                                                            <input
                                                                                                                                type="number"
                                                                                                                                id="centerNumber"
                                                                                                                                name="centerNumber"
                                                                                                                                placeholder="Numéro du centre"
                                                                                                                                value={centerNumber}
                                                                                                                                onChange={this.handleChange}
                                                                                                                            />

                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="sessionID"
                                                                                                                                name="sessionID"
                                                                                                                                value={sessionID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    La Session
                                                                                                                                                                    </option>
                                                                                                                                {sessions && sessions.map((item) => (
                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                        {item.sessionName}
                                                                                                                                    </option>
                                                                                                                                ))}
                                                                                                                            </select>

                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="examID"
                                                                                                                                name="examID"
                                                                                                                                value={examID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    L'Examen
                                                                                                                                                                    </option>
                                                                                                                                {exams && exams.map((item) => (
                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                        {item.examName}
                                                                                                                                    </option>
                                                                                                                                ))}
                                                                                                                            </select>
                                                                                                                            <select
                                                                                                                                type="select"
                                                                                                                                id="seriesID"
                                                                                                                                name="seriesID"
                                                                                                                                value={seriesID}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required>
                                                                                                                                <option >
                                                                                                                                    La Série
                                                                                                                                                                    </option>
                                                                                                                                {seriesOptions && seriesOptions}
                                                                                                                            </select>
                                                                                                                            <input
                                                                                                                                type="text"
                                                                                                                                id="candCode"
                                                                                                                                name="candCode"
                                                                                                                                placeholder="Code Candidat"
                                                                                                                                value={candCode}
                                                                                                                                onChange={this.handleChange}
                                                                                                                                required />

                                                                                                                            <div className="submitButton">
                                                                                                                                <button type="submit">
                                                                                                                                    Valid{loading
                                                                                                                                        ? 'ation en cours'
                                                                                                                                        : 'er'}
                                                                                                                                </button>
                                                                                                                            </div>
                                                                                                                        </OtherSelect>
                                                                                                                    </StyledDivision>
                                                                                                                </fieldset>
                                                                                                            </Form>
                                                                                                        </MiniStyledPage>
                                                                                                    )
                                                                                                    }
                                                                                                </Mutation>

                                                                                            )
                                                                                        }}
                                                                                    </Query>
                                                                                )
                                                                            }}
                                                                        </Query>
                                                                    );
                                                                }
                                                                }
                                                            </Query>
                                                        );
                                                    }
                                                    }
                                                </Query>
                                            );
                                        }
                                        }
                                    </Query>
                                );
                            }
                            }
                        </Query>
                    );
                }
                }
            </Query>

        );
    }
}

export default RecentRegistration;
