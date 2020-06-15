import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Error from '../ErrorMessage.js';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import { singleSubDivisionQuery } from '../queries&Mutations&Functions/Queries';
import { updateSubDivisionMutation } from '../queries&Mutations&Functions/Mutations';

class UpdateSubDivision extends Component {
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

	render() {
		return (
			<Query
				query={singleSubDivisionQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { subDivision } = data;
					const { subDivName, subDivCode } = subDivision;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.subDivision && <p>No Sub division Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateSubDivisionMutation} variables={{ id: this.props.id }}>
							{(updateSubDivision, { loading, error }) => (
								<StyledPage>
									<Form onSubmit={(e) => this.updateItemMutation(e, updateSubDivision)}>
										<h4>Modification d'un Arrondissement</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="subDivName"
												name="subDivName"
												placeholder="Nom Arrondissement"
												defaultValue={subDivName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="subDivCode"
												name="subDivCode"
												placeholder="Code Arrondissement"
												defaultValue={subDivCode}
												onChange={this.handleChange}
												required
											/>
											<div className="submitButton">
												<button type="submit">
													Modifi{loading ? 'cation en cours' : 'er'}
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
	}
}

export default UpdateSubDivision;
