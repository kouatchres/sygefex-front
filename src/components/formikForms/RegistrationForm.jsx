
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'
import { MinimStyledPage } from '../styles/StyledPage'

const StyledForm = styled.div`
display: flex;
flex-direction:column;
font-size:2.5rem;
margin : 0 2rem;
border-radius: 2rem;
border-color: ${props => props.theme.googleBlue};
background:  ${(props) => props.theme.pureWhite};
  input,
  textarea,
  select, .Field {
    padding: 1rem;
    font-size: 1.5rem;
    border-style: none;
    border-bottom: 0.1rem solid ${(props) => props.theme.black};
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }}
  `;


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
  confirmPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Password does not match')
});


class RegistrationForm extends Component {
  defaultFormState = {
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

              <Form
                onSubmit={handleSubmit}
              >
                <Field
                  name="region"
                  type="select"
                  placeholder="Email"
                  as="select"
                >
                  <option value="">Choose a region</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
                <ErrorMessage
                  name="region"
                  component="div"
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"

                />
                <ErrorMessage
                  name="email"
                  component="div"
                />

                <Field
                  name="password"
                  type="password"
                  placeholder="Password"

                />
                <ErrorMessage
                  name="password"
                  component="div"
                />
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"

                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                />

              </Form>
            </StyledForm>
          </MinimStyledPage>
        )}
      </Formik >
    )
  }
}



export default RegistrationForm;