
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import { customStyle, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createTownMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject, removeTypename } from '../queries&Mutations&Functions/Functions';
import {
    getAllCountrysQuery,
    getAllRegionsOfACountryQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery
} from '../queries&Mutations&Functions/Queries';

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
        townName: Yup
            .string()
            .required("Nom de l'arrondissement obligatoire"),
        townCode: Yup
            .string()
            .required("Code de l'arrondissement obligatoire"),
        regionID: Yup
            .string()
            .required("Choix d'une Région obligtoire"),
        // countryID: Yup
        //     .string()
        //     .required("Choix d'une Région obligtoire"),
        divisionID: Yup
            .string()
            .required("Choix d'un Département obligtoire"),
        subDivisionID: Yup
            .string()
            .required("Choix d'un Département obligtoire")
    });

class CreateNewTown extends Component {

    initialValues = {
        townName: '',
        townCode: '',
        regionID: "",
        divisionID: "",
        subDivisionID: "",
        countryID: ""

    };

    state = { countryID: "", regionID: "", divisionID: "" };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: val });
    };


    render() {
        const { countryID, regionID, divisionID } = this.state;

        this.initialValues.regionID = regionID;
        this.initialValues.divisionID = divisionID;
        this.initialValues.countryID = countryID;

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
                    console.log(countries);
                    { !countries ? null : newCountry = countires[0] }
                    /* const newCountry = countries && countries[0] */
                    const newCountry = removeTypename(newCountry)
                    return (

                        <Query query={getAllRegionsOfACountryQuery} variables={newCountry && newCountry} >
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
                                const regionOptions = refinedRegions && refinedRegions.map((item) => ({ value: item.id, label: item.regName }))

                                return (
                                    <Query query={getDivisionsOfARegionQuery}
                                        variables={region
                                            && getSelectedObject(refinedRegions, regionID)}
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
                                                refinedDivision.map(item => ({ value: item.id, label: item.divName }));

                                            return (
                                                <Query
                                                    query={getSubDivisionsOfADivisionQuery}
                                                    variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}
                                                >
                                                    {({ data, loading, error }) => {
                                                        {
                                                            loading && <p>Loading...</p>;
                                                        }
                                                        {
                                                            error && <Error error={error} />;
                                                        }
                                                        const { division: departement } = data;

                                                        const allSubDivs = { ...departement };
                                                        const { subDivision } = allSubDivs;
                                                        console.log(subDivision);
                                                        const refinedSubDiv = subDivision && removeTypename(subDivision);
                                                        console.log(refinedSubDiv)

                                                        const subDivisionsOptions =
                                                            subDivision &&
                                                            subDivision.map((item) => ({ value: item.id, label: item.subDivName }))

                                                        return (

                                                            <Mutation mutation={createTownMutation}>
                                                                {(createTown, { loading, error }) => (
                                                                    <Formik
                                                                        method="POST"
                                                                        initialValues={this.initialValues}
                                                                        validationSchema={validationSchema}
                                                                        onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                            const res = await createTown({
                                                                                variables:
                                                                                {
                                                                                    ...values,
                                                                                    subDiv: refinedSubDiv && getSelectedObject(refinedSubDiv, values.subDivisionID)
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
                                                                            <h4>Crée Nouvelle Ville</h4>
                                                                            <Error error={error} />
                                                                            <StyledForm disabled={loading} aria-busy={loading} >
                                                                                <Form>
                                                                                    <AllControls>
                                                                                        <InputGroup>

                                                                                            <Select onChange={(value) => (setFieldValue('region', value))} name="regionID" placeholder={"La Région"} styles={customStyle} />
                                                                                            <Select onChange={(value) => (setFieldValue('division', value))} name="divisionID" placeholder={"Le département"} styles={customStyle} />
                                                                                            <Select onChange={(value) => (setFieldValue('subDivision', value))} name="subDivisionID" placeholder={"L'Arrondissement"} styles={customStyle} />
                                                                                            <SygexInput name="townName" type="text" label="Nom de la Ville" />
                                                                                            <SygexInput name="townCode" type="text" label="Code de la Ville" />

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
                    )
                }
                }
            </Query>

        );
    }
}
export default CreateNewTown;