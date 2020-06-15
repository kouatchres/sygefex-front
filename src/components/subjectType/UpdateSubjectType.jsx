import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { singleSubjectTypeQuery } from '../queries&Mutations&Functions/Queries';
import { updateSubjectTypeMutation } from '../queries&Mutations&Functions/Mutations';

class UpdateSubjectType extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ subjectTypeName: '', subjectTypeCode: '' });
	}

	updateSingleSubjectType = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating SubjectType!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('SubjectType Updated!!');
	};

	render() {
		return (
			<Query
				query={singleSubjectTypeQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { subjectType } = data;
					const { subjectTypeName, subjectTypeCode } = subjectType;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!subjectType && <p>No SubjectType Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateSubjectTypeMutation} variables={{ id: this.props.id }}>
							{(updateSubjectType, { loading, error }) => (
								<StyledPage>
									<Form
										onSubmit={async (e) => {
											e.preventDefault();
											await this.updateSingleSubjectType(e, updateSubjectType);
											this.resetForm();
										}}
									>
										<h4>Modification de Type de Matiere</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="subjectTypeName"
												name="subjectTypeName"
												placeholder="Nom Matiere"
												defaultValue={subjectTypeName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="subjectTypeCode"
												name="subjectTypeCode"
												placeholder="Code Matiere"
												defaultValue={subjectTypeCode}
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

export default UpdateSubjectType;
