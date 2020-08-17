import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateSessionMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSessionQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateSession = ({ id }) => {
	const [state, setState] = useForm({ sessionName: '', sessionCode: '' })
	const client = useApolloClient()


	const loadSessionData = async () => {
		const { data } = await client.query({
			query: singleSessionQuery,
			variables: { id }

		})
		const getSessionData = data.session
		console.log(getSessionData)
		const {
			sessionCode,
			sessionName,
		} = getSessionData

		setState({ sessionName: sessionName, sessionCode: sessionCode })
	}
	useEffect(() => {
		loadSessionData()
	}, [])


	const validationSchema = Yup.object().shape({
		sessionCode: Yup.string().required("Nom de la session obligatoire"),
		sessionName: Yup.string().required("Code de la session  obligatoire"),
	})
	const [updateSession] = useMutation(updateSessionMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateSession({
					variables: {
						...values,
						id: id
					},
				});
				// Router.push({
				// 	pathname: '/show/singleExam',
				// 	query: { id }
				// });
				setTimeout(() => {
					console.log(JSON.stringify(values, null, 2));
					console.log(res);
					resetForm(true);
					setSubmitting(false);
				}, 200);
			}}
		>
			{({ values, isSubmitting }) => (

				<MiniStyledPage>
					<h4>Modification d'info examen</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="sessionCode"
									name="sessionCode"
									label="Nom de la session"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="sessionName"
									name="sessionName"
									label="Code de la session"
									disabled={isSubmitting}
								/>
								<ButtonStyled className="submitButton">
									<StyledButton type="submit">
										valid{isSubmitting ? 'ation en cours' : 'er'}
									</StyledButton>
								</ButtonStyled>
							</Controls>
						</Form>
					</StyledForm>
				</MiniStyledPage>
			)}
		</Formik>
	);
}

export default UpdateSession;
