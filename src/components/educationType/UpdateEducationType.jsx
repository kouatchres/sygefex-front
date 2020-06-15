import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { singleEducationTypeQuery } from '../queries&Mutations&Functions/Queries';
import { updateEducationTypeMutation } from '../queries&Mutations&Functions/Mutations';

class UpdateEducationType extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	singleEducationTypeQuery = async (e, updateMutation) => {
		e.preventDefault();
		const res = await updateMutation({
			variables: {
				...this.state,
				id: this.props.id
			}
		});
	};

	render() {
		return (
			<Query
				query={singleEducationTypeQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { educationType } = data;
					const { educationTypeName, educationTypeCode } = educationType;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.educationType && <p>Pas de departement pout le ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateEducationTypeMutation} variables={{ id: this.props.id }}>
							{(updateEducationType, { loading, error }) => (
								<StyledPage>
									<Form onSubmit={(e) => this.singleEducationTypeQuery(e, updateEducationType)}>
										<h4>Modification du type d'enseignement</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="educationTypeName"
												name="educationTypeName"
												placeholder="Nom du type D'Enseignement"
												defaultValue={educationTypeName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="educationTypeCode"
												name="educationTypeCode"
												placeholder="Code du type D'Enseignement"
												defaultValue={educationTypeCode}
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

export default UpdateEducationType;
