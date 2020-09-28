import React, { useState, useEffect } from 'react';
import { StyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { StyledButton, StyledForm, ButtonStyled, SygefexSelect, SygexInput } from '../utils/FormInputs'
import styled from 'styled-components';
import { Formik, Form } from 'formik'
import *  as Yup from 'yup'
import useForm from '../utils/useForm'
import { updateExaminerMutation } from '../queries&Mutations&Functions/Mutations';
import { singleExaminerQuery } from '../queries&Mutations&Functions/Queries';
import { useApolloClient, useMutation } from '@apollo/react-hooks';

const ExaminerForm = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
`;
const PicFrame = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;

const ExaminerPic = styled.div`
		margin: 1rem auto;

	img {
		height: 15rem;
		width: 15rem;
		border-radius: 15px;
		background-size: contain;
		background-position: center;
	}
`;

const DataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;
const FirstDataFrame = styled.div`
	display: flex;
	flex-direction: column;
`;

const UpdateExaminer = ({id}) => {
	const client = useApolloClient()
	const [photo, setPhoto] = useState({ examinerImage: "" })
	const [state, setState] = useForm({
		examiner1stName: '',
		examiner2ndName: '',
		examinerOtherNames: '',
		examinerEmail: '',
		examinerPhone: '',
		examinerImage: '',
		examinerCNI: '',
		examinerCode: '',
		examinerMatricule: '',
		gender: "",

	})

	const uploadFileToCloud = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'ineximages');
		const res = await fetch('https://api.cloudinary.com/v1_1/inex/image/upload', {
			method: 'POST',
			body: data
		});
		const file = await res.json();
		console.log(file);
		setPhoto({ examinerImage: file.secure_url });
	};


	const validationSchema = Yup.object().shape({
		examiner1stName: Yup
			.string()
			.required("Nom obligatoire"),
		examiner2ndName: Yup
			.string()
			.required("Prénom obligatoire"),
		examinerOtherNames: Yup
			.string(),
		examinerMatricule: Yup
			.string()
			.required("No de Matricule obligatoire"),
		examinerCNI: Yup
			.string()
			.required("Numero de la CNI obligatoire"),
		examinerPhone: Yup
			.number()
			.required("Numero de portable obligatoire"),
		gender: Yup
			.string()
			.required("Choix de votre sexe obligatoire"),

	});



	const loadExaminerData = async ({id}) => {

		const { data, error } = await client.query({
			query: singleExaminerQuery,
			variables: { id }
		})
		{error && <Error error={error}/>}
		const dataExaminer = data.examiner
		const {
			examiner1stName,
			examiner2ndName,
			examinerOtherNames,
			examinerEmail,
			examinerPhone,
			examinerImage,
			examinerCNI,
			examinerCode,
			examinerMatricule,
			gender,
		} = dataExaminer
		setState({
			examiner1stName: examiner1stName,
			examiner2ndName: examiner2ndName,
			examinerOtherNames: examinerOtherNames,
			examinerEmail: examinerEmail,
			examinerPhone: examinerPhone,
			examinerImage: examinerImage,
			examinerCNI: examinerCNI,
			examinerCode: examinerCode,
			examinerMatricule: examinerMatricule,
			gender: gender,

		})
	}

	useEffect(() => {
		loadExaminerData()
	}, [])

	
	const initialValues = {
		examiner1stName: '',
		examiner2ndName: '',
		examinerOtherNames: '',
		examinerEmail: '',
		examinerPhone: '',
		examinerImage: '',
		examinerCNI: '',
		examinerCode: '',
		examinerMatricule: '',
		gender: "",

	};

	const [updateExaminer, {loading, error}] = useMutation(updateExaminerMutation, {
		variables: { id}
	})

	return (
		<Formik
			method="POST"
			initialValues={state || initialValues}
			enableReinitialize={true}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				const res = await updateExaminer({
					variables: {
						...values,
						examinerImage: photo.examinerImage,
						id
					},
				});
				Router.push({
					pathname: '/show/singleExaminer',
					query: { id }
				});
				setTimeout(() => {
					console.log(JSON.stringify(values, null, 2));
					console.log(res);
					resetForm(true);
					setSubmitting(false);
				}, 200);
			}}
		>

			{({ isSubmitting, setFieldValue }) => (

				<StyledPage>
					<h4>Correction d'Info Examinateur</h4>
					<StyledForm disabled={isSubmitting  || loading} aria-busy={isSubmitting || loading}>
					{error && <Error error={error}/>}	
					<Form>
							<ExaminerForm>
								<PicFrame>
									<SygexInput
										type="file"
										id="file"
										name="file"
										label="Your picture"
										disabled={isSubmitting}
										onChange={uploadFileToCloud}
									/>

									<FirstDataFrame>
										<SygexInput
											type="text"
											id="examiner1stName"
											name="examiner1stName"
											label="Nom"
											disabled={isSubmitting}
										/>
										<SygexInput
											type="text"
											id="examiner2ndName"
											name="examiner2ndName"
											label="Prenom"
											disabled={isSubmitting}
										/>
										<SygexInput
											type="text"
											id="examinerOtherName"
											name="examinerOtherName"
											label="Autres noms"
											disabled={isSubmitting}
										/>
									</FirstDataFrame>
									<ExaminerPic>
										<img src={photo.examinerImage ? photo.examinerImage : examinerImage} alt={examiner2ndName} />
									</ExaminerPic>
								</PicFrame>
								<DataFrame>
									<SygefexSelect
										type="select"
										id="gender"
										name="gender"
										onChange={(value) => (setFieldValue('gender', value))}
										options={getGenderOptions}
									/>

									<SygexInput
										type="email"
										id="examinerEmail"
										name="examinerEmail"
										label="Email"
										disabled={isSubmitting}
									/>
									<SygexInput
										type="number"
										id="examinerPhone"
										name="examinerPhone"
										label="No Tel"
										disabled={isSubmitting}
									/>
									<SygexInput
										type="text"
										id="examinerCode"
										name="examinerCode"
										label="Ccode examinateur"
										disabled={isSubmitting}
									/>

									<SygexInput
										type="text"
										id="examinerCNI"
										name="examinerCNI"
										label="No Acte de Naissance"
										disabled={isSubmitting}
									/>


									<SygexInput
										type="text"
										id="examinerMatricule"
										name="examinerMatricule"
										label="Noms du Père"
										disabled={isSubmitting}
									/>
									<ButtonStyled >
										<StyledButton type="submit">
											Valid{isSubmitting ? 'ation en cours' : 'er'}
										</StyledButton>
									</ButtonStyled>
								</DataFrame>
							</ExaminerForm>
						</Form>
					</StyledForm>
				</StyledPage>
			)}
		</Formik>

	);
}

export default UpdateExaminer;
