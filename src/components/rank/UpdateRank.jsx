import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { singleRankQuery } from '../queries&Mutations&Functions/Queries';
import { updateRankMutation } from '../queries&Mutations&Functions/Mutations';

class UpdateRank extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleRank = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Rank!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('Rank Updated!!');
	};

	render() {
		return (
			<Query
				query={singleRankQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					const { rank } = data;
					const { rankName, rankCode } = rank;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!rank && <p>No Rank Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateRankMutation} variables={{ id: this.props.id }}>
							{(updateRank, { loading, error }) => (
								<StyledPage>
									<Form onSubmit={(e) => this.updateSingleRank(e, updateRank)}>
										<h4>Modification De Poste</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="rankName"
												name="rankName"
												placeholder="Nom Poste"
												defaultValue={rankName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="rankCode"
												name="rankCode"
												placeholder="Code Post"
												defaultValue={rankCode}
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

export default UpdateRank;
