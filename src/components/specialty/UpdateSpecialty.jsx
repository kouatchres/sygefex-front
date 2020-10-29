import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateSpecialtyMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSpecialtyQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const specialty = ({ id }) => {
	const [state, setState] = useForm({ specialtyCode: '', specialtyName: '' })
	const client = useApolloClient()


	const specialtyData = async () => {
		const { data } = await client.query({
			query: singleSpecialtyQuery,
			variables: { id }

		})
		const specialtyData = data.specialty
		console.log(specialtyData)
		const {
			specialtyName,
			specialtyCode,
		} = specialtyData

		setState({ specialtyCode: specialtyCode, specialtyName: specialtyName })
		// return specialtyData
	}
	useEffect(() => {
		specialtyData()
	}, [])


	const validationSchema = Yup.object().shape({
		specialtyName: Yup.string().required("Libellé de la spécialté obligatoire"),
		specialtyCode: Yup.string().required("Code de la spécialté  obligatoire"),
	})
	const [specialty] = useMutation(updateSpecialtyMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await specialty({
					variables: {
						...values,
						 id
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
					<h4>Modification d'info spécialté</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="specialtyName"
									name="specialtyName"
									label="Libellé de la spécialté"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="specialtyCode"
									name="specialtyCode"
									label="Code de la spécialté"
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

export default specialty;
