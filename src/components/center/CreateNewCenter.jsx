
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import { Formik, Form } from 'formik';
import Select from 'react-select'
import { customStyle, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../formikForms/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, getObjectFromID, uniqueCodeGen, removeTypename } from "../queries&Mutations&Functions/Functions";

import {
    getAllCountrysQuery,
    getAllRegionsOfACountryQuery,
    getDivisionsOfARegionQuery,
    getSubDivisionsOfADivisionQuery,
    getTownsOfASubDivisionQuery
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
    display: flex;
    flex-direction:column;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
min-width:15rem;

`;

const validationSchema = Yup
    .object()
    .shape({
        centerName: Yup
            .string()
            .required("Nom du centre obligatoire"),
        centerCode: Yup
            .string()
            .required("Code du centre obligatoire"),
        centerNumber: Yup
            .number()
            .required("Numero du centre obligatoire"),
        region: Yup
            .string()
            .required("Choix d'une Région obligtoire"),
        division: Yup
            .string()
            .required("Choix d'un Département obligtoire"),
        subDivision: Yup
            .string()
            .required("Choix de l'arrondissement obligtoire"),
        town: Yup
            .string()
            .required("Choix de la ville obligtoire")
    });

class CreateNewCenter extends Component {

    initialValues = {
        centerName: "",
        centerCode: "",
        centerNumber: "",
        town: "",
        division: "",
        subDivision: "",
        region: "",
    };

    state = { region: "", division: "", subDivision: "" };

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: val });
    };


    render() {
        const { regionID, divisionID, subDivisionID } = this.state;

        this.initialValues.regionID = regionID;
        this.initialValues.divisionID = divisionID;
        this.initialValues.subDivisionID = subDivisionID;

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
                    const newCountry = removeTypename(countries)
                    console.log(newCountry);

                    return (

                        <Query
                            query={getAllRegionsOfACountryQuery}
                            variables={newCountry}

                        >

                            {({ data, loading, error, load }) => {
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
                                const getRegion = refinedRegions && refinedRegions.map((item) => (
                                    { ...item, value: item.id, label: item.regName }
                                ))
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
                                            const getDivision = refinedDivision && refinedDivision.map((item) => (
                                                { ...item, value: item.id, label: item.divName }
                                            ))
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
                                                        const refinedSubDiv =
                                                            subDivision && removeTypename(subDivision);
                                                        console.log(refinedSubDiv)
                                                        const getSubDivision = refinedSubDiv && refinedSubDivision.map((item) => (
                                                            { ...item, value: item.id, label: item.subDivName }
                                                        ))
                                                        return (
                                                            <Query
                                                                query={getTownsOfASubDivisionQuery}
                                                                variables={refinedSubDiv && getSelectedObject(refinedSubDiv, subDivisionID)}
                                                            >
                                                                {({ data, loading, error }) => {
                                                                    {
                                                                        loading && <p>Loading...</p>;
                                                                    }
                                                                    {
                                                                        error && <Error>error={error}</Error>;
                                                                    }

                                                                    const village = data.subDivision;

                                                                    const allTowns = { ...village };

                                                                    const { town } = allTowns;
                                                                    const refinedTown = town && removeTypename(town);
                                                                    const getTown = refinedTown && refinedTown.map((item) => (
                                                                        { ...item, value: item.id, label: item.townName }
                                                                    ))
                                                                    return (

                                                                        <Mutation
                                                                            mutation={createCenterMutation}
                                                                        >
                                                                            {(createCenter, { loading, error }) => (
                                                                                <Formik
                                                                                    method="POST"
                                                                                    initialValues={this.initialValues}
                                                                                    validationSchema={validationSchema}
                                                                                    onSubmit={async (values, actions, setSubmitting, resetForm) => {
                                                                                        const res = await createCenter({
                                                                                            variables:
                                                                                            {
                                                                                                ...values,
                                                                                                centerSecretCode: uniqueCodeGen(18),
                                                                                                town: getObjectFromID(values.town.id)
                                                                                            }
                                                                                        });
                                                                                        setTimeout(() => {
                                                                                            console.log(JSON.stringify(values, null, 2));
                                                                                            console.log(res);
                                                                                            actions.setSubmitting(false);
                                                                                            actions.resetForm(true);
                                                                                        }, 200);
                                                                                    }}>

                                                                                    {({ values, setFieldValue }) => {
                                                                                        return (
                                                                                            <MinimStyledPage>
                                                                                                <h4>Nouveau Centre</h4>
                                                                                                <Error error={error} />
                                                                                                <StyledForm disabled={loading} aria-busy={loading} >
                                                                                                    <Form>
                                                                                                        <AllControls>
                                                                                                            <InputGroup>

                                                                                                                <Select onChange={(value) => (setFieldValue('region', value))} name="region" styles={customStyle} options={getRegion} />
                                                                                                                <Select onChange={(value) => (setFieldValue('division', value))} name="division" styles={customStyle} options={getDivision} />
                                                                                                                <Select onChange={(value) => (setFieldValue('subDivision', value))} name="subDivision" styles={customStyle} options={getSubDivision} />
                                                                                                                <Select name="town" onChange={(value) => (setFieldValue('town', value))} styles={customStyle} options={getTown} />
                                                                                                                <SygexInput name="centerName" type="text" label="Nom du centre" />
                                                                                                                <SygexInput name="centerCode" type="text" label="Code du centre" />
                                                                                                                <SygexInput name="centerNumber" type="number" label="Numero du centre" />

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
            </Query >

        );
    }
}
export default CreateNewCenter;