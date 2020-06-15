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
import { getAllRegionsOfACountryQuery, getAllCountrysQuery } from "../queries&Mutations&Functions/Queries";
import { removeTypename } from '../queries&Mutations&Functions/Functions'



const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
    min-width:12rem;
   
`;

const TwoGroups = styled.div`
    
    display: flex;
   flex-direction:column;
  
`;

const AllControls = styled.div`
  display: flex;
flex-direction:column;
min-width:15rem;

`;


const Buttons = styled.div`

display: grid;
grid-template-columns:1fr;
grid-auto-flow:column;
grid-gap:2rem;
margin:0 auto;

`;

const RegionToModifyHook = () => {
  const [state, setState, handleReactSelectChange] = useForm({ regionID: "" });

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
  return (
    <Formik method="POST"    >
      {({ values, isSubmitting }) => (
        <MinimStyledPage>
          <h4>Correction Info Region</h4>
          <Error error={errorReg} />
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
            <Form>
              <AllControls>
                <TwoGroups>

                  <InputGroup>
                    <SygefexSelect name="regionID" onChange={handleReactSelectChange} options={getRegionsOptions} placeholder={"La Region"} />
                  </InputGroup>
                  <Buttons>
                    <ButtonStyled>

                      <StyledButton type="submit" id={id}>Supprimer</StyledButton>
                    </ButtonStyled>
                    <ButtonStyled>
                      <StyledButton type="submit">
                        <Link href={{
                          pathname: "../updates/updateRegion",
                          query: state.regionID && { id: state.regionID },

                        }}>
                          <a target="_blank">Modifier</a>
                        </Link>
                      </StyledButton>
                    </ButtonStyled>

                  </Buttons>
                </TwoGroups>
              </AllControls>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )
      }
    </Formik>

  );
};

export default RegionToModifyHook;










