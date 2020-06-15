import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteRank from '../rank/DeleteRank';
import { getAllRanksQuery } from '../queries&Mutations&Functions/Queries';

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
	grid-template-columns: 3fr auto auto;
	grid-gap: 20px;
	text-align: center;
	margin: 0 auto;
`;

class SelectRankToModify extends Component {
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
			<Query query={getAllRanksQuery}>
				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { ranks } = data;
					//'getting ranks  from the state')
					const getRank = ranks.map((item) => (
						<option value={item.id} key={item.id}>
							{item.rankName} - {item.rankCode}
						</option>
					));

					return (
						<StyledPage>
							<Form
								onSubmit={async (e) => {
									e.preventDefault();
									const res = await updateRank();
									console.log(res);
								}}
							>
								<h4>Modification de Poste</h4>
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
												{getRank}
											</select>
										</SelectBlock>

										<UpdateBlock>
											<Link href={{ pathname: '../updates/updateRank', query: { id } }}>
												<a>Update</a>
											</Link>
										</UpdateBlock>
										<DeleteBlock>
											<DeleteRank id={this.state.id}>Delete</DeleteRank>
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

export default SelectRankToModify;
