import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteRegion from '../region/DeleteRegion';
import { getAllEducationTypesQuery } from '../queries&Mutations&Functions/Queries';
import UpdateEducationType from './UpdateEducationType';

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
`;

const SelectBlock = styled.div`display: block;`;
const StyledDivision = styled.div`
	display: grid;
	grid-template-columns: 7fr auto auto;
	grid-gap: 20px;
	text-align: center;
	margin: 0 auto;
`;

class SelectEducTypeToModify extends Component {
	state = {
		id: ''
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render = () => {
		const { id } = this.state;
		return (
			<Query query={getAllEducationTypesQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { educationTypes } = data;
					console.log(data);
					//'getting region from the state')
					const getEducTypes = educationTypes.map((item) => (
						<option value={item.id} key={item.id}>
							{item.educationTypeName} - {item.educationTypeCode}
						</option>
					));

					return (
						<StyledPage>
							<Form
								onSubmit={async (e) => {
									e.preventDefault();
									const res = await updateEducationType();
									console.log(res);
								}}
							>
								<h4>Modification du type d'enseignement</h4>
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
												<option>Poste a modifier </option>
												{getEducTypes}
											</select>
										</SelectBlock>

										<UpdateBlock>
											<Link href={{ pathname: '../updates/updateEducType', query: { id } }}>
												<a>Modifier</a>
											</Link>
										</UpdateBlock>
										<DeleteBlock>
											<DeleteRegion id={this.state.id}>Delete</DeleteRegion>
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

export default SelectEducTypeToModify;
