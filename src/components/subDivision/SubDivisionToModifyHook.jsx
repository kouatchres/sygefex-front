
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import useForm from '../utils/useForm'
import { Formik, Form } from 'formik';
import Link from 'next/link'
import { SygexInput, StyledForm, ButtonStyled, StyledButton, SygefexSelect } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import { createTownMutation } from '../queries&Mutations&Functions/Mutations'
import { removeTypename, getObjectFromID } from '../queries&Mutations&Functions/Functions'
import {
    getAllCountrysQuery,
    getDivisionsOfARegionQuery,
    getAllRegionsOfACountryQuery,
    getSubDivisionsOfADivisionQuery
} from '../queries&Mutations&Functions/Queries'

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;


const Buttons = styled.div`

display: grid;
grid-template-columns:1fr;
grid-auto-flow:column;
grid-gap:2rem;
margin:0 auto;

`;
const validationSchema = Yup
    .object()
    .shape({
        subDiv: Yup
            .string()
            .required("Choix Du type d'Enseignement Obligatoire"),
        townName: Yup
            .string()
            .required("Choix de la matière Obligatoire"),
        townCode: Yup
            .string()
            .required("Choix de la Séries Obligatoire"),
    });

const SubDivisionToModifyHook = () => {
    const initialValues = {
        townName: "",
        townCode: "",
        subDiv: ""
    }
    const [state, setState, handleReactSelectChange] = useForm({ regionID: "", divisionID: "", subDivisionID: "" })

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

    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            {({ values, setFieldValue, isSubmitting }) => {
                return (
                    <MinimStyledPage>
                        <h4>Modification d'un Arrondissement</h4>
                        <Error error={errDivision} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygefexSelect onChange={handleReactSelectChange} name="regionID" placeholder={"La Région"} options={getRegionsOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="divisionID" placeholder={"Le Département"} options={getDivOptions} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="subDivisionID" placeholder="L'Arrondissement" options={getSubDivOptions} disabled={isSubmitting} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>
                                            <StyledButton type="submit" id={id}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateSubDivision",
                                                    query: state.subDivisionID && { id: state.subDivisionID },
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
export default SubDivisionToModifyHook;