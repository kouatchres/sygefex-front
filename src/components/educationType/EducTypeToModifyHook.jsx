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
import { getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
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



const EducTypeToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ educTypeID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataEducTypes, loading: loadingEducTypes, error: errorEducTypes } = useQuery(getAllEducationTypesQuery)
    { loadingEducTypes && <p>Loading Educ Type from DB...</p> }
    { errorEducTypes && <Error error={errorEducTypes} /> }
    console.log(getEducTypes);
    const getEducTypes = dataEducTypes && dataEducTypes.educationTypes
    const educTypeOptions = getEducTypes && getEducTypes.map((item) => (
        { value: item.id, label: item.educationTypeName }
    ))

    state.educTypeID && console.log(state.educTypeID);
    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Type d'enseignement</h4>
                    <Error error={errorEducTypes} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <SygefexSelect name="educTypeID" onChange={handleReactSelectChange} options={educTypeOptions} placeholder={"Type d'Enseignement"} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>

                                            <StyledButton type="submit" id={state.educTypeID}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateEducType",
                                                    query: state.educTypeID && { id: state.educTypeID },

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

export default EducTypeToModifyHook;










