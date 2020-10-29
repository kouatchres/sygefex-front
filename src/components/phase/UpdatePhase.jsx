import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updatePhaseMutation } from '../queries&Mutations&Functions/Mutations';
import { singlePhaseQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdatePhaseHooks = ({ id }) => {
	const [state, setState] = useForm({ phaseCode: '', phaseName: '' })
	const client = useApolloClient()


	const loadPhaseData = async () => {
		const { data } = await client.query({
			query: singlePhaseQuery,
			variables: { id }

		})
		const getPhaseData = data.phase
		console.log(getPhaseData)
		const {
			phaseName,
			phaseCode,
		} = getPhaseData

		setState({ phaseCode: phaseCode, phaseName: phaseName })
	}
	useEffect(() => {
		loadPhaseData()
	}, [])


	const validationSchema = Yup.object().shape({
		phaseName: Yup.string().required("Libellé de la phase de l'examen obligatoire"),
		phaseCode: Yup.string().required("Code de la phase de l'examen obligatoire"),
	})
	const [updatePhase] = useMutation(updatePhaseMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updatePhase({
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
					<h4>Modification d'info de phase d'examen</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="phaseName"
									name="phaseName"
									label="Libellé de la phase"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="phaseCode"
									name="phaseCode"
									label="Code de la phase"
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

export default UpdatePhaseHooks;
