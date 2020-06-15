
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Link from 'next/link'
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik';
import { SygefexSelect,SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import { getObjectFromID, uniqueCodeGen } from "../queries&Mutations&Functions/Functions";

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
    min-width:13rem;
    margin:0 1rem;
   
`;

const Buttons = styled.div`

display: grid;
grid-template-columns:1fr;
grid-auto-flow:column;
grid-gap:2rem;
margin:0 auto;

`;

const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;

const validationSchema = Yup
    .object()
    .shape({
        centerName: Yup
            .string()
            .required("Choix de la matière Obligatoire"),
        centerCode: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
        centerNumber: Yup
            .number()
            .min(1, "Numéro du centre doit etre Positif")
            .required("Choix de la Séries Obligatoire"),
    });

const TownToModifyHook = () => {
    const initialValues = {
        centerName: "",
        centerCode: "",
        town: ""
    }
    const [state, setState, handleReactSelectChange] = useForm({ regionID: "", divisionID: "", subDivisionID: "", townID: "" })
    const handleChange = (e) => {
        const { name, value } = e.target
        setState({ [name]: value })
    }
    const { data, loading: loadingCount, error: errorCount } = useQuery(getAllCountrysQuery)
    { loadingCount && <p>Loading Countries from DB...</p> }
    { errorCount && <Error error={errorCount} /> }
    const { countries } = { ...data }
    console.log(countries);
    const reducedCountries = countries && countries.reduce((item) => item)
    console.log(reducedCountries);
    const { id } = { ...reducedCountries }
    console.log(id);


    const { data: dataCountry, loading: loadingCountry, error: errCountry } = useQuery(getAllRegionsOfACountryQuery, {
        variables: { id: id }
    })
    { loadingCountry && <p>loading...</p>; }
    { errCountry && <Error error={errCountry} />; }
    console.log(dataCountry);
    const getCountry = dataCountry && dataCountry.country;
    console.log(getCountry);
    const { region } = { ...getCountry }
    const getRegionsOptions =
        region &&
        region.map(item => ({ value: item.id, label: item.regName }));
    console.log(state.regionID);

    const { data: dataRegion, loading: loadingRegion, error: errRegion } = useQuery(getDivisionsOfARegionQuery, {
        skip: !state.regionID,
        variables: { id: state.regionID }
    })
    { loadingRegion && <p>loading...</p>; }
    { errRegion && <Error error={errRegion} />; }
    console.log(dataRegion);
    const getRegion = dataRegion && dataRegion.region
    const { division } = { ...getRegion }
    console.log(division);
    const getDivOptions = division && division.map(item => ({ value: item.id, label: item.divName }))

    console.log(state.divisionID);

    const { data: dataDivision, loading: loadingDivision, error: errDivision } = useQuery(getSubDivisionsOfADivisionQuery, {
        skip: !state.divisionID,
        variables: { id: state.divisionID }
    })
    { loadingDivision && <p>loading...</p>; }
    { errDivision && <Error error={errDivision} />; }
    console.log(dataDivision);
    const getDivision = dataDivision && dataDivision.division
    const { subDivision } = { ...getDivision }
    console.log(subDivision);
    const getSubDivOptions = subDivision && subDivision.map(item => ({ value: item.id, label: item.subDivName }))

    const { data: dataSubDivision, loading: loadingSubDivision, error: errSubDivision } = useQuery(getTownsOfASubDivisionQuery, {
        skip: !state.subDivID,
        variables: { id: state.subDivID }
    })
    { loadingSubDivision && <p>loading...</p>; }
    { errSubDivision && <Error error={errSubDivision} />; }
    console.log(dataSubDivision);
    const getSubDivision = dataSubDivision && dataSubDivision.subDivision
    const { town } = { ...getSubDivision }
    console.log(town);
    const getTownOptions = town && town.map(item => ({ value: item.id, label: item.townName }))

    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {({ isSubmitting }) => {
                return (

                    <MinimStyledPage>
                        <h4>Correction Info Ville</h4>
                        <Error error={errSubDivision} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygefexSelect onChange={handleReactSelectChange} name="regionID"  placeholder="La Région" options={getRegionsOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="divisionID"  placeholder="Le Département" options={getDivOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="subDivID"  placeholder="L'Arrondissement" options={getSubDivOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="townID"  placeholder="La Ville" options={getTownOptions} disabled={isSubmitting} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>
                                            <StyledButton type="submit" id={id}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateTown",
                                                    query: state.townID && { id: state.townID },
                                                }}>
                                                    <a target="_blank">Modifier</a>
                                                </Link>
                                            </StyledButton>
                                        </ButtonStyled>

                                    </Buttons>


                                </AllControls>
                            </Form>
                        </StyledForm>
                    </MinimStyledPage>
                )
            }}
        </Formik>

    );
}
export default TownToModifyHook;