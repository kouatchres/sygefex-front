import React, { useEffect } from 'react';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import { singleEducationTypeQuery } from '../queries&Mutations&Functions/Queries';
import { updateEducationTypeMutation } from '../queries&Mutations&Functions/Mutations';
import useForm from '../utils/useForm';
import { useApolloClient, useMutation } from '@apollo/react-hooks'

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;

const UpdateEducationType = ({ id }) => {
	const [state, setState] = useForm({
		educationTypeCode: "",
		educationTypeName: "",
	})

	const client = useApolloClient()

	const loadEducTypeData = async () => {
		const { error, data } = await client.query({
			query: singleEducationTypeQuery,
			variables: { id }
		})
		const getEducType = data.educationType

		console.log(getEducType)
		const {
			educationTypeCode,
			educationTypeName,
		} = getEducType
		setState({
			educationTypeCode: educationTypeCode,
			educationTypeName: educationTypeName,
		})
	}

	useEffect(() => {
		loadEducTypeData()
	}, [])

	const initialValues = {
		educationTypeCode: "",
		educationTypeName: "",
	}

	const validationSchema = Yup.object().shape({
		educationTypeName: Yup.string().required("Nom type d'enseignement obligatoire"),
		educationTypeCode: Yup.string().required("Code type d'enseignement  obligatoire"),
	});

	const [updateEducationType] = useMutation(updateEducationTypeMutation, {
		variables: { id }
	})
	return (

		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateEducationType({
					variables: {
						...values,
						id: id
					},
				});
				// Router.push({
				// 	pathname: '/show/singleEducType',
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

				<StyledPage>
					<h4>Modification Type d'enseignement</h4>
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form>
							<Controls>
								<SygexInput
									type="text"
									id="educationTypeName"
									name="educationTypeName"
									label="Nom du type D'Enseignement"
									disabled={isSubmitting}
								/>
								<SygexInput
									type="text"
									id="educationTypeCode"
									name="educationTypeCode"
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
				</StyledPage>
			)}
		</Formik>
	);
}

export default UpdateEducationType;
