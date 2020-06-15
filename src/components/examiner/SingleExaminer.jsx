import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import Link from 'next/link';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import styled from 'styled-components';
import { singleExaminerQuery } from '../queries&Mutations&Functions/Queries';

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
grid-template-columns: repeat(auto-fit, minmax(13rem,1fr));
	grid-gap:1rem;
`;


const BottomInfo = styled.div`
display: flex;
flex-direction:column;
	text-align:left;
`;

const GenInfo = styled.div`
	text-align:left;
	/* margin: 0 auto; */
    font-size: 1.3rem;
    line-height: 0.2rem;
  
`;

const ExaminerInfo = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(13rem,1fr));
grid-gap	:0.6rem;
	text-align:left;
	/* padding: .5px;
	margin: .5rem auto;
    font-size: 1.6rem;
    line-height: 0.3rem; */
  
`;

const ExaminerImg = styled.div`
	/* padding-left: 3.5rem; */
	display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	img {
		padding-top:1rem;
		margin:0 auto;
		height: 13rem;
		width: 13rem;
		border-radius: 10px;
		background-size: contain;
		background-position: center;
	}
`;

class SingleExaminer extends Component {
	render() {
		return (
			<Query query={singleExaminerQuery} variables={{ id: this.props.id }}>
				{({ data, loading, error }) => {
					const { examiner } = data;
					const {
						examiner1stName,
						examiner2ndName,
						examinerOtherNames,
						examinerCode,
						examinerEmail,
						examinerCNI,
						examinerImage,
						examinerPhone,
						examinerMatricule
					} = examiner;
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					return (
						<MiniStyledPage>
							<Form>
								<h4>Info Examinateur</h4>
								<fieldset>
									<BottomInfo>
										<ExaminerInfo>
											<GenInfo>
												<p>
													<strong>Nom:</strong> <span>{examiner1stName}</span>
												</p>
												<p>
													<strong>Prenoms: </strong>
													<span> {examiner2ndName}</span>
												</p>
												<p>
													<strong>Autres Noms:</strong>
													<span> {examinerOtherNames}</span>
												</p>
												<p>
													<strong>Matricule:</strong>
													<span> {examinerMatricule}</span>
												</p>

												<p>
													<strong>Tel: </strong> <span>{examinerPhone}</span>
												</p>

												<p>
													<strong>Email:</strong>
													<span> {examinerEmail}</span>
												</p>
												<p>
													<strong>CNI:</strong>
													<span> {examinerCNI}</span>
												</p>

												<p>
													<strong>Code:</strong> <span> {examinerCode}</span>
												</p>
											</GenInfo>
											<ExaminerImg>
												<div>{examinerImage && <img src={examinerImage} alt={examinerEmail} />}</div>
											</ExaminerImg>
										</ExaminerInfo>
										<DivBtn>
											<UpdateBtn>
												<Link
													href={{
														pathname: '../updates/updateExaminer',
														query: { id: this.props.id }
													}}
												>
													<a target="_blank" >Modifier </a>
												</Link>
											</UpdateBtn>
											<UpdateBtn>
												<Link
													href={{
														pathname: '../creates/newExaminer'
													}}
												>
													<a target="_blank" >Nouveau Examinateur</a>
												</Link>
											</UpdateBtn>
										</DivBtn>
									</BottomInfo>
								</fieldset>
							</Form>
						</MiniStyledPage>
					);
				}}
			</Query>
		);
	}
}

export default SingleExaminer;
