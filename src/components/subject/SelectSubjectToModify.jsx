import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteRegion from '../region/DeleteRegion';
import { getAllSubjectsQuery } from '../queries&Mutations&Functions/Queries';

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
		background-color: ${(props) => props.theme.googleBlue};
		color: white;
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

class SelectSubjectToModify extends Component {
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
			<Query query={getAllSubjectsQuery}>
				{({ data, loading, error }) => {
					{ loading && <p>Loading...</p>; }
					{ error && <Error error={error} />; }

					const getSubject = data.subjects && data.subjects.map((item) => (
						<option value={item.id} key={item.id}>
							{item.subjectName} - {item.subjectCode}
						</option>
					));

					return (
						<StyledPage>
							<Form
								onSubmit={async (e) => {
									e.preventDefault();
									const res = await updateSubject();
									console.log(res);
								}}
							>
								<h4>Modification d'une matiere</h4>
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
												<option>Choisissez la matiere a modifier </option>
												{getSubject}
											</select>
										</SelectBlock>

										<UpdateBlock>
											<Link href={{ pathname: '../updates/updateSubject', query: { id } }}>
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

export default SelectSubjectToModify;
