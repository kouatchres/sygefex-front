import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { createRegistrationMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject, uniqueCodeGen, candExamSessionCode } from '../queries&Mutations&Functions/Functions';
import {
    getAllRegionsQuery,
    getExamSessionQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery,
    getCentersOfATownQuery,
    getCenterExamSessionSeriesQuery,
    getTownsOfASubDivisionQuery,
    getAllExamsQuery,
    getAllSeriesOfACenterExamSessionQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery
} from '../queries&Mutations&Functions/Queries';

const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	text-align: center;
	margin: 0 auto;
	/* width: 55vw; */
    .submitButton{
paddding-top:2rem;
    }
`;

const CenterSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	/* min-width: 40rem; */
`;

const OtherSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	/* min-width: 40rem; */
`;

class Registration extends Component {
    state = {
        candCode: '',
        divisionID: '12',
        subDivisionID: '12',
        regionID: '12',
        centerID: '12',
        townID: '12',
        sessionID: '12',
        candExamSecretCode: '',
        seriesID: '12',
        examID: '12',
        educTypeID: '12'
    };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number'
            ? parseInt(value)
            : value;
        this.setState({ [name]: val });
    };

    resetForm = () => {
        this.setState({ candCode: '' });
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
            regionID,
            divisionID,
            subDivisionID,
            townID,
            centerID,
            examID,
            sessionID,
            seriesID,
            candCode
        } = this.state;
        return (
            <Query query={getAllRegionsQuery}>
                {({ data, loading, error }) => {
                    {
                        loading && <p>Loading...</p>;
                    }
                    {
                        error && <Error error={error} />;
                    }
                    const { regions } = data;
                    const refinedRegion = regions && regions.map(({
                        __typename,
                        ...others
                    }) => others);
                    //prepare data for the region select options

                    const regionsOptions = refinedRegion && refinedRegion.map((item) => (
                        <option value={item.id} key={item.id}>
                            {item.regName}
                        </option>
                    ));
                    return (
                        <Query
                            query={getDivisionsOfARegionQuery}
                            variables={refinedRegion && getSelectedObject(refinedRegion, regionID)}>
                            {({ data, loading, error }) => {
                                {
                                    loading && <p>Loading...</p>;
                                }
                                {
                                    error && <Error error={error} />;
                                }
                                console.log(data);
                                const { region } = data;
                                const allDivs = {
                                    ...region
                                };
                                const { division } = allDivs;
                                console.log(allDivs);
                                console.log(division);
                                const refinedDivision = division && division.map(({
                                    __typename,
                                    ...others
                                }) => others);

                                const divisionsOptions = refinedDivision && refinedDivision.map((item) => (
                                    <option value={item.id} key={item.id}>
                                        {item.divName}
                                    </option>
                                ));

                                return (
                                    <Query
                                        query={getSubDivisionsOfADivisionQuery}
                                        variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}>
                                        {({ data, loading, error }) => {
                                            {
                                                loading && <p>Loading...</p>;
                                            }
                                            {
                                                error && <Error error={error} />;
                                            }
                                            const { division: departement } = data;

                                            const allSubDivs = {
                                                ...departement
                                            };
                                            const { subDivision } = allSubDivs;
                                            console.log(subDivision);
                                            const refinedSubDivision = subDivision && subDivision.map(({
                                                __typename,
                                                ...others
                                            }) => others);

                                            const subDivisionsOptions = refinedSubDivision && refinedSubDivision.map((item) => (
                                                <option value={item.id} key={item.id}>
                                                    {item.subDivName}
                                                </option>
                                            ));

                                            return (
                                                <Query
                                                    query={getTownsOfASubDivisionQuery}
                                                    variables={refinedSubDivision && getSelectedObject(refinedSubDivision, subDivisionID)}>
                                                    {({ data, loading, error }) => {
                                                        {
                                                            loading && <p>Loading...</p>;
                                                        }
                                                        {
                                                            error && <Error>error={error}</Error>;
                                                        }

                                                        const village = data.subDivision;

                                                        const allTowns = {
                                                            ...village
                                                        };

                                                        const { town } = allTowns;
                                                        const refinedTown = town && town.map(({
                                                            __typename,
                                                            townName,
                                                            townCode,
                                                            ...others
                                                        }) => others);

                                                        return (
                                                            <Query
                                                                query={getCentersOfATownQuery}
                                                                variables={refinedTown && getSelectedObject(refinedTown, townID)}>
                                                                {({ data, loading, error }) => {
                                                                    {
                                                                        loading && <p>Loding...</p>;
                                                                    }
                                                                    {
                                                                        error && <Error error={error} />;
                                                                    }
                                                                    const { town: ville } = data;
                                                                    const theTowns = {
                                                                        ...ville
                                                                    };
                                                                    const { center } = theTowns;
                                                                    console.log(center);
                                                                    const refinedCenter = center && center.map(({
                                                                        __typename,
                                                                        centerName,
                                                                        ...others
                                                                    }) => others);
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
                                                                                                        console.log(data)
                                                                                                        const { examSessions } = { ...data }
                                                                                                        const refinedES = examSessions && examSessions.map(({ __typename, ...others }) => others)
                                                                                                        const reducedES = refinedES && refinedES.reduce((item) => item)
                                                                                                        console.log(reducedES)

                                                                                                        return (
                                                                                                            <Query
                                                                                                                query={getSingleCenterExamSessionQuery}
                                                                                                                variables={{
                                                                                                                    examSession: reducedES && reducedES,
                                                                                                                    center: refinedCenter && getSelectedObject(refinedCenter, centerID)
                                                                                                                }}>
                                                                                                                {({ data, error, loading }) => {
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


                                                                                                                        <Query
                                                                                                                            query={getAllSeriesOfACenterExamSessionQuery}
                                                                                                                            variables={{ id: getObj && getObj.id }}>
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

                                                                                                                                const { centerExamSession } = data;

                                                                                                                                const seriesCES = {
                                                                                                                                    ...centerExamSession
                                                                                                                                };
                                                                                                                                const { centerExamSessionSeries } = seriesCES;
                                                                                                                                console.log(centerExamSessionSeries);
                                                                                                                                // get all the series out of this object

                                                                                                                                const newSeries = centerExamSessionSeries && centerExamSessionSeries.map((item) => (item.series))
                                                                                                                                const refinedSeries = newSeries && newSeries.map(({
                                                                                                                                    __typename,
                                                                                                                                    seriesName,
                                                                                                                                    ...others
                                                                                                                                }) => others);


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
                                                                                                                                            const { centerExamSessionSerieses } = { ...data }
                                                                                                                                            const getCESS = centerExamSessionSerieses && centerExamSessionSerieses.reduce((item) => item)
                                                                                                                                            console.log(getCESS)
                                                                                                                                            console.log(refinedSeries)
                                                                                                                                            const { id: idObj } = { ...getCESS }
                                                                                                                                            const refinedCESS = idObj && this.makeCESSObject(idObj)
                                                                                                                                            console.log(refinedCESS)


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
                                                                                                                                                        candExamSession: candExamSessionCode(candCode, examID, sessionID)

                                                                                                                                                    }}>
                                                                                                                                                    {(createRegistration, { loading, error }) => (
                                                                                                                                                        <StyledPage >
                                                                                                                                                            <Form
                                                                                                                                                                method="POST"
                                                                                                                                                                onSubmit={async (e) => {
                                                                                                                                                                    e.preventDefault();
                                                                                                                                                                    const res = await createRegistration();
                                                                                                                                                                    console.log(res);
                                                                                                                                                                    this.resetForm();
                                                                                                                                                                }}>
                                                                                                                                                                <h4 >
                                                                                                                                                                    S'Inscrire à un Examen
                                                                                                                                                    </h4>
                                                                                                                                                                <Error error={error} />
                                                                                                                                                                <fieldset disabled={loading} aria-busy={loading}>
                                                                                                                                                                    <StyledDivision >
                                                                                                                                                                        <CenterSelect >
                                                                                                                                                                            <select
                                                                                                                                                                                type="select"
                                                                                                                                                                                id="regionID"
                                                                                                                                                                                name="regionID"
                                                                                                                                                                                value={regionID}
                                                                                                                                                                                onChange={this.handleChange}
                                                                                                                                                                                required>
                                                                                                                                                                                <option >
                                                                                                                                                                                    La région
                                                                                                                                                                    </option>
                                                                                                                                                                                {regionsOptions && regionsOptions}
                                                                                                                                                                            </select>

                                                                                                                                                                            <select
                                                                                                                                                                                type="select"
                                                                                                                                                                                id="divisionID"
                                                                                                                                                                                name="divisionID"
                                                                                                                                                                                value={divisionID}
                                                                                                                                                                                onChange={this.handleChange}
                                                                                                                                                                                required>
                                                                                                                                                                                <option >
                                                                                                                                                                                    Le département
                                                                                                                                                                    </option>
                                                                                                                                                                                {division && divisionsOptions}
                                                                                                                                                                            </select>
                                                                                                                                                                            <select
                                                                                                                                                                                type="select"
                                                                                                                                                                                id="subDivisionID"
                                                                                                                                                                                name="subDivisionID"
                                                                                                                                                                                value={subDivisionID}
                                                                                                                                                                                onChange={this.handleChange}
                                                                                                                                                                                required>
                                                                                                                                                                                <option >
                                                                                                                                                                                    L'Arrondissement
                                                                                                                                                                    </option>
                                                                                                                                                                                {subDivision && subDivisionsOptions}
                                                                                                                                                                            </select>
                                                                                                                                                                            <select
                                                                                                                                                                                type="select"
                                                                                                                                                                                id="townID"
                                                                                                                                                                                name="townID"
                                                                                                                                                                                value={townID}
                                                                                                                                                                                onChange={this.handleChange}
                                                                                                                                                                                required>
                                                                                                                                                                                <option >
                                                                                                                                                                                    La Ville
                                                                                                                                                                    </option>
                                                                                                                                                                                {town && town.map((item) => (
                                                                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                                                                        {item.townName}
                                                                                                                                                                                    </option>
                                                                                                                                                                                ))}
                                                                                                                                                                            </select>

                                                                                                                                                                            <select
                                                                                                                                                                                type="select"
                                                                                                                                                                                id="centerD"
                                                                                                                                                                                name="centerID"
                                                                                                                                                                                value={centerID}
                                                                                                                                                                                onChange={this.handleChange}
                                                                                                                                                                                required>
                                                                                                                                                                                <option >
                                                                                                                                                                                    Le Centre d'Examen
                                                                                                                                                                    </option>
                                                                                                                                                                                {center && center.map((item) => (
                                                                                                                                                                                    <option key={item.id} value={item.id}>
                                                                                                                                                                                        {item.centerName}
                                                                                                                                                                                    </option>
                                                                                                                                                                                ))}
                                                                                                                                                                            </select>
                                                                                                                                                                        </CenterSelect>
                                                                                                                                                                        <OtherSelect >
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
                                                                                                                                                        </StyledPage>
                                                                                                                                                    )
                                                                                                                                                    }
                                                                                                                                                </Mutation>

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
                    )
                }}
            </Query>
        );
    }
}

export default Registration;
