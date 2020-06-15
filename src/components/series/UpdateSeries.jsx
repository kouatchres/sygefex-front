import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { updateSeriesMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSeriesQuery } from '../queries&Mutations&Functions/Queries';

class UpdateSeries extends Component {
	state = {};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateItemMutation = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Series!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				...this.state
			}
		});
		console.log('Series Updated!!');
	};

	render() {
		return (
			<Query
				query={singleSeriesQuery}
				variables={{
					id: this.props.id
				}}
			>
				{({ data, loading, error }) => {
					console.log(data);
					const { series } = data;
					const { seriesName, seriesCode } = series;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					{
						!series && <p>No series Found for ID {this.props.id}</p>;
					}

					return (
						<Mutation mutation={updateSeriesMutation} variables={{ id: this.props.id }}>
							{(updateSeries, { loading, error }) => (
								<StyledPage>
									<Form method="POST" onSubmit={(e) => this.updateItemMutation(e, updateSeries)}>
										<h4>Modification de Séries</h4>
										<Error error={error} />
										<fieldset disabled={loading} aria-busy={loading}>
											<input
												type="text"
												id="seriesName"
												name="seriesName"
												placeholder="Nom Séries"
												defaultValue={seriesName}
												onChange={this.handleChange}
												required
											/>
											<input
												type="text"
												id="seriesCode"
												name="seriesCode"
												placeholder="Code Séries"
												defaultValue={seriesCode}
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

export default UpdateSeries;
