import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
	getAllRegionsQuery,
	getDivisionsOfARegionQuery,
	getSubDivisionsOfADivisionQuery,
	getCentersOfATownQuery,
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

class SelectCenterToModify extends Component {
	state = {
		regionID: '125',
		divisionID: '125',
		subDivisionID: '125',
		townID: '125',
		centerID: '125',
		id: '125'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		// make theses variables available in the render method
		const { id, regionID, divisionID, subDivisionID, townID, cen } = this.state;
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
						refinedRegion &&
						refinedRegion.map((item) => (
							<option value={item.id} key={item.id}>
								{item.regName}
							</option>
						));
					return (
						<Query
							query={getDivisionsOfARegionQuery}
							variables={refinedRegion && getSelectedObject(refinedRegion, regionID)}
						>
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
								const refinedDivision = division && division.map(({ __typename, ...others }) => others);

								const divisionsOptions =
									refinedDivision &&
									refinedDivision.map((item) => (
										<option value={item.id} key={item.id}>
											{item.divName}
										</option>
									));

								return (
									<Query
										query={getSubDivisionsOfADivisionQuery}
										variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}
									>
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
											const refinedSubDivision =
												subDivision && subDivision.map(({ __typename, ...others }) => others);

											const subDivisionsOptions =
												refinedSubDivision &&
												refinedSubDivision.map((item) => (
													<option value={item.id} key={item.id}>
														{item.subDivName}
													</option>
												));

											return (
												<Query
													query={getTownsOfASubDivisionQuery}
													variables={
														refinedSubDivision &&
														getSelectedObject(refinedSubDivision, subDivisionID)
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

														const allTowns = {
															...village
														};

														const { town } = allTowns;
														const refinedTown =
															town &&
															town.map(
																({ __typename, townName, townCode, ...others }) =>
																	others
															);

														return (
															<Query
																query={getCentersOfATownQuery}
																variables={
																	refinedTown &&
																	getSelectedObject(refinedTown, townID)
																}
															>
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
																	const refinedCenter =
																		center &&
																		center.map(
																			({ __typename, centerName, ...others }) =>
																				others
																		);

																	console.log(center);
																	return (
																		<StyledPage>
																			<Form
																				onSubmit={async (e) => {
																					e.preventDefault();
																					const res = await updateCenter();
																					console.log(res);
																				}}
																			>
																				<h4>
																					Modification d'un Centre D'Examen in
																					Division
																				</h4>
																				<Error error={error} />
																				<fieldset
																					disabled={loading}
																					aria-busy={loading}
																				>
																					<CenterSelect>
																						<select
																							type="select"
																							id="regionID"
																							name="regionID"
																							placeholder="select a region"
																							value={regionID}
																							onChange={this.handleChange}
																							required
																						>
																							<option>
																								Choisissez une region
																							</option>
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
																								Choisissez un
																								departement
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
																								choisissez un
																								Arrondissement
																							</option>
																							{subDivisionsOptions}
																						</select>
																						<select
																							type="select"
																							id="townID"
																							name="townID"
																							value={townID}
																							onChange={this.handleChange}
																							required
																						>
																							<option>
																								choisissez une Ville
																							</option>
																							{town &&
																								town.map((item) => (
																									<option
																										value={item.id}
																										key={item.id}
																									>
																										{item.townName}
																									</option>
																								))}
																						</select>

																						<select
																							type="select"
																							id="id"
																							name="id"
																							value={id}
																							onChange={this.handleChange}
																							required
																						>
																							<option>
																								Choisissez un Centre
																								d'Examen
																							</option>
																							{center &&
																								center.map((item) => (
																									<option
																										key={item.id}
																										value={item.id}
																									>
																										{
																											item.centerName
																										}
																									</option>
																								))}
																						</select>
																					</CenterSelect>

																					<ButtonBlock>
																						<UpdateBlock>
																							<Link
																								href={{
																									pathname:
																										'../updates/updateCenter',
																									query: {
																										id
																									}
																								}}
																							>
																								<a>Valider</a>
																							</Link>
																						</UpdateBlock>
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
				}}
			</Query>
		);
	}
}
export default SelectCenterToModify;
