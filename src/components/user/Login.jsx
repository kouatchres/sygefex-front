import React from 'react'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { BsUnlockFill, BsEnvelope } from 'react-icons/bs';
import { useMutation } from '@apollo/react-hooks'
import { loginUserMutation } from '../queries&Mutations&Functions/Mutations'
import { meQuery } from '../queries&Mutations&Functions/Queries'

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
    .object().shape({
        email: Yup
            .string()
            .min(3, 'Email 3 characters au moins')
            .required('Email Obligatoire')
            .email('Email invalide'),

        password: Yup
            .string()
            .required('Mont de passe Obligatoire')
            .min(3, 'Mot de passe 3 characters au moins'),
    });



const Login = () => {


    const initialValues = {
        email: "",
        password: ""
    }


    const [login, { loading, error }] = useMutation(loginUserMutation, {
        refetchQueries: [{ query: meQuery }]
    })

    return (

        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await login({
                    variables: { ...values }
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 200);
            }}>
            {({ isSubmitting }) => {
                return (
                    <MinimStyledPage>
                        <h4><BsUnlockFill />Accedez a votre compte</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>

                                        <BsEnvelope /> <SygexInput name="email" type="text" label="Email" disabled={isSubmitting} />
                                        <BsUnlockFill /><SygexInput name="password" type="text" label="Mot de passe" disabled={isSubmitting} />

                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit" disabled={isSubmitting}>Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
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
export default Login