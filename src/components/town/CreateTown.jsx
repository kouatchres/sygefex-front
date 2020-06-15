import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import { createTownMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
	getAllRegionsQuery,
	getDivisionsOfARegionQuery,
	getSubDivisionsOfADivisionQuery
} from '../queries&Mutations&Functions/Queries';

class CreateTown extends Component {
	state = {
		townName: '',
		townCode: '',
		divisionID: '12',
		subDivisionID: '12',
		regionID: '12'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const setValue = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: setValue });
	};
	resetForm() {
		this.setState({ townName: '', townCode: '' });
	}

	render() {
		const { regionID, divisionID, subDivisionID, townCode, townName } = this.state;
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
												subDivision &&
												subDivision.map(({ __typename, subDivName, ...others }) => others);
											console.log(refinedSubDiv)

											const subDivisionsOptions =
												subDivision &&
												subDivision.map((item) => (
													<option value={item.id} key={item.id}>{item.subDivName}
													</option>
												));

											return (
												<Mutation
													mutation={createTownMutation}
													variables={{
														...this.state,
														subDiv: refinedSubDiv && getSelectedObject(refinedSubDiv, subDivisionID)
													}}
												>
													{(createTown, { loading, error }) => (
														<StyledPage>
															<Form
																method="POST"
																onSubmit={async (e) => {
																	e.preventDefault();
																	const res = await createTown();
																	console.log(res);
																	this.resetForm();
																}}
															>
																<h4>Créer Nouvelle Ville</h4>
																<Error error={error} />
																<fieldset disabled={loading} aria-busy={loading}>
																	<select
																		type="select"
																		id="regionID"
																		name="regionID"
																		value={regionID}
																		onChange={this.handleChange}
																		required
																	>
																		<option>choisssez une région</option>
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
																		<option> choisissez un département</option>
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
																		<option> choisissez un arrondissement</option>
																		{subDivisionsOptions}
																	</select>
																	<input
																		type="text"
																		id="townName"
																		name="townName"
																		placeholder="Nom de la ville"
																		value={townName}
																		onChange={this.handleChange}
																		required
																	/>
																	<input
																		type="text"
																		id="townCode"
																		name="townCode"
																		placeholder="Code de la ville"
																		value={townCode}
																		onChange={this.handleChange}
																		required
																	/>
																	<div className="submitButton">
																		<button type="submit">
																			Valid{loading ? 'ation en cours' : 'er'}
																		</button>
																	</div>
																</fieldset>
															</Form>
														</StyledPage>
													)}
												</Mutation>
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

export default CreateTown;
