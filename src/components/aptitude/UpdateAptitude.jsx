import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateExamMutation } from '../queries&Mutations&Functions/Mutations';
import { singleExamQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';


import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateExam = ({ id }) => {
	const [state, setState] = useForm({ examCode: '', examName: '' })
	const client = useApolloClient()


	const loadExamData = async () => {
		const { data } = await client.query({
			query: singleExamQuery,
			variables: { id }

		})
		const getExamData = data.exam
		console.log(getExamData)
		const {
			examName,
			examCode,
		} = getExamData

		setState({ examCode: examCode, examName: examName })
	}
	useEffect(() => {
		loadExamData()
	}, [])


	const validationSchema = Yup.object().shape({
		examName: Yup.string().required("Nom d'examen obligatoire"),
		examCode: Yup.string().required("Code d'examen  obligatoire"),
	})
	const [updateExam] = useMutation(updateExamMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateExam({
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
									id="examName"
									name="examName"
									label="Nom du type D'Enseignement"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="examCode"
									name="examCode"
									label="Code du type D'Enseignement"
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

export default UpdateExam;
