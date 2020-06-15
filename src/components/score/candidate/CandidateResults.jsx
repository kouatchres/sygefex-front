import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Form from '../../styles/Form';
import useForm from '../utils/useForm'
import { MiniStyledPage } from '../../styles/StyledPage';
import Error from '../../ErrorMessageage';
import styled from 'styled-components';
import Router from 'next/router';
import { getSelectedObject } from '../../queries&Mutations&Functions/Functionsons';
import {
	getAllExamsQuery,
	getCandidateRegistrationIDQuery,
	getAllSessionsQuery,
	getSingleCenterExamSessionQuery
} from '../../queries&Mutations&Functions/Queries';
import { removeTypename } from '../../queries&Mutations&Functions/Functions';

const OtherSelect = styled.div`
  display: block;
flex-direction:column
  text-align: center;
  margin: 0 auto;
  /* min-width: 40rem; */
`;

const CandidateResults = () => {
	const { state, handleReactSelectChange, setState } = useForm({
		candCode: '',
		sessionID: '12',
		examID: '12',
		id: '',
	});

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseInt(value) : value;
		this.setState({ [name]: val });
	};
	const resetForm = () => {
		this.setState({ candCode: '' });
	};

	const makeCandVariableObject = (candCodeValue) => {
		const storedCandidate = {
			candCode: `${candCodeValue}`
		};
		return storedCandidate;
	};

	const { data: dataExam, loading: loadingExam, error: errorExam } = useQuery(getAllExamsQuery)

	{ loadingExam && <p>loading...</p>; }
	{ errorExam && <Error error={errorExam} />; }

	const getExams = dataExam && dataExam.exams;
	console.log(exams);

	const refinedExams = getExams && removeTypename(getExams);
	const getExamsOptions =
		getExams &&
		getExams.map((item) => ({ value: item.id, label: item.examName }));

	const { data: dataSession, loadding: loadingSession, error: errorSession } = useQuery(getAllSessionsQuery)

	{ loadingSession && <p>loading...</p>; }
	{ errorSession && <Error error={errorSession} />; }

	const getSessions = dataSession && dataSession.sessions;
	const refinedSessions =
		getSessions && removeTypename(getSessions)
	const getSessionsOptions =
		sessions &&
		sessions.map((item) => (
			{ value: { item.id, label: item.sessionName }
		));
	const { data: dataExamSession, loading: loadingExamSession, error: errExamSession } = useQuery(getSingleCenterExamSessionQuery, {
		skip: !
			variables:{
		exam: refinedExams && getSelectedObject(refinedExams, state.examID),
		session: refinedSessions && getSelectedObject(refinedSessions, state.sessionID),
		center: refinedCenter && getSelectedObject(refinedCenter, state.centerID)
	}}
	)
console.log(dataExamSession);
const { centerExamSessions } = { ...dataExamSession };
console.log(centerExamSessions);
// remove typename from the object
const refinedCenterExamSessions = centerExamSessions && removeTypename(centerExamSessions);
// transform the array into a single object
const getObj = refinedCenterExamSessions && refinedCenterExamSessions[0];
console.log(getObj);


const { dataCand, error: errorCand, loading: loadingCand } = useQuery(getCandidateRegistrationIDQuery, {
	skip: !getObj || !state.candCode,
	variables: {
		centerExamSession: getObj && getObj,
		candidate: makeCandVariableObject(candCode)
	}
}
)

const { candidateRegistrationID } = { ...dataCand };
candidateRegistrationID &&
	Router.push({
		pathname: '/show/results/candResults',
		query: { id: candidateRegistrationID.id }
	});
return (
	<MiniStyledPage>
		<Form
			onSubmit={async (e) => {
				e.preventDefault();
			}}
		>
			<h4>Résultats d'un Candidat</h4>
			<Error error={errorCand} />
			<fieldset disabled={loadingCand} aria-busy={loadingCand}>
				<OtherSelect>
					<select
						type="select"
						id="sessionID"
						name="sessionID"
						value={sessionID}
						onChange={this.handleChange}
						required
					>
						<option>la Session</option>
						{sessionsOptions}
					</select>
					<select
						type="select"
						id="examID"
						name="examID"
						value={examID}
						onChange={this.handleChange}
						required
					>
						<option> L'Examen</option>
						{examsOptions}
					</select>

					<input
						type="search"
						id="candCode"
						name="candCode"
						value={candCode}
						placeholder="Code Candidat"
						onChange={this.handleChange}
						required
					/>
				</OtherSelect>
			</fieldset>
		</Form>
	</MiniStyledPage>
);
}

export default CandidateResults;
