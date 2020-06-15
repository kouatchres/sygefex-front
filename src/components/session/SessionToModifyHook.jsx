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
import { getAllSessionsQuery } from "../queries&Mutations&Functions/Queries";
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



const SessionToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ sessionID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataSession, loading: loadingSession, error: errorSession } = useQuery(getAllSessionsQuery)
    { loadingSession && <p>Loading Session from DB...</p> }
    { errorSession && <Error error={errorSession} /> }
    const getSession = dataSession && dataSession.sessions
    const sessionOptions = getSession && getSession.map((item) => (
        { value: item.id, label: item.sessionName }
    ))
    console.log(getSession);

    state.sessionID && console.log(state.sessionID);
    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Poste</h4>
                    <Error error={errorSession} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <SygefexSelect name="sessionID" onChange={handleReactSelectChange} options={sessionOptions} placeholder={"La Session"} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>

                                            <StyledButton type="submit" id={state.sessionID}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateSession",
                                                    query: state.sessionID && { id: state.sessionID },

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

export default SessionToModifyHook;










