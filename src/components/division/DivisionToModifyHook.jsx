import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import { useQuery } from '@apollo/react-hooks'
import Link from "next/link";
import { StyledForm, SygefexSelect, ButtonStyled, StyledButton } from '../utils/FormInputs'
import Error from "../ErrorMessage";
import { Formik, Form } from 'formik';
import styled from "styled-components";
import useForm from '../utils/useForm'
import DeleteRegion from "../region/DeleteRegion";
import { getAllRegionsOfACountryQuery, getAllCountrysQuery, getDivisionsOfARegionQuery } from "../queries&Mutations&Functions/Queries";
import { removeTypename } from '../queries&Mutations&Functions/Functions'



const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
    min-width:12rem;
   
`;
const Buttons = styled.div`

display: grid;
grid-template-columns:1fr;
grid-auto-flow:column;
grid-gap:1rem;
margin:0 auto;

`;
const TwoGroups = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 auto;
    min-width:12rem;
 
`;


const DivisionToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ divisionID: "", regionID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data, loading: loadingCount, error: errorCount } = useQuery(getAllCountrysQuery)
    { loadingCount && <p>Loading Countries from DB...</p> }
    { errorCount && <Error error={errorCount} /> }
    const { countries } = { ...data }
    console.log(countries);
    const reducedCountries = countries && countries.reduce((item) => item)
    const refinedCountry = removeTypename(reducedCountries)
    console.log(refinedCountry);
    const { id } = { ...refinedCountry }
    console.log(id);



    const { data: dataRegions, loading: loadingReg, error: errorReg } = useQuery(getAllRegionsOfACountryQuery, {
        skip: !id,
        variables: { id }
    })
    { loadingReg && <p>Loading regions from DB...</p> }
    { errorReg && <Error error={errorReg} /> }
    const getCountry = dataRegions && dataRegions.country
    const { region } = { ...getCountry }
    console.log(dataRegions);
    const getRegionsOptions = region && region.map((item) => ({
        value: item.id, label: item.regName
    }))
    state.regionID && console.log(state.regionID);

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
    const getDivisionOptions = division && division.map(item => ({ value: item.id, label: item.divName }))

    console.log(state.divisionID);




    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Département</h4>
                    <Error error={errorReg} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <TwoGroups>
                                <InputGroup>
                                    <SygefexSelect name="regionID" onChange={handleReactSelectChange} options={getRegionsOptions}  placeholder={"La Région"}  disabled={isSubmitting} />
                                    <SygefexSelect name="divisionID" onChange={handleReactSelectChange} options={getDivisionOptions}  placeholder={"La Département"}  disabled={isSubmitting} />
                                </InputGroup>
                                <Buttons>
                                    <ButtonStyled>
                                        <StyledButton type="submit" id={id}>Supprimer</StyledButton>
                                    </ButtonStyled>
                                    <ButtonStyled>
                                        <StyledButton type="submit">
                                            <Link href={{
                                                pathname: "../updates/updateDivision",
                                                query: state.divisionID && { id: state.divisionID },
                                            }}>
                                                <a target="_blank">Modifier</a>
                                            </Link>
                                        </StyledButton>
                                    </ButtonStyled>

                                </Buttons>
                            </TwoGroups>
                        </Form>
                    </StyledForm>
                </MinimStyledPage>
            )
            }
        </Formik>

    );
};

export default DivisionToModifyHook;










