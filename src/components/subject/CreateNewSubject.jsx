
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import { customStyle, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { getAllSubjectTypesQuery, getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import { createNewSubjectMutation } from "../queries&Mutations&Functions/Mutations";
import { getObjectFromID, removeTypename } from "../queries&Mutations&Functions/Functions";

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
    subjectName: Yup
      .string()
      .required('Libéllé de la matière obligatoire'),
    subjectCode: Yup
      .string()
      .required('Code de la matière obligatoire'),
    educType: Yup.string().required("Choix d'un type d'enseignement obligatiore"),
    subjectType: Yup
      .string()
      .required("Choix d'un type de matière obligatiore")
  });

class CreateNewSubject extends Component {
  initialFormState = {
    subjectName: '',
    subjectCode: '',
    educType: "",
    subjectType: "",

  }


  render() {
    return (
      <Query query={getAllEducationTypesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }

          const { educationTypes } = data;
          const refinedEducTypes =
            educationTypes && removeTypename(educationTypes);
          const getEducTypes =
            refinedEducTypes &&
            refinedEducTypes.map((item) => ({ ...item, value: item.id, label: item.educationTypeName }));


          //*******important function'stripping off __typename')

          return (
            <Query query={getAllSubjectTypesQuery}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                const { subjectTypes } = data;
                const refinedSubjectType = subjectTypes && removeTypename(subjectTypes);
                console.log(refinedSubjectType);
                const getSubjectTypes =
                  refinedSubjectType &&
                  refinedSubjectType.map(item => ({ ...item, value: item.id, label: item.subjectTypeName }));
                return (
                  <Mutation mutation={createNewSubjectMutation}>
                    {(createSubject, { loading, error }) => (
                      <Formik
                        method="POST"
                        initialValues={this.initialFormState}
                        validationSchema={validationSchema}
                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                          const res = await createSubject({
                            variables:
                            {
                              ...values,
                              subjectType: refinedSubjectType && getObjectFromID(values.subjectType.id),
                              educType: refinedEducTypes && getObjectFromID(values.educType.id),
                            }
                          });
                          setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            console.log(res);
                            actions.setSubmitting(false);
                            actions.resetForm(true);
                          }, 400);
                        }}>
                        {({ values, setFieldValue }) => {

                          return (

                            <MinimStyledPage>
                              <h4>Nouvelle Matière</h4>
                              <Error error={error} />
                              <StyledForm disabled={loading} aria-busy={loading} >
                                <Form>
                                  <AllControls>
                                    <InputGroup>

                                      <Select name="educType" onChange={(value) => (setFieldValue('educType', value))} options={getEducTypes} placeholder={"Le Type d'Enseignement"} styles={customStyle} />
                                      <Select name="subjectType" onChange={(value) => (setFieldValue('subjectType', value))} options={getSubjectTypes} placeholder={"Le Type de Matière"} styles={customStyle} />

                                      <SygexInput name="subjectName" type="text" label="Libéllé de la Matière" />
                                      <SygexInput name="subjectCode" type="text" label="Code de la Matière" />

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
export default CreateNewSubject;