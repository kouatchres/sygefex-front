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
import { getAllPhasesQuery } from "../queries&Mutations&Functions/Queries";
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



const PhaseToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ phaseID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataPhase, loading: loadingPhase, error: errorPhase } = useQuery(getAllPhasesQuery)
    { loadingPhase && <p>Loading Phase from DB...</p> }
    { errorPhase && <Error error={errorPhase} /> }
    const getPhase = dataPhase && dataPhase.phases
    const phaseOptions = getPhase && getPhase.map((item) => (
        { value: item.id, label: item.phaseName }
    ))
    console.log(getPhase);

    state.phaseID && console.log(state.phaseID);
    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Phase d'examen</h4>
                    <Error error={errorPhase} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <SygefexSelect name="phaseID" onChange={handleReactSelectChange} options={phaseOptions} placeholder={"Phase de l'Examen"} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>

                                            <StyledButton type="submit" id={state.phaseID}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updatePhase",
                                                    query: state.phaseID && { id: state.phaseID },

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

export default PhaseToModifyHook;










