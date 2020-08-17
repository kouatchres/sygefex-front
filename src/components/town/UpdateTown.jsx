import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateTownMutation } from '../queries&Mutations&Functions/Mutations';
import { singleTownQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

const UpdateTown = ({ id }) => {
	const [state, setState] = useForm({ townCode: '', townName: '' })
	const client = useApolloClient()


	const loadTownData = async () => {
		const { data } = await client.query({
			query: singleTownQuery,
			variables: { id }

		})
		const getTownData = data.town
		console.log(getTownData)
		const {
			townName,
			townCode,
		} = getTownData

		setState({ townCode: townCode, townName: townName })
	}
	useEffect(() => {
		loadTownData()
	}, [])


	const validationSchema = Yup.object().shape({
		townName: Yup.string().required("Nom de la ville obligatoire"),
		townCode: Yup.string().required("Code de la ville  obligatoire"),
	})
	const [updateTown] = useMutation(updateTownMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateTown({
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
					<h4>Modification d'info de ville</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<SygexInput
								type="text"
								id="townName"
								name="townName"
								label="Nom de la ville"
								disabled={isSubmitting}
							/>
							<SygexInput
								type="text"
								id="townCode"
								name="townCode"
								label="Code de la ville"
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

export default UpdateTown;
