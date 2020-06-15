
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import { getAllRegionsQuery, getDivisionsOfARegionQuery } from "../queries&Mutations&Functions/Queries";

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
    subDivName: Yup
      .string()
      .required("Nom de l'arrondissement obligatoire"),
    subDivCode: Yup
      .string()
      .required("Code de l'arrondissement obligatoire"),
    regionID: Yup
      .string()
      .required("Choix d'une Région obligtoire"),
    divisionID: Yup
      .string()
      .required("Choix d'un Département obligtoire")
  });

class CreateNewSubDivision extends Component {

  initialFormState = {
    subDivName: '',
    subDivCode: '',
    divisionID: "",
    regionID: ""
  }

  state = { regionID: "" }


  render() {
    return (
      <Mutation mutation={createSubDivisionMutation}>
        {(createSubDivision, { loading, error }) => {

          return (
            <Formik
              method="POST"
              initialValues={this.initialFormState}
              validationSchema={validationSchema}
              onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createSubDivision({
                  variables:
                  {
                    ...values,
                    division: refinedDivision && getSelectedObject(refinedDivision, values.divisionID)
                  }
                });
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
                  console.log(res);
                  actions.resetForm(true);
                  actions.setSubmitting(false);
                }, 400);
              }}>
              {({ values }) => {
                return (

                  <Query query={getAllRegionsQuery} >
                    {({ data, loading, error }) => {
                      {
                        loading && <p>Loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }
                      const { regions } = data
                      const refinedRegions = regions && regions.map(({ __typename, ...others }) => others)
                      const regionOptions = refinedRegions && refinedRegions.map((item) => (<option value={item.id} key={item.id}>{item.regName}  </option>))

                      return (
                        <Query query={getDivisionsOfARegionQuery}
                          variables={refinedRegions && getSelectedObject(refinedRegions, values.regionID)}>
                          {({ data, loading, error }) => {
                            {
                              loading && <p>Loading...</p>;
                            }
                            {
                              error && <Error error={error} />;
                            }
                            console.log(refinedRegions);
                            const { region } = data;
                            const allDivs = { ...region };
                            const { division } = allDivs;
                            console.log(division);
                            const refinedDivision = division && division.map(({ __typename, divName, ...others }) => others);
                            const divisionsOptions =
                              division &&
                              division.map(item => (
                                <option value={item.id} key={item.id}>{item.divName}</option>));

                            return (

                              <MinimStyledPage >
                                <h4>Créer un Arrondissement</h4>
                                <Error error={error} />
                                <StyledForm>
                                  <Form>
                                    <AllControls>
                                      <InputGroup>

                                        <SygexSelect name="regionID" >
                                          <option>La Région</option>
                                          {regionOptions}
                                        </SygexSelect>
                                        <SygexSelect name="divisionID">
                                          <option>Le Département</option>
                                          {divisionsOptions}
                                        </SygexSelect>
                                        <SygexInput name="subDivName" type="text" placeholder="Nom Département" />
                                        <SygexInput name="subDivCode" type="text" placeholder="Code Département" />

                                      </InputGroup>
                                      <ButtonStyled>
                                        <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                      </ButtonStyled>
                                    </AllControls>
                                  </Form>
                                </StyledForm>
                              </MinimStyledPage>

                            )
                          }
                          }
                        </Query>
                      )
                    }
                    }
                  </Query>
                )
              }
              }
            </Formik>
          )
        }
        }
      </Mutation>

    );
  }
}
export default CreateNewSubDivision;