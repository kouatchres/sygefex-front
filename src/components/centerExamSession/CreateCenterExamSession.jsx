import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import { createCenterExamSessionMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
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

class NewCenterExamSession extends Component {
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
        this.setState({ centerNumber: '' });
    };

    makeCenterVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerNumber: `${centerCodeValue}`
        };
        return storedCenter;
    };


    makeCESSObject = (candCodeValue) => {
        const objCESS = {
            id: `${candCodeValue}`
        };
        return objCESS;
    };

    render() {
        const {
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

                    const refinedExams = exams && exams.map(({
                        __typename,
                        examName,
                        ...others
                    }) => others);

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
                                const refinedSessions = sessions && sessions.map(({
                                    __typename,
                                    sessionName,
                                    ...others
                                }) => others);

                                return (

                                    <Query query={getExamSessionQuery}
                                        variables={{

                                            exam: refinedExams && getSelectedObject(refinedExams, examID),
                                            session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                        }}  >
                                        {({ data, error, loading }) => {
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

                                            console.log(data)
                                            const { examSessions } = { ...data }
                                            const refinedES = examSessions && examSessions.map(({ __typename, ...others }) => others)
                                            const reducedES = refinedES && refinedES.reduce((item) => item)
                                            console.log(reducedES)

                                            return (
                                                <Query query={getSingleCenterQuery}
                                                    variables={{ centerNumber: centerNumber, }}  >
                                                    {({ data, error, loading }) => {
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
                                                        const { centerByNumber } = { ...data }
                                                        centerByNumber && delete centerByNumber.__typename
                                                        console.log(centerByNumber)
                                                        return (


                                                            <Mutation
                                                                mutation={createCenterExamSessionMutation}
                                                                variables={{
                                                                    ...this.state,
                                                                    center: centerByNumber && centerByNumber,
                                                                    examSession: reducedES && reducedES,
                                                                }}>
                                                                {(createCenterExamSession, { loading, error }) => (

                                                                    <MiniStyledPage>
                                                                        <Form
                                                                            method="POST"
                                                                            onSubmit={async (e) => {
                                                                                e.preventDefault();
                                                                                const res = await createCenterExamSession();
                                                                                console.log(res);
                                                                                this.resetForm();
                                                                            }}>
                                                                            <h4>
                                                                                Inscrire un Centre à un Examen pour une session
                                                                                                                </h4>
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
                                                                                            required />
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

export default NewCenterExamSession;
