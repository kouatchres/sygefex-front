import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateSeriesMutation } from '../queries&Mutations&Functions/Mutations';
import { singleSeriesQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateSeries = ({ id }) => {
	const [state, setState] = useForm({ seriesCode: '', seriesName: '' })
	const client = useApolloClient()


	const loadSeriesData = async () => {
		const { data } = await client.query({
			query: singleSeriesQuery,
			variables: { id }

		})
		const getSeriesData = data.series
		console.log(getSeriesData)
		const {
			seriesName,
			seriesCode,
		} = getSeriesData

		setState({ seriesCode: seriesCode, seriesName: seriesName })
	}
	useEffect(() => {
		loadSeriesData()
	}, [])


	const validationSchema = Yup.object().shape({
		seriesName: Yup.string().required("Nom de la série obligatoire"),
		seriesCode: Yup.string().required("Code de la série  obligatoire"),
	})
	const [updateSeries] = useMutation(updateSeriesMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateSeries({
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
					<h4>Modification d'info série</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="seriesName"
									name="seriesName"
									label="Nom de la série"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="seriesCode"
									name="seriesCode"
									label="Code de la série"
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

export default UpdateSeries;
