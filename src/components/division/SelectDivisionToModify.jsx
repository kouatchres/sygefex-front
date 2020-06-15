import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Form from '../styles/Form';
import { ApolloComsumer } from 'react-apollo'
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteDivision from './DeleteDivision';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';

import { getAllRegionsQuery, getDivisionsOfARegionQuery } from '../queries&Mutations&Functions/Queries';

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
		/* background-color: #4c50;
		color: #4caf50; */
	}
	a {
		color: white;
	}
`;

const CenterSelect = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
`;
class SelectDivisionToModify extends Component {
	state = {
		regionID: '',
		id: 'ck3ali11ptc9o0922st7vpk6e'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		// make theses variables available in the render method
		const { id, regionID } = this.state;
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

								const refinedDivision = division && division.map(({ __typename, ...others }) => others);

								const divisionsOptions =
									division &&
									division.map((item) => (
										<option value={item.id} key={item.id}>
											{item.divName}
										</option>
									));

								return (
									<StyledPage>
										<Form
											onSubmit={async (e) => {
												e.preventDefault();

											}}
										>
											<h4>Modification d'info de Département </h4>
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
														id="id"
														name="id"
														value={id}
														onChange={this.handleChange}
														required
													>
														<option>Choisissez un département</option>
														{divisionsOptions}
													</select>
												</CenterSelect>

												<ButtonBlock>
													<UpdateBlock>
														<Link
															href={{
																pathname: '../updates/updateDivision',
																query: {
																	id
																}
															}}
														>
															<a>Modifier</a>
														</Link>
													</UpdateBlock>
													<DeleteBlock>
														<DeleteDivision id={id}>Supprimer</DeleteDivision>
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
	}
}
export default SelectDivisionToModify;
