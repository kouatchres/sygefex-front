import React, { Component } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { MinimStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import useForm from '../utils/useForm'
import { updateDivisionMutation } from '../queries&Mutations&Functions/Mutations';
import { singleDivisionQuery } from '../queries&Mutations&Functions/Queries';
import { StyledForm, SygexInput, customStyle, StyledButton, ButtonStyled } from '../utils/FormInputs'

const UpdateDivision = (props) => {

	const [state, setState] = useForm({ diviName: "", divCode: "" })

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		setState({ [name]: val });
	};

	const updateItemMutation = async (e, updateMutation) => {
		e.preventDefault();
		console.log('Updating Division!!');
		const res = await updateMutation({
			variables: {
				id: props.id,
				...state
			}
		});
		console.log('Division Updated!!');
	};

	const { data: dataDivision, loading: loadingDiv, error: errDiv } = useQuery(singleDivisionQuery, {
		skip: !props.id,
		variables: { id: props.id }
	})
	{ loadingDiv && <p>LoadingDiv...</p>; }
	{ errDiv && <Error error={errDiv} />; }

	console.log(dataDivision);
	const getDivision = dataDivision && dataDivision.division;
	const { divName, divCode } = { ...getDivision };
	console.log(getDivision);

	return (
		<Formik method="POST" >
			{({ values, isSubmitting }) => (
				<MinimStyledPage>
					<h4>Correction info département</h4>
					<Error error={errDiv} />
					<StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
						<Form >
							<SygexInput
								type="text"
								id="divName"
								name="divName"
								placeholder="Nom du Département"
								defaultValue={divName}
								onChange={handleChange}
								required
							/>
							<SygexInput
								type="text"
								id="divCode"
								name="divCode"
								placeholder="Code du Département"
								defaultValue={divCode}
								onChange={handleChange}
								required
							/>
							<ButtonStyled>
								<StyledButton type="submit">
									Valid{isSubmitting ? 'ation en cours' : 'er'}
								</StyledButton>
							</ButtonStyled>
						</Form>
					</StyledForm>
				</MinimStyledPage>
			)}
		</Formik>

	);
}

export default UpdateDivision;
