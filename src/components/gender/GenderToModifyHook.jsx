import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import { useQuery } from '@apollo/react-hooks'
import Link from "next/link";
import { StyledForm, customStyle, ButtonStyled, StyledButton } from '../utils/FormInputs'
import Error from "../ErrorMessage";
import { Formik, Form } from 'formik';
import styled from "styled-components";
import Select from 'react-select'
import useForm from '../utils/useForm'
import DeleteRegion from "../region/DeleteRegion";
import { getAllGendersQuery } from "../queries&Mutations&Functions/Queries";
import { removeTypename } from '../queries&Mutations&Functions/Functions'



const Buttons = styled.div`

display: grid;
grid-template-columns:1fr;
grid-auto-flow:column;
grid-gap:2rem;
margin:0 auto;

`;

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    margin:0 1rem;
    min-width:12rem;
   
`;

const TwoGroups = styled.div`
   display:flex;
   flex-direction:column;
  
`;

const AllControls = styled.div`
  display: flex;
flex-direction:column;
min-width:15rem;

`;



const GenderToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ genderID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataGender, loading: loadingGender, error: errorGender } = useQuery(getAllGendersQuery)
    { loadingGender && <p>Loading Gender from DB...</p> }
    { errorGender && <Error error={errorGender} /> }
    const getGender = dataGender && dataGender.genders
    const genderOptions = getGender && getGender.map((item) => (
        { value: item.id, label: item.genderName }
    ))
    console.log(getGender);

    state.genderID && console.log(state.genderID);
    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Sexe</h4>
                    <Error error={errorGender} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <Select name="genderID" onChange={handleReactSelectChange} options={genderOptions} styles={customStyle} placeholder={"Le Sexe"} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>

                                            <StyledButton type="submit" id={state.genderID}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateGender",
                                                    query: state.genderID && { id: state.genderID },

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

export default GenderToModifyHook;










