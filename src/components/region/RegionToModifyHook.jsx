import React from "react";
import { useQuery, useMutation } from '@apollo/react-hooks'
import Link from "next/link";
import { Formik, Form } from 'formik';
import styled from "styled-components";
import DeleteRegion from './DeleteRegion'
import Error from "../ErrorMessage";
import useForm from '../utils/useForm'
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import { MinimStyledPage } from "../styles/StyledPage";
import { removeTypename } from '../queries&Mutations&Functions/Functions'
import { deleteRegionMutation } from '../queries&Mutations&Functions/Mutations'
import { StyledForm, SygefexSelect, ButtonStyled, StyledButton } from '../utils/FormInputs'



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
a{text-decoration:none;}
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap:1rem;
margin:0 auto;
padding-left:1rem;
align-items:center;
justify-content:center;

`;

const RegionToModifyHook = () => {
  const [state, setState, handleReactSelectChange] = useForm({ regionID: "" });

  const handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };


  const { data: dataRegions, loading, error: errorReg } = useQuery(getAllRegionsQuery)
  
  const getRegions = dataRegions && dataRegions.regions
  const { region } = { ...getRegions }
  console.log(getRegions);
  const getRegionsOptions = getRegions && getRegions.map((item) => ({
    value: item.id, label: item.regName
  }))
  state.regionID && console.log(state.regionID);

  const [deleteRegion] = useMutation(deleteRegionMutation, {
    variables: { id: state.regionID },
  })

  return (
    <Formik method="POST">
      {({ values, isSubmitting }) => (
        <MinimStyledPage>
          <h4>Correction Info Region</h4>
          <Error error={errorReg} />
          <StyledForm disabled={isSubmitting  || loading} aria-busy={isSubmitting  || loading} >
            <Form>
              <AllControls>
                <TwoGroups>

                  <InputGroup>
                    <SygefexSelect name="regionID" onChange={handleReactSelectChange} options={getRegionsOptions} placeholder={"La région"} />
                  </InputGroup>
                  <Buttons>
                    <ButtonStyled>
                      <DeleteRegion id={state.regionID}>Supprimer</DeleteRegion>
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
        </MinimStyledPage >
      )
      }
    </Formik>

  );
};

export default RegionToModifyHook;










