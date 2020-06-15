import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { format } from 'date-fns';
import styled from 'styled-components';
import { updateCandidateMutation } from '../queries&Mutations&Functions/Mutations';
import { singleCandidateQuery, getAllGendersQuery } from '../queries&Mutations&Functions/Queries';

const CreateCandForm = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
`;
const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
	img {
		margin-top: 1rem;
		margin-left: 5rem;
		height: 15rem;
		width: 15rem;
		border-radius: 15px;
		background-size: contain;
		background-position: center;
	}
`;
const DataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;
const FirstDataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;

class UpdateCandidate extends Component {
	state = { genderID: '' };

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateSingleCandidate = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Candidate!!');
		const res = await updateMutation({
			variables: {
				id: this.props.id,
				gender: this.getSelectedGender(gender.id),
				...this.state
			}
		});
		console.log('Candidate Updated!!');
		console.log(res);
	};

	uploadFile = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'ineximages');
		const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
			method: 'POST',
			body: data
		});
		const file = await res.json();
		console.log(file);
		this.setState({
			image: file.secure_url
			// biggerPhoto: file.eager[0].secure_url
		});
		{
			// this.state.image && <img src={this.state.image} alt="Upload image" />;
		}
	};

	getSelectedGender = (dataSource) => {
		// 1 copy the data source
		// if (dataSource.length > 0) {
		const tempGender = [...dataSource];
		// get the region object
		const selectedGender = tempGender.find((item) => item.id === this.state.genderID);
		console.log('getting selected gender');
		console.log(selectedGender);
		return selectedGender;
		// }
	};

	render() {
		return (
			<Query query={getAllGendersQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					console.log(data);
					const { genders } = data;

					const genderOptions =
						genders &&
						genders.map((item) => (
							<option key={item.id} value={item.id}>
								{item.genderName}
							</option>
						));

					return (
						<Query query={singleCandidateQuery} variables={{ id: this.props.id }}>
							{({ data, loading, error }) => {
								{
									loading && <p>Loading...</p>;
								}
								const { candidate } = data;

								{
									!candidate && <p>Pas de candidat avec le ID {this.props.id}</p>;
								}
								const {
									dateOfBirth,
									birthCertNumber,
									cand1stName,
									cand2ndName,
									cand3rdName,
									email,
									image,
									phoneNumb,
									placeOfBirth,
									gender,
									momName,
									dadName
								} = candidate;

								return (
									<Mutation mutation={updateCandidateMutation} variables={{ id: this.props.id }}>
										{(updateCandidate, { loading, error }) => (
											<StyledPage>
												<Form
													onSubmit={async (e) => {
														e.preventDefault();
														console.log('Updating Candidate!!');
														const res = await updateCandidate({
															variables: {
																id: this.props.id,
																gender: this.getSelectedGender(gender.id),
																...this.state
															}
														});
														console.log('Candidate Updated!!');
														console.log(res);
													}}
												>
													<h4>Correction d'Info Candidat</h4>
													<Error error={error} />
													<fieldset disabled={loading} aria-busy={loading}>
														<CreateCandForm>
															<PicFrame>
																<input
																	type="file"
																	id="file"
																	name="file"
																	placeholder="Your picture"
																	onChange={this.uploadFile}
																	required
																/>
																<div>
																	{this.state.image ? (
																		<img
																			src={this.state.image}
																			alt="Upload image"
																		/>
																	) : (
																			<img src={image} alt="Upload image" />
																		)}
																</div>
																<FirstDataFrame>
																	<input
																		type="text"
																		id="cand1stName"
																		name="cand1stName"
																		placeholder="Nom"
																		defaultValue={cand1stName}
																		onChange={this.handleChange}
																		required
																	/>
																	<input
																		type="text"
																		id="cand2ndName"
																		name="cand2ndName"
																		placeholder="Prenoms"
																		defaultValue={cand2ndName}
																		onChange={this.handleChange}
																		required
																	/>
																	<input
																		type="text"
																		id="cand3rdName"
																		name="cand3rdName"
																		placeholder="Autres noms"
																		defaultValue={cand3rdName}
																		onChange={this.handleChange}
																		required
																	/>
																</FirstDataFrame>
															</PicFrame>
															<DataFrame>
																<select
																	type="select"
																	id="genderID"
																	name="genderID"
																	defaultValue={gender.id}
																	onChange={this.handleChange}
																	required
																>
																	<option>Sexe du candidat</option>
																	{genderOptions}
																</select>
																<input
																	type="email"
																	id="email"
																	name="email"
																	placeholder="Email"
																	defaultValue={email}
																	onChange={this.handleChange}
																	required
																/>
																<input
																	type="number"
																	id="phoneNumb"
																	name="phoneNumb"
																	placeholder="No Tel"
																	defaultValue={phoneNumb}
																	onChange={this.handleChange}
																	required
																/>
																<input
																	type="text"
																	id="placeOfBirth"
																	name="placeOfBirth"
																	placeholder="Lieu de Naissance"
																	defaultValue={placeOfBirth}
																	onChange={this.handleChange}
																	required
																/>

																<input
																	type="text"
																	id="birhtCertNumber"
																	name="birhtCertNumber"
																	placeholder="No Acte de Naissance"
																	defaultValue={birthCertNumber}
																	onChange={this.handleChange}
																	required
																/>

																<input
																	type="Date"
																	id="dateOfBirth"
																	name="dateOfBirth"
																	placeholder="Date de Naissance"
																	defaultValue={format(dateOfBirth, 'd MMMM YYYY')}
																	onChange={this.handleChange}
																	required
																/>

																<input
																	type="text"
																	id="dadName"
																	name="dadName"
																	placeholder="Noms du Père"
																	defaultValue={dadName}
																	onChange={this.handleChange}
																	required
																/>
																<input
																	type="text"
																	id="momName"
																	name="momName"
																	placeholder="Noms de la Mère"
																	defaultValue={momName}
																	onChange={this.handleChange}
																	required
																/>

																<div className="submitButton">
																	<button type="submit">
																		Valid{loading ? 'ation en cours' : 'er'}
																	</button>
																</div>
															</DataFrame>
														</CreateCandForm>
													</fieldset>
												</Form>
											</StyledPage>
										)}
									</Mutation>
								);
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}

export default UpdateCandidate;
