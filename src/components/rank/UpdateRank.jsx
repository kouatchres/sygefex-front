import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { updateRankMutation } from '../queries&Mutations&Functions/Mutations';
import { singleRankQuery } from '../queries&Mutations&Functions/Queries';
import useForm from '../utils/useForm';

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateGenderHooks = ({ id }) => {
	const [state, setState] = useForm({ rankCode: '', rankName: '' })
	const client = useApolloClient()


	const loadRankData = async () => {
		const { data } = await client.query({
			query: singleRankQuery,
			variables: { id }

		})
		const getRankData = data.rank
		console.log(getRankData)
		const {
			rankName,
			rankCode,
		} = getRankData

		setState({ rankCode: rankCode, rankName: rankName })
	}
	useEffect(() => {
		loadRankData()
	}, [])


	const validationSchema = Yup.object().shape({
		rankName: Yup.string().required("Nom du sexe obligatoire"),
		rankCode: Yup.string().required("Code du sexe  obligatoire"),
	})
	const [updateRank] = useMutation(updateRankMutation, {
		variables: { id }
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateRank({
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
					<h4>Modification d'info poste d'examinateur</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="rankName"
									name="rankName"
									label="Nom du poste"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="rankCode"
									name="rankCode"
									label="Code du poste"
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
