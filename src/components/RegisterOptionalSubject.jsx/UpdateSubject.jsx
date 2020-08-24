import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateSubjectMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSubjectQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';
import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateSubject = ({ id }) => {
	const [state, setState] = useForm({ subjectCode: '', subjectName: '' })
	const client = useApolloClient()


	const loadSubjData = async () => {
		const { data } = await client.query({
			query: singleSubjectQuery,
			variables: { id }

		})
		const getSubjData = data.subject
		console.log(getSubjData)
		const {
			subjectName,
			subjectCode,
		} = getSubjData

		setState({ subjectCode: subjectCode, subjectName: subjectName })
	}
	useEffect(() => {
		loadSubjData()
	}, [])


	const validationSchema = Yup.object().shape({
		subjectName: Yup.string().required("Nom de la matière obligatoire"),
		subjectCode: Yup.string().required("Code de la matière  obligatoire"),
	})
	const [updateGender] = useMutation(updateSubjectMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateGender({
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
					<h4>Modification d'info matière</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="subjectName"
									name="subjectName"
									label="Nom de la matière"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="subjectCode"
									name="subjectCode"
									label="Code de la matière"
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

export default UpdateSubject;
