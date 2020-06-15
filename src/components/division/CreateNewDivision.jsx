
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getAllRegionsOfACountryQuery, getAllCountrysQuery } from '../queries&Mutations&Functions/Queries';
import { createDivisionMutation } from '../queries&Mutations&Functions/Mutations';
import { removeTypename, getObjectFromID } from '../queries&Mutations&Functions/Functions';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;

const validationSchema = Yup
	.object()
	.shape({
		divName: Yup
			.string()
			.required(' Nom du Département obligatoire'),
		divCode: Yup
			.string()
			.required(' Code du Département obligatoire'),
		region: Yup
			.string()
			.required("Choix d'une region obligatoire")
	});

class CreateNewDivision extends Component {
	initialValues = {
		divName: '',
		divCode: '',
		region: "",
	}


	render() {
		return (
			<Query query={getAllCountrysQuery}  >

				{({ data, loading, error }) => {
					{
						loading && <p>Loading...</p>;
					}
					{
						error && <Error error={error} />;
					}
					const { countries } = data
					const reducedCountries = countries && countries.reduce((item) => item)
					const refinedCountry = removeTypename(reducedCountries)
					console.log(refinedCountry);

					return (

						<Query query={getAllRegionsOfACountryQuery} variables={reducedCountries} >
							{({ data, loading, error }) => {
								{
									loading && <p>Loading...</p>;
								}
								{
									error && <Error error={error} />;
								}
								const { country } = data
								const { region } = { ...country }
								console.log(region);
								const refinedRegions = region && removeTypename(region)
								const getRegions = refinedRegions && refinedRegions.map((item) => (
									{ ...item, value: item.id, label: item.regName }))

								return (
									<Mutation mutation={createDivisionMutation}>
										{(createDivision, { loading, error }) => (


											<Formik
												method="POST"
												initialValues={this.initialValues}
												validationSchema={validationSchema}
												onSubmit={async (values, actions, setSubmitting, resetForm) => {
													const res = await createDivision({
														variables:
														{
															...values,
															region: refinedRegions && getObjectFromID(values.region.id)
														}
													});
													setTimeout(() => {
														console.log(JSON.stringify(values, null, 2));
														console.log(res);
														actions.resetForm(true);
														actions.setSubmitting(false);
													}, 400);
												}}>
												{({ setFieldValue, isSubmitting }) => {
													return (


														<MinimStyledPage>
															<h4>Nouveau Département</h4>
															<Error error={error} />
															<StyledForm disabled={loading} aria-busy={loading} >
																<Form>
																	<AllControls>
																		<InputGroup>

																			<SygefexSelect name="region" onChange={(value) => (setFieldValue('region', value))} options={getRegions} placeholder="la Région" disabled={isSubmitting} />
																			<SygexInput name="divName" type="text" label="Nom Département" />
																			<SygexInput name="divCode" type="text" label="Code Département" />

																		</InputGroup>
																		<ButtonStyled>
																			<StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
																		</ButtonStyled>
																	</AllControls>
																</Form>
															</StyledForm>
														</MinimStyledPage>
													)
												}}
											</Formik>
										)
										}
									</Mutation>

								)
							}
							}
						</Query>
					)
				}
				}
			</Query>

		);
	}
}
export default CreateNewDivision;