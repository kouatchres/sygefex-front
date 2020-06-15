import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import { useQuery } from '@apollo/react-hooks'
import Link from "next/link";
import {SygefexSelect, StyledForm, customStyle, ButtonStyled, StyledButton } from '../utils/FormInputs'
import Error from "../ErrorMessage";
import { Formik, Form } from 'formik';
import styled from "styled-components";
import useForm from '../utils/useForm'
import DeleteRegion from "../region/DeleteRegion";
import { getAllSubjectTypesQuery } from "../queries&Mutations&Functions/Queries";
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



const SubjectTypeToModifyHook = () => {
    const [state, setState, handleReactSelectChange] = useForm({ subjectTypeID: "" });

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const { data: dataSubjectType, loading: loadingSubjectType, error: errorSubjectType } = useQuery(getAllSubjectTypesQuery)
    { loadingSubjectType && <p>Loading SubjectType from DB...</p> }
    { errorSubjectType && <Error error={errorSubjectType} /> }
    const getSubjectType = dataSubjectType && dataSubjectType.subjectTypes
    const SubjectTypeOptions = getSubjectType && getSubjectType.map((item) => (
        { value: item.id, label: item.subjectTypeName }
    ))
    console.log(getSubjectType);

    state.subjectTypeID && console.log(state.subjectTypeID);
    return (
        <Formik method="POST"    >
            {({ values, isSubmitting }) => (
                <MinimStyledPage>
                    <h4>Correction Info Type de Matière</h4>
                    <Error error={errorSubjectType} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <TwoGroups>

                                    <InputGroup>
                                        <SygefexSelect name="subjectTypeID" onChange={handleReactSelectChange} options={SubjectTypeOptions}  placeholder={"Type de Matière"} />
                                    </InputGroup>
                                    <Buttons>
                                        <ButtonStyled>

                                            <StyledButton type="submit" id={state.subjectTypeID}>Supprimer</StyledButton>
                                        </ButtonStyled>
                                        <ButtonStyled>
                                            <StyledButton type="submit">
                                                <Link href={{
                                                    pathname: "../updates/updateSubjectType",
                                                    query: state.subjectTypeID && { id: state.subjectTypeID },

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

export default SubjectTypeToModifyHook;










