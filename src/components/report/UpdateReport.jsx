import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateExamMutation } from '../queries&Mutations&Functions/Mutations';
import { singleGenderQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

const UpdateGenderHooks = ({ id }) => {
	const [state, setState] = useForm({ genderCode: '', genderName: '' })
	const client = useApolloClient()


	const loadGenderData = async () => {
		const { data } = await client.query({
			query: singleGenderQuery,
			variables: { id }

		})
		const getGenderData = data.gender
		console.log(getGenderData)
		const {
			genderName,
			genderCode,
		} = getGenderData

		setState({ genderCode: genderCode, genderName: genderName })
	}
	useEffect(() => {
		loadGenderData()
	}, [])


	const validationSchema = Yup.object().shape({
		genderName: Yup.string().required("Nom du sexe obligatoire"),
		genderCode: Yup.string().required("Code du sexe  obligatoire"),
	})
	const [updateGender] = useMutation(updateExamMutation, {
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
					<h4>Modification d'info examen</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<SygexInput
								type="text"
								id="genderName"
								name="genderName"
								label="Nom du sexe"
								disabled={isSubmitting}
							/>
							<SygexInput
								type="text"
								id="genderCode"
								name="genderCode"
								label="Code du sexe"
								disabled={isSubmitting}
							/>
							<ButtonStyled className="submitButton">
								<StyledButton type="submit">
									valid{isSubmitting ? 'ation en cours' : 'er'}
								</StyledButton>
							</ButtonStyled>
						</Form>
					</StyledForm>
				</MiniStyledPage>
			)}
		</Formik>
	);
}

export default UpdateGenderHooks;
