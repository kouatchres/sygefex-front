import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { singleSessionQuery } from '../queries&Mutations&Functions/Queries';
import { updateSessionMutation } from '../queries&Mutations&Functions/Mutations';

class UpdateSession extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updatSingleSession = async (e, UpdateMutation) => {
		e.preventDefault();
		console.log('Updating Session!!');
		const res = await UpdateMutation({
			variables: {
				...this.state,
				id: this.props.id
			}
		});
		console.log('Session Updated!!');
	};

	render() {
		return (
			<Query
				query={singleSessionQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					const { session } = data;

					const { sessionName, sessionCode } = session;

					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!session && <p>No session Found for ID {this.props.id}</p>;
					}
					console.log(this.state)
					return (
						<Mutation mutation={updateSessionMutation} variables={{ id: this.props.id }}>
							{(updateSession, { loading, error }) => (
								<StyledPage>
									<Form onSubmit={(e) => this.updatSingleSession(e, updateSession)}>
										<h4>Modification de Session</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="sessionName"
												name="sessionName"
												placeholder="Nom session"
												defaultValue={sessionName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="sessionCode"
												name="sessionCode"
												placeholder="Code session"
												defaultValue={sessionCode}
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

export default UpdateSession;
