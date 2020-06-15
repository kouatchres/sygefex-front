
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import { SygexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, removeTypename } from "../queries&Mutations&Functions/Functions";
import { getAllCountrysQuery, getAllRegionsOfACountryQuery, getDivisionsOfARegionQuery } from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
    margin-bottom: 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
padding-bottom:1rem;
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

  initialValues = {
    subDivName: '',
    subDivCode: '',
    regionID: "",
    divisionID: ""

  };

  state = { regionID: "" };

  handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: val });
  };


  render() {
    const { regionID } = this.state;

    this.initialValues.regionID = regionID;

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
          !countries ? null : delete countries[0].__typename


          return (

            <Query query={getAllRegionsOfACountryQuery} variables={countries} >
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
                const regionOptions = refinedRegions && refinedRegions.map((item) => (<option value={item.id} key={item.id}>{item.regName}  </option>))

                return (
                  <Query query={getDivisionsOfARegionQuery}
                    variables={region && getSelectedObject(refinedRegions, regionID)}
                  >
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
                      const refinedDivision = division && removeTypename(division);
                      const divisionOptions =
                        refinedDivision &&
                        refinedDivision.map(item => (
                          { value: item.id, label: item.divName }))

                      return (
                        <Mutation mutation={createSubDivisionMutation}>
                          {(createSubDivision, { loading, error }) => (
                            <Formik
                              method="POST"
                              initialValues={this.initialValues}
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
                                  actions.setSubmitting(false);
                                  actions.resetForm(true);
                                }, 400);
                              }}>
                              <MinimStyledPage>
                                <h4>Crée Nouvel Arrondissement</h4>
                                <Error error={error} />
                                <StyledForm disabled={loading} aria-busy={loading} >
                                  <Form>
                                    <AllControls>
                                      <InputGroup>

                                        <SygexSelect onChange={this.handleChange} name="regionID">
                                          <option>La Region</option>
                                          {regionOptions}
                                        </SygexSelect>
                                        <SygexSelect name="divisionID">
                                          <option>Le  Departement</option>
                                          {divisionOptions}
                                        </SygexSelect>
                                        <SygexInput name="subDivName" type="text" label="Libéllé de l'arrondissement" />
                                        <SygexInput name="subDivCode" type="text" label="Code de l'arrondissement" />

                                      </InputGroup>
                                      <ButtonStyled>
                                        <StyledButton type="submit">Valid{loading ? 'ation en cours' : 'er'}</StyledButton>
                                      </ButtonStyled>
                                    </AllControls>
                                  </Form>
                                </StyledForm>
                              </MinimStyledPage>
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
          )
        }
        }
      </Query>

    );
  }
}
export default CreateNewSubDivision;