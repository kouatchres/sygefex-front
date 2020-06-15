import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import { getAllRegionsQuery } from '../queries&Mutations&Functions/Queries';
import { createDivisionMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';

class CreateDivision extends Component {
	state = {
		divName: '',
		divCode: '',
		regionID: '12',
		region: ''
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ divName: '', divCode: '' });
	}

	render() {
		const { regionID } = this.state;
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

					const getRegions =
						regions &&
						regions.map((item) => (
							<option value={item.id} key={item.id}>
								{item.regName}
							</option>
						));

					//*******important function'stripping off __typename')
					const refinedRegions = regions && regions.map(({ __typename, ...others }) => others);
					return (
						<Mutation
							mutation={createDivisionMutation}
							variables={{
								...this.state,
								region: refinedRegions && getSelectedObject(refinedRegions, regionID)
							}}
						>
							{(createDivision, { loading, error }) => (
								<StyledPage>
									<Form
										method="POST"
										onSubmit={async (e) => {
											e.preventDefault();
											const res = await createDivision();
											console.log(res);
											this.resetForm();
										}}
									>
										<h4>Nouveau Departement</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<select
												type="select"
												id="regionID"
												name="regionID"
												value={this.state.regionID}
												onChange={this.handleChange}
												required
											>
												<option>Choisissez une region</option>
												{getRegions}
											</select>

											<input
												type="text"
												id="divName"
												name="divName"
												placeholder="Nom Departement"
												value={this.state.divName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="divCode"
												name="divCode"
												placeholder="Code departement"
												value={this.state.divCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Valid{loading ? 'ation en cours' : 'er'}</button>
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
	}
}

export default CreateDivision;
