import React, { Component } from 'react';
import { MinimStyledPage } from '../styles/StyledPage'
import { Formik, Form } from 'formik';
import {
    SygexInput, SygexSelect,
    StyledForm, ButtonStyled
} from './FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
`;


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    firstName: Yup.string()
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    jobType: Yup.string()
        .required('Required'),
});

class BestFormikForm extends Component {
    defaultFormState = {
        email: '',
        firstName: '',
        lastName: '',
        jobType: ''
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
                <MinimStyledPage>
                    <h4>Formik Form Trials</h4>
                    <StyledForm>
                        <Form>
                            <AllControls>
                                <InputGroup>
                                    <SygexInput
                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <SygexInput
                                        label="Last Name"
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    <SygexInput
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <SygexSelect label="Job Type" name="jobType">
                                        <option value="">Select a job type</option>
                                        <option value="designer">Designer</option>
                                        <option value="development">Developer</option>
                                        <option value="product">Product Manager</option>
                                        <option value="other">Front-End</option>
                                        <option value="other">Back-End</option>
                                        <option value="other">Dev-Opps</option>
                                    </SygexSelect>
                                </InputGroup>


                                <ButtonStyled>
                                    <button type="submit">Submit</button>
                                </ButtonStyled>
                            </AllControls>
                        </Form>
                    </StyledForm>
                </MinimStyledPage>
            </Formik>
        );
    }
}
export default BestFormikForm;