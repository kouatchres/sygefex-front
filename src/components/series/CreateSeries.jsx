import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { createSeriesMutation } from '../queries&Mutations&Functions/Mutations';
import { getAllEducationTypesQuery, getAllSeriesQuery } from '../queries&Mutations&Functions/Queries';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';

const StyledDivision = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
`;

class CreateSeries extends Component {
	state = {
		seriesName: '',
		examID: '',
		seriesCode: '',
		educationTypeID: '',
		educationType: ''
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ seriesName: '', seriesCode: '' });
	}
	render() {
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

					const educTypeOptions =
						educationTypes &&
						educationTypes.map((item) => (
							<option value={item.id} key={item.id}>
								{item.educationTypeName}
							</option>
						));

					//*******important function'stripping off __typename')
					const refinedEducTypes =
						educationTypes && educationTypes.map(({ __typename, educationTypeName, ...others }) => others);

					return (
						<Mutation
							mutation={createSeriesMutation}
							variables={{
								...this.state,
								educationType:
									refinedEducTypes && getSelectedObject(refinedEducTypes, this.state.educationTypeID)
							}}
						>
							{(createSeries, { loading, error }) => (
								<StyledDivision>
									<Form
										method="POST"
										onSubmit={async (e) => {
											e.preventDefault();
											const res = await createSeries();
											console.log(res);
											this.resetForm();
										}}
									>
										<h4>Nouvelle Séries</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<select
												type="select"
												id="educationTypeID"
												name="educationTypeID"
												value={this.state.educationTypeID}
												onChange={this.handleChange}
												required
											>
												<option>Choisir un type D'enseignement</option>
												{educTypeOptions}
											</select>

											<input
												type="text"
												id="seriesName"
												name="seriesName"
												placeholder="Nom Séries"
												value={this.state.seriesName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="seriesCode"
												name="seriesCode"
												placeholder="Code Séries"
												value={this.state.seriesCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Valid{loading ? 'ation en cours' : 'er'} </button>
											</div>
										</fieldset>
									</Form>
								</StyledDivision>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default CreateSeries;
