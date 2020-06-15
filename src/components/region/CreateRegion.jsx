import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import { createNewRegionMutation } from '../queries&Mutations&Functions/Mutations';

class CreateRegion extends Component {
	state = {
		regName: '',
		regCode: ''
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	resetForm() {
		this.setState({ regName: '', regCode: '' });
	}

	render() {
		return (
			<Mutation mutation={createNewRegionMutation} variables={this.state}>
				{(createRegion, { loading, error }) => (
					<StyledPage>
						<Form
							method="POST"
							onSubmit={async (e) => {
								e.preventDefault();
								const res = await createRegion();
								console.log(res);
								this.resetForm();
							}}
						>
							<h4>Créer Nouvelle Région</h4>
							<Error error={error} />
							<fieldset disabled={loading} aria-busy={loading}>
								<input
									type="text"
									id="regName"
									name="regName"
									placeholder="Nom Région"
									value={this.state.regName}
									onChange={this.handleChange}
									required
								/>
								<input
									type="text"
									id="regCode"
									name="regCode"
									placeholder="Code Région"
									value={this.state.regCode}
									onChange={this.handleChange}
									required
								/>
								<div className="submitButton">
									<button type="submit">Valid{loading ? 'ation en cours' : 'er'}</button>
								</div>
							</fieldset>
						</Form>
					</StyledPage>
				)}
			</Mutation>
		);
	}
}
export default CreateRegion;
