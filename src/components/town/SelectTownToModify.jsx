import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteDivision from './DeleteDivision';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';

import {
	getAllRegionsQuery,
	getDivisionsOfARegionQuery,
	getSubDivisionsOfADivisionQuery,
	getTownsOfASubDivisionQuery
} from '../queries&Mutations&Functions/Queries';

const ButtonBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 6fr;
	grid-gap: 2rem;
`;
const DeleteBlock = styled.div`align-content: left;`;
const UpdateBlock = styled.button`
	font-weight: bold;
	border-radius: 8px;
	font-size: 1.3rem;
	height: 30px;
	border: none;
	padding: 5px;
	align-items: center;
	background-color: white;
	color: black;
	border: 2px solid #4caf50; /* Green */
	:hover {
		cursor: pointer;
		background-color: #4c50;
		color: #4caf50;
	}
`;

const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	text-align: center;
	margin: 0 auto;
	min-width: 82rem;
`;

const CenterSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 40rem;
`;
class SelectTownToModify extends Component {
	state = {
		regionID: '125',
		divisionID: '125',
		subDivisionID: '125',
		id: '125'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		// make theses variables available in the render method
		const { id, regionID, divisionID, subDivisionID } = this.state;
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
					const refinedRegion = regions && regions.map(({ __typename, ...others }) => others);
					//prepare data for the region select options
					const regionsOptions =
						regions &&
						regions.map((item) => (
							<option value={item.id} key={item.id}>
								{item.regName}
							</option>
						));
					return (
						<Query
							query={getDivisionsOfARegionQuery}
							variables={regions && getSelectedObject(regions, this.state.regionID)}
						>
							{({ data, loading, error }) => {
								{
									loading && <p>Loading...</p>;
								}
								{
									error && <Error error={error} />;
								}
								const { region } = data;
								const allDivs = { ...region };
								const { division } = allDivs;

								const refinedDivision = division && division.map(({ __typename, ...others }) => others);

								const divisionsOptions =
									division &&
									division.map((item) => (
										<option value={item.id} key={item.id}>
											{item.divName}
										</option>
									));

								return (
									<Query
										query={getSubDivisionsOfADivisionQuery}
										variables={division && getSelectedObject(division, divisionID)}
									>
										{({ data, loading, error }) => {
											{
												loading && <p>Loading...</p>;
											}
											{
												error && <Error error={error} />;
											}
											const { division: departement } = data;

											const allSubDivs = { ...departement };
											const { subDivision } = allSubDivs;
											const refinedSubDivision =
												subDivision && subDivision.map(({ __typename, ...others }) => others);

											const subDivisionsOptions =
												subDivision &&
												subDivision.map((item) => (
													<option value={item.id} key={item.id}>
														{item.subDivName}
													</option>
												));

											return (
												<Query
													query={getTownsOfASubDivisionQuery}
													variables={
														subDivision && getSelectedObject(subDivision, subDivisionID)
													}
												>
													{({ data, loading, error }) => {
														{
															loading && <p>Loading...</p>;
														}
														{
															error && <Error>error={error}</Error>;
														}

														const village = data.subDivision;

														const allTowns = { ...village };

														const { town } = allTowns;
														const refinedTown =
															town &&
															town.map(
																({ __typename, townName, townCode, ...others }) =>
																	others
															);
														const townsOption =
															town &&
															town.map((item) => (
																<option key={item.id} value={item.id}>
																	{item.townName}
																</option>
															));
														return (
															<StyledPage>
																<Form
																	onSubmit={async (e) => {
																		e.preventDefault();
																		const res = await updateTown();
																		console.log(res);
																	}}
																>
																	<h4>Modification d'info Ville</h4>
																	<Error error={error} />
																	<fieldset disabled={loading} aria-busy={loading}>
																		<CenterSelect>
																			<select
																				type="select"
																				id="regionID"
																				name="regionID"
																				value={regionID}
																				onChange={this.handleChange}
																				required
																			>
																				<option>Choisissez une région</option>
																				{regionsOptions}
																			</select>

																			<select
																				type="select"
																				id="divisionID"
																				name="divisionID"
																				value={divisionID}
																				onChange={this.handleChange}
																				required
																			>
																				<option>
																					Choisissez un département
																				</option>
																				{divisionsOptions}
																			</select>
																			<select
																				type="select"
																				id="subDivisionID"
																				name="subDivisionID"
																				value={subDivisionID}
																				onChange={this.handleChange}
																				required
																			>
																				<option>
																					choisissez un Arrondissement
																				</option>
																				{subDivisionsOptions}
																			</select>

																			<select
																				type="select"
																				id="id"
																				name="id"
																				value={id}
																				onChange={this.handleChange}
																				required
																			>
																				<option>Choisir la Ville</option>
																				{townsOption}
																			</select>
																		</CenterSelect>

																		<ButtonBlock>
																			<UpdateBlock>
																				<Link
																					href={{
																						pathname:
																							'../updates/updateTown',
																						query: {
																							id
																						}
																					}}
																				>
																					<a>Modifier</a>
																				</Link>
																			</UpdateBlock>
																			<DeleteBlock>
																				<DeleteDivision id={id}>
																					Supprimer
																				</DeleteDivision>
																			</DeleteBlock>
																		</ButtonBlock>
																	</fieldset>
																</Form>
															</StyledPage>
														);
													}}
												</Query>
											);
										}}
									</Query>
								);
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}
export default SelectTownToModify;
