import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteSeries from './DeleteSeries';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
// import { getAllEducationTypesQuery, getAllSeriesOfAnEducationTypeQuery } from '../queries&Mutations&Functions/Queries';

const DeleteBlock = styled.div`align-content: left;`;
const UpdateBlock = styled.button`
	font-weight: bold;
	border-radius: 8px;
	font-size: 1.5rem;
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

const SelectBlock = styled.div`
	/* display: block; */
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;
`;
const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 20fr auto auto;
	grid-gap: 20px;
	text-align: center;
	margin: 0 auto;
`;

const getAllEducationTypesQuery = gql`
	query getAllEducationTypesQuery {
		educationTypes(orderBy: educationTypeName_ASC) {
			id
			educationTypeName
			educationTypeCode
		}
	}
`;

const getAllSeriesOfAnEducationTypeQuery = gql`
	query getAllSeriesOfAnEducationTypeQuery($id: ID!) {
		educationType(id: $id) {
			id
			educationTypeName
			series(orderBy: seriesName_ASC) {
				id
				seriesName
				seriesCode
			}
		}
	}
`;

class SelectSeriesToModify extends Component {
	state = {
		educTypeID: '125',
		id: '122'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};
	render = () => {
		const { id, educTypeID } = this.state;
		return (
			<Query query={getAllEducationTypesQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { educationTypes } = data;
					console.log(data);
					//'getting region from the state')

					const educTypeOptions =
						educationTypes &&
						educationTypes.map((item) => (
							<option value={item.id} key={item.id}>
								{item.educationTypeName} - {item.educationTypeCode}
							</option>
						));
					return (
						<Query
							query={getAllSeriesOfAnEducationTypeQuery}
							variables={educationTypes && getSelectedObject(educationTypes, educTypeID)}
						>
							{({ data, loading, error }) => {
								{
									loading && <p>Loading...</p>;
								}
								{
									error && <Error error={error} />;
								}

								console.log('these are the series of the selected educ Type');
								const { educationType } = data;
								const getAllSeries = { ...educationType };
								const { series } = getAllSeries;
								console.log(series);

								const seriesOptions =
									series &&
									series.map((item) => (
										<option value={item.id} key={item.id}>
											{item.seriesName}
										</option>
									));

								return (
									<StyledPage>
										<Form
											onSubmit={async (e) => {
												e.preventDefault();
												const res = await updateSeries();
												console.log(res);
											}}
										>
											<h4>Modification d'une Serie</h4>
											<Error error={error} />
											<fieldset disabled={loading} aria-busy={loading}>
												<StyledDivision>
													<SelectBlock>
														<select
															type="select"
															id="educTypeID"
															name="educTypeID"
															value={educTypeID}
															onChange={this.handleChange}
															required
														>
															<option>Type D'enseignement</option>
															{educTypeOptions}
														</select>
														<select
															type="select"
															id="id"
															name="id"
															value={id}
															onChange={this.handleChange}
															required
														>
															<option>Serie a modifier</option>
															{seriesOptions}
														</select>
													</SelectBlock>

													<UpdateBlock>
														<Link
															href={{
																pathname: '../updates/updateSeries',
																query: { id }
															}}
														>
															<a>Modifier</a>
														</Link>
													</UpdateBlock>
													<DeleteBlock>
														<DeleteSeries id={this.state.id}>Delete</DeleteSeries>
													</DeleteBlock>
												</StyledDivision>
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
	};
}

export default SelectSeriesToModify;
