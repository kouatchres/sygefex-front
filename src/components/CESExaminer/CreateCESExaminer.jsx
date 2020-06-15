import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import { createCenterExamSessionExaminerMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterQuery,
    getAllRanksQuery,
    getAllPhasesQuery,
    getASinglePhaseRankQuery
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

class CreateCESAuthority extends Component {
    state = {
        examID: "",
        sessionID: "",
        phaseID: "",
        rankID: "",
        centerNumber: "",
        centerExamSession: "",
        examinerCode: ""
    };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number'
            ? parseInt(value)
            : value;
        this.setState({ [name]: val });
    };

    resetForm = () => {
        this.setState({ centerNumber: '' });
    };


    makeExaminerObject = (profCodeValue) => {
        const storedProf = {
            examinerCode: `${profCodeValue}`
        };
        return storedProf;
    };

    render() {
        const {

            examID,
            sessionID,
            centerNumber,
            phaseID,
            rankID,
            examinerCode
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

                                    <Query
                                        query={getExamSessionQuery}
                                        variables={{
                                            exam: refinedExams && getSelectedObject(refinedExams, examID),
                                            session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                                        }}>
                                        {({ data, error, loading }) => {
                                            {
                                                loading && <p>...Loading</p>
                                            }
                                            {
                                                error && <Error error={error} />
                                            }
                                            console.log(data)
                                            const { examSessions } = {
                                                ...data
                                            }
                                            const refinedES = examSessions && examSessions.map(({
                                                __typename,
                                                ...others
                                            }) => others)
                                            const reducedES = refinedES && refinedES.reduce((item) => item)
                                            console.log(reducedES)

                                            return (
                                                <Query
                                                    query={getSingleCenterQuery}
                                                    variables={{
                                                        centerNumber: centerNumber
                                                    }}>
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
                                                                    {
                                                                        loading && <p>...Loading</p>
                                                                    }
                                                                    {
                                                                        error && <Error error={error} />
                                                                    }
                                                                    console.log(data);
                                                                    const { centerExamSessions } = {
                                                                        ...data
                                                                    };
                                                                    console.log(centerExamSessions);
                                                                    // remove typename from the object
                                                                    const refinedCenterExamSessions = centerExamSessions && centerExamSessions.map(({
                                                                        __typename,
                                                                        ...others
                                                                    }) => others);
                                                                    // transform the array into a single object
                                                                    const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
                                                                    console.log(getObj);

                                                                    return (
                                                                        <Query query={getAllPhasesQuery}>
                                                                            {({ data, loading, error }) => {
                                                                                {
                                                                                    loading && <p>loading...</p>;
                                                                                }
                                                                                {
                                                                                    error && <Error error={error} />;
                                                                                }
                                                                                console.log(data);

                                                                                const { phases } = data;
                                                                                console.log(phases);
                                                                                const refinedPhase = phases && phases.map(({
                                                                                    __typename,
                                                                                    phaseName,
                                                                                    phaseCode,
                                                                                    ...others
                                                                                }) => others);

                                                                                const phasesOptions = phases && phases.map(item => (
                                                                                    <option key={item.id} value={item.id}>
                                                                                        {item.phaseName}
                                                                                    </option>
                                                                                ));

                                                                                return (
                                                                                    <Query query={getAllRanksQuery}>
                                                                                        {({ data, loading, error }) => {
                                                                                            {
                                                                                                loading && <p>loading...</p>;
                                                                                            }
                                                                                            {
                                                                                                error && <Error error={error} />;
                                                                                            }
                                                                                            console.log(data);

                                                                                            const { ranks } = data;

                                                                                            const refinedRank = ranks && ranks.map(({
                                                                                                __typename,
                                                                                                rankName,
                                                                                                rankCode,
                                                                                                ...others
                                                                                            }) => others);
                                                                                            const rankOptions = ranks && ranks.map(item => (
                                                                                                <option key={item.id} value={item.id}>
                                                                                                    {item.rankName}
                                                                                                </option>
                                                                                            ));
                                                                                            return (
                                                                                                <Query
                                                                                                    query={getASinglePhaseRankQuery}
                                                                                                    variables={{
                                                                                                        phase: refinedPhase && getSelectedObject(refinedPhase, phaseID),
                                                                                                        rank: refinedRank && getSelectedObject(refinedRank, rankID)
                                                                                                    }}>
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

                                                                                                        const { phaseRank } = data;
                                                                                                        const refinedPhaseRank = phaseRank && phaseRank.map(({
                                                                                                            __typename,
                                                                                                            ...others
                                                                                                        }) => others);
                                                                                                        // transform the array into a single object
                                                                                                        const getPhaseRank = refinedPhaseRank && refinedPhaseRank.reduce((item) => item);
                                                                                                        console.log(getPhaseRank);

                                                                                                        return (
                                                                                                            <Mutation
                                                                                                                mutation={createCenterExamSessionExaminerMutation}
                                                                                                                variables={{
                                                                                                                    ...this.state,
                                                                                                                    examiner: this.makeExaminerObject(examinerCode),
                                                                                                                    centerExamSession: getObj && getObj,
                                                                                                                    phaseRank: getPhaseRank && getPhaseRank
                                                                                                                }}>
                                                                                                                {(createCenterExamSessionExaminer, { loading, error }) => (
                                                                                                                    <MiniStyledPage >
                                                                                                                        <Form
                                                                                                                            method="POST"
                                                                                                                            onSubmit={async (e) => {
                                                                                                                                e.preventDefault();
                                                                                                                                const res = await createCenterExamSessionExaminer();
                                                                                                                                console.log(res);
                                                                                                                                this.resetForm();
                                                                                                                            }}>
                                                                                                                            <h4 >
                                                                                                                                Inscription d'examinateur au centre d'Examen
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
                                                                                                                                            readOnly />
                                                                                                                                        <input
                                                                                                                                            type="number"
                                                                                                                                            id="centerNumber"
                                                                                                                                            name="centerNumber"
                                                                                                                                            placeholder="Numéro du centre"
                                                                                                                                            value={centerNumber}
                                                                                                                                            onChange={this.handleChange}
                                                                                                                                            required />
                                                                                                                                        <input
                                                                                                                                            type="text"
                                                                                                                                            id="examinerCode"
                                                                                                                                            name="examinerCode"
                                                                                                                                            value={examinerCode}
                                                                                                                                            placeholder="Code Secret De l'examinateur"
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
                                                                                                                                            <option > L'Examen</option>
                                                                                                                                            {exams && exams.map((item) => (
                                                                                                                                                <option key={item.id} value={item.id}>
                                                                                                                                                    {item.examName}
                                                                                                                                                </option>
                                                                                                                                            ))}
                                                                                                                                        </select>
                                                                                                                                        <select
                                                                                                                                            type="select"
                                                                                                                                            id="phaseID"
                                                                                                                                            name="phaseID"
                                                                                                                                            value={phaseID}
                                                                                                                                            onChange={this.handleChange}
                                                                                                                                            required>
                                                                                                                                            <option >
                                                                                                                                                La Phase de l'Exxamen
                                                                                                                                                        </option>
                                                                                                                                            {phasesOptions && phasesOptions}
                                                                                                                                        </select>

                                                                                                                                        <select
                                                                                                                                            type="select"
                                                                                                                                            id="rankID"
                                                                                                                                            name="rankID"
                                                                                                                                            value={rankID}
                                                                                                                                            onChange={this.handleChange}
                                                                                                                                            required>
                                                                                                                                            <option >
                                                                                                                                                Le Poste
                                                                                                                                                        </option>
                                                                                                                                            {rankOptions && rankOptions}
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
                                                                                                                )}</Mutation>

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

export default CreateCESAuthority;
