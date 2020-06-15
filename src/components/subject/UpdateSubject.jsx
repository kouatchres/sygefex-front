import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { updateSubjectMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSubjectQuery } from '../queries&Mutations&Functions/Queries';

class subject extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleSubject = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating subject!!');
		const res = await updateMutation({
			variables: {
				...this.state,
				id: this.props.id
			}
		});
		console.log('subject Updated!!');
	};

	render() {
		return (
			<Query
				query={singleSubjectQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);

					const { subjectName, subjectCode } = data.subject;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!data.subject && <p>No subject Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateSubjectMutation} variables={{ id: this.props.id }}>
							{(updateSubject, { loading, error }) => (
								<StyledPage>
									<Form onSubmit={(e) => this.updateSingleSubject(e, updateSubject)}>
										<h4>Modification d'une matiere</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="subjectName"
												name="subjectName"
												placeholder="Nom de la Matiere"
												defaultValue={subjectName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="subjectCode"
												name="subjectCode"
												placeholder="Code de la Matiere"
												defaultValue={subjectCode}
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

export default subject;
