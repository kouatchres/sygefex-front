import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { singleTownQuery } from '../queries&Mutations&Functions/Queries';
import { updateTownMutation } from '../queries&Mutations&Functions/Mutations';

class UpdateTown extends Component {
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
			<Query query={singleTownQuery} variables={{ id: this.props.id }}>
				{({ data, loading, error }) => {
					console.log(data);
					const { town } = data;
					const { townName, townCode } = town;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.town && <p>No Town of ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateTownMutation} variables={{ id: this.props.id }}>
							{(updateTown, { loading, error }) => (
								<StyledPage>
									<Form onSubmit={(e) => this.updateItemMutation(e, updateTown)}>
										<h4>Modification Info d'une Ville</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="townName"
												name="townName"
												placeholder="Nom Ville"
												defaultValue={townName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="townCode"
												name="townCode"
												placeholder="Code Ville"
												defaultValue={townCode}
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

export default UpdateTown;
