import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../../styles/Form';
import { MiniStyledPage } from '../../styles/StyledPage';
import Error from '../../ErrorMessage';
import styled from 'styled-components';
import Router from 'next/router'
import { getSelectedObject } from '../../queries&Mutations&Functions/Functions';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterByCodeQuery
} from '../../queries&Mutations&Functions/Queries';

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

class CenterCompleteResults extends Component {
    state = {
        examID: "",
        sessionID: "",
        centerSecretCode: ""
    };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: val });
    };

    resetForm = () => {
        this.setState({ centerSecretCode: '' });
    };

    makeCenterVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerSecretCode: `${centerCodeValue}`
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
            centerSecretCode
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

                    const refinedExams = exams && exams.map(({ __typename, examName, ...others }) => others);

                    return (
                        <Query query={getAllSessionsQuery}>
                            {({ data, loading, error }) => {
                                {
                                    loading && (<p >     loading... </p>);
                                }
                                {
                                    error && (<Error error={error} />);
                                }

                                const { sessions } = data;
                                console.log(sessions);
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
                                                <Query query={getSingleCenterByCodeQuery}
                                                    variables={{ centerSecretCode: centerSecretCode }}  >
                                                    {({ data, error, loading }) => {
                                                        const { getCenterByCode } = { ...data }
                                                        console.log(data)
                                                        getCenterByCode && delete getCenterByCode.__typename
                                                        console.log(getCenterByCode)
                                                        return (
                                                            <Query
                                                                query={getSingleCenterExamSessionQuery}
                                                                variables={{
                                                                    examSession: reducedES && reducedES,
                                                                    center: getCenterByCode && getCenterByCode
                                                                }}>
                                                                {({ data, error, loading }) => {
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
                                                                        query: { id: getObj.id }
                                                                    });


                                                                    return (
                                                                        <MiniStyledPage >
                                                                            <Form
                                                                                onSubmit={async (e) => {
                                                                                    e.preventDefault();
                                                                                    this.resetForm();
                                                                                }}>
                                                                                <h4>
                                                                                    Resultats Complet du Centre
                                                                    </h4>
                                                                                <Error error={error} />
                                                                                <fieldset disabled={loading} aria-busy={loading}>
                                                                                    <StyledDivision >

                                                                                        <OtherSelect>
                                                                                            <input
                                                                                                type="textarea"
                                                                                                id="centerName"
                                                                                                name="centerName"
                                                                                                placeholder="Nom du centre"
                                                                                                value={getCenterByCode && getCenterByCode.centerCode}
                                                                                                rows="2"
                                                                                                wrap="soft"
                                                                                                readonly
                                                                                            />
                                                                                            <input
                                                                                                type="text"
                                                                                                id="centerSecretCode"
                                                                                                name="centerSecretCode"
                                                                                                placeholder="Code Secret du centre"
                                                                                                value={centerSecretCode}
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
                                                                                                    Valid{loading ? 'ation en cours' : 'er'}
                                                                                                </button>
                                                                                            </div>
                                                                                        </OtherSelect>
                                                                                    </StyledDivision>
                                                                                </fieldset>
                                                                            </Form>
                                                                        </MiniStyledPage>
                                                                    )
                                                                }}
                                                            </Query>
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

export default CenterCompleteResults;
