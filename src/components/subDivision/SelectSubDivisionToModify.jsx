import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteSubDivision from './DeleteSubDivision';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
	getAllRegionsQuery,
	getDivisionsOfARegionQuery,
	getSubDivisionsOfADivisionQuery
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
class SelectSubDivisionToModify extends Component {
	state = {
		regionID: '125',
		divisionID: '125',
		id: '125'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		// make theses variables available in the render method
		const { id, regionID, divisionID } = this.state;
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

								const { region } = data;
								const allDivs = { ...region };
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

											const allSubDivs = { ...departement };
											const { subDivision } = allSubDivs;
											console.log(subDivision);
											const refinedSubDiv =
												subDivision && subDivision.map(({ __typename, ...others }) => others);

											const subDivisionsOptions =
												refinedSubDiv &&
												refinedSubDiv.map((item) => (
													<option value={item.id} key={item.id}>
														{item.subDivName}
													</option>
												));

											return (
												<StyledPage>
													<Form
														onSubmit={async (e) => {
															e.preventDefault();
															const res = await updateSubDivision();
															console.log(res);
														}}
													>
														<h4>Modification d'un Arrondissement</h4>
														<Error error={error} />
														<fieldset disabled={loading} aria-busy={loading}>
															<CenterSelect>
																<select
																	type="select"
																	id="regionID"
																	name="regionID"
																	placeholder="select a region"
																	value={this.state.regionID}
																	onChange={this.handleChange}
																	required
																>
																	<option>Choisissez une region</option>
																	{regionsOptions}
																</select>

																<select
																	type="select"
																	id="divisionID"
																	name="divisionID"
																	value={this.state.divisionID}
																	onChange={this.handleChange}
																	required
																>
																	<option>Choisissez un département</option>
																	{divisionsOptions}
																</select>
																<select
																	type="select"
																	id="id"
																	name="id"
																	value={this.state.id}
																	onChange={this.handleChange}
																	required
																>
																	<option>choisissez un Arrondissement</option>
																	{subDivisionsOptions}
																</select>
															</CenterSelect>

															<ButtonBlock>
																<UpdateBlock>
																	<Link
																		href={{
																			pathname: '../updates/updateSubDivision',
																			query: { id }
																		}}
																	>
																		<a>Valider</a>
																	</Link>
																</UpdateBlock>
																<DeleteBlock>
																	<DeleteSubDivision id={this.state.id}>
																		Delete
																	</DeleteSubDivision>
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
	}
}
export default SelectSubDivisionToModify;
