import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Form from '../styles/Form';
import { StyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import DeleteCenter from './DeleteCenter';
import { getSingleCenterQuery } from '../queries&Mutations&Functions/Queries';

const ButtonBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 6fr;
	grid-gap: 2rem;
`;
const DeleteBlock = styled.div`align-content: left;`;
const UpdateBlock = styled.button`
	font-weight: bold;
	border-radius: 8px;
	font-size: 1.3rem;
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

class SelectCenterToModify extends Component {
	state = {
		regionID: '125',
		divisionID: '125',
		subDivisionID: '125',
		townID: '125',
		centerID: '125',
		id: '125',
	};

	handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		// make theses variables available in the render method
		const { id } = this.state;

		return (
			<Query query={getSingleCenterQuery}
				variables={{ centerNumber: centerNumber, }}>
				{({ data, error, loading }) => {
					{ loading && <p>...Loading</p> }
					{ error && <Error error={error} /> }
					const { centerByNumber } = { ...data }
					centerByNumber && delete centerByNumber.__typename
					console.log(centerByNumber)

					return (
						<StyledPage>
							<Form
								onSubmit={async (e) => {
									e.preventDefault();
									const res = await updateCenter();
									console.log(res);

								}}
							>
								<h4>
									Modification d'un Centre D'Examen
																				</h4>
								<Error error={error} />
								<fieldset
									disabled={loading}
									aria-busy={loading}
								>
									<ButtonBlock>
										<UpdateBlock>
											<Link
												href={{
													pathname: '../updates/updateCenter',
													query: { id }
												}}
											>
												<a>Valider</a>
											</Link>
										</UpdateBlock>
										<DeleteBlock>
											<DeleteCenter
												id={this.state.id}
											>
												Delete
                                       </DeleteCenter>
										</DeleteBlock>
									</ButtonBlock>
								</fieldset>
							</Form>
						</StyledPage>
					);
				}}
			</Query>

		);
	}
}
export default SelectCenterToModify;
