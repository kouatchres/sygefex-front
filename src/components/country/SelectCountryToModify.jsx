import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteGender from './DeleteGender';

const DeleteBlock = styled.div`align-content: left;`;
const UpdateBlock = styled.button`
	font-weight: bold;
	border-radius: 8px;
	font-size: 1.5rem;
	height: 30px;
	border: none;
	padding: 5px;
	align-items: center;
	background-color: white;
	color: black;
	border: 2px solid #4caf50; /* Green */
	:hover {
		cursor: pointer;
		background-color: #4c50;
		color: #4caf50;
	}
	a {
		color: white;
	}
`;

const SelectBlock = styled.div`
	/* display: block; */
	display: grid;
	grid-gap: 10px;
`;
const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 7fr auto auto;
	grid-gap: 20px;
	text-align: center;
	margin: 0 auto;
`;

const getAllGendersQuery = gql`
	query getAllGendersQuery {
		genders(orderBy: genderName_DESC) {
			id
			genderName
			genderCode
		}
	}
`;

class SelectGenderToModify extends Component {
	state = {
		id: '122'
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	getSelectedGender = (dataSource) => {
		// 1 copy the data source
		if (dataSource.length > 0) {
			const tempGenders = [...dataSource];
			// get the region object
			const selectedGender = tempGenders.find((item) => item.id === this.state.genderID);
			console.log('getting selected region');
			console.log(selectedGender);
			return selectedGender;
		}
	};

	render = () => {
		const { id } = this.state;
		return (
			<Query query={getAllGendersQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { genders } = data;

					console.log(this.state.genders);

					const getGenders = genders.map((item) => (
						<option value={item.id} key={item.id}>
							{item.genderName} - {item.genderCode}
						</option>
					));
					return (
						<StyledPage>
							<Form
								onSubmit={async (e) => {
									e.preventDefault();
									const res = await updateGender();
									console.log(res);
								}}
							>
								<h4>Modification de Sexe</h4>
								<Error error={error} />
								<fieldset disabled={loading} aria-busy={loading}>
									<StyledDivision>
										<SelectBlock>
											<select
												type="select"
												id="id"
												name="id"
												value={this.state.id}
												onChange={this.handleChange}
												required
											>
												<option>choisir sexe a modifier</option>
												{getGenders}
											</select>
										</SelectBlock>

										<UpdateBlock>
											<Link href={{ pathname: '../updates/updateCountry', query: { id } }}>
												<a>Modifier</a>
											</Link>
										</UpdateBlock>
										<DeleteBlock>
											<DeleteGender id={this.state.id}>Delete</DeleteGender>
										</DeleteBlock>
									</StyledDivision>
								</fieldset>
							</Form>
						</StyledPage>
					);
				}}
			</Query>
		);
	};
}

export default SelectGenderToModify;
