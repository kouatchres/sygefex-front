import React from 'react';
import { MinimStyledPage } from '../styles/StyledPage';
import Link from 'next/link';
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik'
import Error from '../ErrorMessage';
import { SygefexSelect, StyledForm, StyledButton, ButtonStyled } from '../utils/FormInputs'
import styled from 'styled-components';
import DeleteRegion from '../region/DeleteRegion';
import { getAllSubjectsQuery } from '../queries&Mutations&Functions/Queries';
import { useQuery } from '@apollo/react-hooks';


const StyledDivision = styled.div`
 display:flex;
flex-direction:column;
	text-align: center;
	margin: 0 auto;
`;

const Buttons = styled.div`
  display: grid;
  align-items:center;
  grid-template-columns: 1fr 1fr;
  grid-gap:1rem;
 
`;
const SelectSubjectToModify = () => {

	const [state, setState, handleReactSelectChange] = useForm({ subjectID: "" });


	const { subjectID } = state;
	const { data, loading, error } = useQuery(getAllSubjectsQuery)

	{ loading && <p>Loading...</p>; }
	{ error && <Error error={error} />; }

	const getSubjects = data && data.subjects
	console.log(getSubjects)
	const subjectsOptions = getSubjects && getSubjects.map((item) => (
		{ value: item.id, label: item.subjectName }
	));

	return (
		<Formik method="POST">
			{({ isSubmitting, values }) => (

				<MinimStyledPage>
					<h4>Correction Info matière</h4>
					<Error error={error} />
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
						<Form
							onSubmit={async (e) => {
								e.preventDefault();
								const res = await updateSubject();
								console.log(res);
							}}
						>
							<StyledDivision>
								<SygefexSelect
									id="subjectID"
									name="subjectID"
									options={subjectsOptions}
									onChange={handleReactSelectChange}
									placeholder="Choix de la matière"
								/>
								<Buttons>
									<ButtonStyled>
										<DeleteRegion id={state.id}>Supprimer</DeleteRegion>
									</ButtonStyled>
									<ButtonStyled>
										<StyledButton>
											<Link href={{ pathname: '../updates/updateSubject', query: { id: subjectID } }}>
												<a target="_blank" >Modifier</a>
											</Link>
										</StyledButton>
									</ButtonStyled>
								</Buttons>
							</StyledDivision>
						</Form>
					</StyledForm>
				</MinimStyledPage>
			)
			}
		</Formik >
	);
};

export default SelectSubjectToModify;
