import React, { useState, useEffect } from 'react';
import Error from '../ErrorMessage';
import Link from 'next/link';
import { StyledButton, ButtonStyled } from '../utils/FormInputs'
import useForm from '../utils/useForm  '
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import styled from 'styled-components';
import { singleExaminerQuery } from '../queries&Mutations&Functions/Queries';
import { useApolloClient } from '@apollo/react-hooks';

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

`;

const ExaminerImg = styled.div`
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

const SingleExaminer = (props) => {
	const [state, setState] = useForm({})
	const client = useApolloClient()

	const loadingExaminerData = async () => {
		const { data, error, loading } = await client.query({
			query: singleExaminerQuery,
			variables: { id: props.id }
		})

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
			examinerMatricule,
			gender,
		} = examiner;
		setState({
			examiner1stName: examiner1stName,
			examiner2ndName: examiner2ndName,
			examinerOtherNames: examinerOtherNames,
			examinerCode: examinerCode,
			examinerEmail: examinerEmail,
			examinerCNI: examinerCNI,
			examinerImage: examinerImage,
			examinerPhone: examinerPhone,
			examinerMatricule: examinerMatricule,
			gender: gender,
		})
	}

	useEffect(() => {
		loadingExaminerData()
	}, [])

	const {
		examiner1stName,
		examiner2ndName,
		examinerOtherNames,
		examinerCode,
		examinerEmail,
		examinerCNI,
		examinerImage,
		examinerPhone,
		examinerMatricule,
		gender,
	} = state
	return (
		<MiniStyledPage >
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
							<ButtonStyled>
								<StyledButton>
									<Link
										href={{
											pathname: '../updates/updateExaminer',
											query: { id: props.id }
										}}
									>
										<a target="_blank" >Modifier </a>
									</Link>
								</StyledButton>
							</ButtonStyled>
							<ButtonStyled>
								<StyledButton>
									<Link
										href={{
											pathname: '../creates/newExaminer'
										}}
									>
										<a target="_blank" >Nouveau Examinateur</a>
									</Link>
								</StyledButton>
							</ButtonStyled>
						</DivBtn>
					</BottomInfo>
				</fieldset>
			</Form>
		</MiniStyledPage >

	);
}

export default SingleExaminer;
