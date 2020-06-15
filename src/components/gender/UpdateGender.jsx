import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { updateGenderMutation } from '../queries&Mutations&Functions/Mutations';
import { singleGenderQuery } from '../queries&Mutations&Functions/Queries';

class UpdateGender extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};
	resetForm = () => {
		this.setState({ genderName: '', genderCode: '' });
	};

	updateItemMutation = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating gender!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('gender Updated!!');
	};

	render() {
		return (
			<Query
				query={singleGenderQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { gender } = data;
					const { genderName, genderCode } = gender;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						gender && <p>The gender for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateGenderMutation} variables={{ id: this.props.id }}>
							{(updateGender, { loading, error }) => (
								<StyledPage>
									<Form
										onSubmit={(e) => {
											e.preventDefault();
											const res = this.updateItemMutation(e, updateGender);
											console.log(res);
											this.resetForm();
										}}
									>
										<h4>Modification de Sexe</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="genderName"
												name="genderName"
												placeholder="Nom Sexe"
												defaultValue={genderName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="genderCode"
												name="genderCode"
												placeholder="Code Sexe"
												defaultValue={genderCode}
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

export default UpdateGender;
