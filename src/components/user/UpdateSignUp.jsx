import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateSignUpMutation } from '../queries&Mutations&Functions/Mutations';
import { meQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';
import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateGenderHooks = ({ id }) => {
	const [state, setState] = useForm({ email: '', name: '', password: "" })
	const client = useApolloClient()


	const loadSignupData = async () => {
		const { data } = await client.query({
			query: meQuery,
			variables: { id }

		})
		const getMeData = data.me
		console.log(getMeData)
		const {
			name,
			email,
			password,
		} = getMeData

		setState({ email: email, name: name, password: password })
	}
	useEffect(() => {
		loadSignupData()
	}, [])


	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Nom obligatoire"),
		email: Yup.string().required("Email obligatoire"),
		password: Yup.string().required("Mot de passe obligatoire"),
	})
	const [updateSignUp] = useMutation(updateSignUpMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateSignUp({
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
					<h4>Modification d'info gendre</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="name"
									name="name"
									label="Nom"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="email"
									name="email"
									label="Email"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="password"
									name="password"
									label="Mot de passe"
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

export default UpdateGenderHooks;
