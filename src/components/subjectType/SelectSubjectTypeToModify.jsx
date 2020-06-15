import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteSubjectType from './DeleteSubjectType';
import { getAllSubjectTypesQuery } from '../queries&Mutations&Functions/Queries';

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
		/* background-color: #4c50;
		color: #4caf50; */
	}
	a {
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

class SelectSubjectTypeToModify extends Component {
	state = {
		id: ''
	};

	render = () => {
		const { id } = this.state;
		return (
			<Query query={getAllSubjectTypesQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { subjectTypes } = data;
					const getSubjectTypes = subjectTypes.map((item) => (
						<option value={item.id} key={item.id}>
							{item.subjectTypeName} - {item.subjectTypeCode}
						</option>
					));

					return (
						<StyledPage>
							<Form
								onSubmit={async (e) => {
									e.preventDefault();
									const res = await updateSubjectType();
									console.log(res);
								}}
							>
								<h4>Correction de type d'Enseignement</h4>
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
												<option>Type d'Enseignement a modifier </option>
												{getSubjectTypes}
											</select>
										</SelectBlock>

										<UpdateBlock>
											<Link href={{ pathname: '../updates/updateSubjectType', query: { id } }}>
												<a>Modifier</a>
											</Link>
										</UpdateBlock>
										<DeleteBlock>
											<DeleteSubjectType id={this.state.id}>Supprimer</DeleteSubjectType>
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

export default SelectSubjectTypeToModify;
