
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'
import { MinimStyledPage } from '../styles/StyledPage'

const StyledForm = styled.div`
display: flex;
flex-direction:column;
border-radius: 2rem;
border-color: 1rem solid ${props => props.theme.googleBlue};
background:  ${(props) => props.theme.pureWhite};
  input,
  textarea,
  select, .Field {
      width: 80%;
    padding: 1rem;
    font-size: 1.5rem;
    border-style: none;
    border-bottom: 0.1rem solid ${(props) => props.theme.black};
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }}
  `;

const ButtonStyled = styled.div`
padding-top: 2rem;
padding-bottom: 2rem;
color:  ${props => props.theme.pureWhite};
margin: 0 3rem;
button{
    border-radius:0.5rem;
    font-size:3rem;
    background: ${props => props.theme.googleBlue};
    cursor:pointer;
      outline: 0;
     }
`

const AllControls = styled.div`

margin: 0 3rem;


}
`
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password')], 'Password does not match')
});


class TrialForm extends Component {
    defaultFormState = {
        email: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    handleSubmit = (form) => {
        register(form);
    }
    render() {
        return (
            <Formik
                initialValues={this.defaultFormState}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ handleSubmit, errors }) => (
                    <MinimStyledPage>
                        <StyledForm>
                            <h4>Trial Form</h4>
                            <Form>
                                <AllControls>
                                    <Field name="colors" as="select" className="my-select">
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                    <Field placeholder="First Name" name="firstName" type="text" />
                                    <ErrorMessage name="firstName" component="div" />
                                    <Field placeholder="Last Name" name="lastName" type="text" />
                                    <ErrorMessage name="lastName" component="div" />
                                    <Field placeholder="Email" name="email" type="email" />
                                    <ErrorMessage name="email" component="div" />
                                    <Field placeholder="Password" name="password" type="password" />
                                    <ErrorMessage name="password" component="div" />
                                    <Field placeholder="Confirm Password" name="confirmPassword" type="confirmPassword" />
                                    <ErrorMessage name="confirmPassword" component="div" />
                                </AllControls>

                                <ButtonStyled>

                                    <button type="submit">Submit</button>
                                </ButtonStyled>
                            </Form>
                        </StyledForm>
                    </MinimStyledPage>
                )}
            </Formik>
        )
    }
}



export default TrialForm;