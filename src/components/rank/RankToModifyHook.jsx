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
import { getAllRanksQuery } from "../queries&Mutations&Functions/Queries";
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



const RankToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ rankID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataRank, loading: loadingRank, error: errorRank } = useQuery(getAllRanksQuery)
    { loadingRank && <p>Loading Rank from DB...</p> }
    { errorRank && <Error error={errorRank} /> }
    const getRank = dataRank && dataRank.Ranks
    const rankOptions = getRank && getRank.map((item) => (
        { value: item.id, label: item.rankName }
    ))
    console.log(getRank);

    state.rankID && console.log(state.rankID);
    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Poste</h4>
                    <Error error={errorRank} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <SygefexSelect name="rankID" onChange={handleReactSelectChange} options={rankOptions} placeholder={"Poste"} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>

                                            <StyledButton type="submit" id={state.rankID}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateRank",
                                                    query: state.rankID && { id: state.rankID },

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

export default RankToModifyHook;










