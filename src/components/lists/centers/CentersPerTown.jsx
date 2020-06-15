import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../../styles/Form';
import { MinimStyledPage } from '../../styles/StyledPage';
import Error from '../../ErrorMessage';
import styled from 'styled-components';
import Router from 'next/router'
import { getSelectedObject } from '../../queries&Mutations&Functions/Functions';
import {
    getAllRegionsQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery,
    getTownsOfASubDivisionQuery,
} from '../../queries&Mutations&Functions/Queries';

const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	text-align: center;
	margin: 0 auto;
`;

const CenterSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
`;

class CentersPerTown extends Component {
    state = {
        divisionID: '12',
        subDivisionID: '12',
        regionID: '12',
        townID: '12',

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


    render() {
        const {
            regionID,
            divisionID,
            subDivisionID,
            townID,

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
                                                        const reducedTown = town && town.reduce((item) => item)
                                                        console.log(reducedTown)
                                                        town && Router.push({
                                                            pathname: '/show/lists/allCentersPerTown',
                                                            query: { id: reducedTown.id }
                                                        });

                                                        return (
                                                            <MinimStyledPage >
                                                                <Form
                                                                    onSubmit={async (e) => {
                                                                        e.preventDefault();
                                                                        this.resetForm();
                                                                    }}>
                                                                    <h4 >
                                                                        Les Centres d'une VIlle
                                                                                      </h4>
                                                                    <Error error={error} />
                                                                    <fieldset disabled={loading} aria-busy={loading}>
                                                                        <StyledDivision >
                                                                            <CenterSelect >
                                                                                <select
                                                                                    type="select"
                                                                                    id="regionID"
                                                                                    name="regionID"
                                                                                    value={this.state.regionID}
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
                                                                                    value={this.state.divisionID}
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
                                                                                    value={this.state.subDivisionID}
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
                                                                                    value={this.state.townID}
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

                                                                            </CenterSelect>

                                                                        </StyledDivision>
                                                                    </fieldset>
                                                                </Form>
                                                            </MinimStyledPage>

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

export default CentersPerTown;
