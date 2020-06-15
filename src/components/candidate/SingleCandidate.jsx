import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import Link from 'next/link';
import Form from '../styles/Form';
import { format } from 'date-fns';
import { MiniStyledPage } from '../styles/StyledPage';
import styled from 'styled-components';
import { singleCandidateQuery } from '../queries&Mutations&Functions/Queries';

const UpdateBtn = styled.button`
	background-color: #379;
	border-radius: 10px;
	font-size: .3rem;
	border: none;
	outline: none;
	a {
		color: white;
	}
`;

const DivBtn = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	grid-gap: 1rem;
`;

const ImageInfo = styled.div`
	 
	 display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-gap: 1rem;
   
`;
// 
const AllInfo = styled.div`
	 
	 display: flex;
flex-direction:column;   
`;

// 
const BottomInfo = styled.div`
    padding-left:0.3rem;
    text-align: left;
    font-size: 1.3rem;
    line-height: 0.3rem;
	min-width:13rem;
	
`;

const CandImg = styled.div`
	/* padding-left: 3.5rem; */
	display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	img {
		margin-top: .5rem;
		margin-left: .5rem;
		height: 13rem;
		width: 13rem;
		border-radius: 0.7rem;
		background-size: contain;
		background-position: center;
	}
`;

class SingleCandidate extends Component {
	render() {
		return (
			<Query query={singleCandidateQuery} variables={{ id: this.props.id }}>
				{({ data, loading, error }) => {
					const { candidate } = data;
					const {
						momName,
						dadName,
						candCode,
						image,
						cand1stName,
						cand2ndName,
						cand3rdName,
						email,
						phoneNumb,
						placeOfBirth,
						gender: { genderName },
						dateOfBirth,
						birthCertNumber
					} = candidate;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					return (
						<MiniStyledPage>
							<Form>
								<h4>Info Candidat</h4>
								<fieldset>
									<ImageInfo>
										<BottomInfo>
											<p>
												<strong>Nom:</strong> <span>{cand1stName}</span>
											</p>
											<p>
												<strong>Prenoms: </strong>
												<span> {cand2ndName}</span>
											</p>

											<p>
												<strong>Autres Noms:</strong>
												<span> {cand3rdName}</span>
											</p>

											<strong>Naissance:</strong>
											<hr />
											<p>

												<strong>Date:</strong>
												<span> {format(dateOfBirth, 'd MMMM, YYYY')}</span>
											</p>
											<p>
												<strong>Lieu:</strong> <span>{placeOfBirth}</span>
											</p>
											<p>
												<strong>Sexe: </strong>
												<span> {genderName}</span>
											</p>


											<strong>Nom des parents:</strong>
											<hr />

											<p>
												<strong>Père:</strong>
												<span> {dadName}</span>
											</p>
											<p>
												<strong>Mère:</strong>
												<span> {momName}</span>
											</p>

											<p>
												<strong>Acte Naissance:</strong>
												<hr />
											</p>
											<p>
												<strong>No:</strong>
												<span> {birthCertNumber}</span>
											</p>
											<p>
												<strong>Tel: </strong> <span>{phoneNumb}</span>
											</p>
										</BottomInfo>
										<BottomInfo>
											<p>
												<strong>Email:</strong>
												<span> {email}</span>
											</p>

											<p>
												<strong>Code:</strong> <span> {candCode}</span>
											</p>
											<CandImg>
												<div>{candidate.image && <img src={image} alt="Upload image" />}</div>
											</CandImg>
										</BottomInfo>
									</ImageInfo>
									<DivBtn>
										<UpdateBtn>
											<Link
												href={{
													pathname: '../updates/updateCand',
													query: { id: this.props.id }
												}}
											>
												<a target="_blank"  >Modifier </a>
											</Link>
										</UpdateBtn>
										<UpdateBtn>
											<Link
												href={{
													pathname: '../creates/newCand'
												}}
											>
												<a target="_blank"  >Candidat Suivant</a>
											</Link>
										</UpdateBtn>
									</DivBtn>

								</fieldset>
							</Form>
						</MiniStyledPage>
					);
				}}
			</Query>
		);
	}
}

export default SingleCandidate;
