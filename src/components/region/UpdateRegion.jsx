import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { updateRegionMutation, updateItemMutation } from '../queries&Mutations&Functions/Mutations';
import { getSingleRegionQuery } from '../queries&Mutations&Functions/Queries';

class UpdateRegion extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateItemMutation = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Region!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('Region Updated!!');
	};

	resetForm() {
		this.setState({ regName: '', regCode: '' });
	}

	render() {
		return (
			<Query
				query={getSingleRegionQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { regName, regCode } = data.region;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.region && <p>Pas de Région avec ID: {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateRegionMutation} variables={{ id: this.props.id }}>
							{(updateRegion, { loading, error }) => (
								<MiniStyledPage>
									<Form
										onSubmit={async (e) => {
											e.preventDefault();
											await this.updateItemMutation(e, updateRegion);
											this.resetForm();
										}}
									>
										<h4>Modification de Région</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="regName"
												name="regName"
												placeholder="Nom Région"
												defaultValue={regName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="regCode"
												name="regCode"
												placeholder="Code Région"
												defaultValue={regCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">Modifi{loading ? 'cation' : 'er'}</button>
											</div>
										</fieldset>
									</Form>
								</MiniStyledPage>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default UpdateRegion;
export { UPDATE_REGION_MUTATION };
