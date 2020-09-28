import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Form from "../styles/Form";
import { MiniStyledPage } from "../styles/StyledPage";
import { getExaminerRegistrationQuery } from "../queries&Mutations&Functions/Queries";
import Error from "../ErrorMessage";
import styled from "styled-components";
import {Formik, Form} from 'formik'
import { useApolloClient } from "@apollo/react-hooks";

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  align-items: center;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size:1.5rem;
margin: 0 0.3rem;
`;

const SchoolInfo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  align-items: center;
  font-size:1.5rem;
margin: 0 0.3rem;
`;
const FieldSetStyled = styled.fieldset`
min-width: 20rem;
`;
const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow:colums;
  background: ${props => props.theme.blues[2]};
  color: ${props => props.theme.pureWhite};
  justify-content: center;
  align-items: center;
  font-size:1.5rem;
  padding:0.2rem;
border-bottom: .1rem solid ${props => props.theme.black};

`;
const CandPic = styled.div`
  display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
	img {
		margin-top: .5rem;
		margin-left: .5rem;
		height: 15rem;
		width: 13rem;
		border-radius: 0.7rem;
		background-size: contain;
		background-position: center;
	}
`;

const FirstInfo = styled.div`
  display: block;
  text-align:left;
  flex-direction: column;
  font-size:1.5rem;
  line-height:0.3rem;
  min-width: 13rem;
`;


const ExaminerRegistrationReceipt =({id})=> {
    // static propTypes = { id: PropTypes.string.isRequired };
    const [state, setState] = useState({}) 
    const client = useApolloClient()
    
    const loadingExaminerData =async(id)=>{

        const { error, data}= await client.query({
            query:getExaminerRegistrationQuery,
            variables:{id}
        })
        { error && <Error error={error} /> }
         console.log(data);
                    const { centerExamSessionExaminer } = data;
         setState(centerExamSessionExaminer)          

    }
      useEffect(() => {
        loadingExaminerData()
    }, [])
    
    
     const { examiner, centerExamSession, phaseRank } = { ...state.centerExamSessionExaminer };
                    const { examSession, center } = { ...centerExamSession }
                    const { exam, session } = { ...examSession }
                    const { centerName } = center
                    const {
                        examiner1stName,
                        examiner2ndName,
                        examinerOtherNames,
                        examinerMatricule,
                        examinerPhone,
                        examinerCNI,
                        examinerImage,
                        examinerEmail,
                        gender
                    } = { ...examiner }

                     const initialValues = {
    candCode: "",
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    gender: "",
    EPF1: "",
    EPF2: "",
    placeOfBirth: "",
    dateOfBirth: "",
    candExamSecretCode: "",
  };


  
    return (
        <Formik  initialValues={initialValues}>
       
        {({isSubmitting,values})=>(
       
           
                        <MiniStyledPage>

                          
                                <h4>
                                    Confirmation de poste de l'Examinateur: {examiner1stName} {examiner2ndName} {examinerOtherNames}
                                </h4>
                                  <StyledForm disabled={isSubmitting } aria-busy={isSubmitting }>
                                <Form>
                                    <SchoolInfoBlock>
                                        <SchoolInfo>
                                            <span>
                                                <strong> Centre D'Examen: </strong>
                                                <hr />
                                            </span>
                                            <span>
                                                {centerName}
                                            </span>
                                            <span>
                                                <hr />
                                                <strong> Responsable de Centre D'Examen: </strong>
                                            </span>
                                            <span>
                                                <strong> Noms: </strong> {examiner1stName}  {examiner2ndName}  {examinerOtherNames}
                                            </span>
                                            <span>
                                                <strong> Poste: </strong> {phaseRank.rankName}
                                            </span>
                                        </SchoolInfo>
                                        <SchoolInfo2>
                                            <span>
                                                <strong> Examen: </strong> {exam.examName}
                                            </span>
                                            <span>
                                                <strong> Session: </strong> {session.sessionName}
                                            </span>
                                        </SchoolInfo2>

                                    </SchoolInfoBlock>
                                    <ResultsHeader>
                                        <CandPic>
                                            <img src={examinerImage} alt={examiner1stName} />
                                        </CandPic>
                                        <FirstInfo>

                                            <p>
                                                <span>
                                                    <strong> Information Detaillee: </strong>
                                                    <hr />
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Nom: </strong> {examiner1stName}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Nom: </strong> {examiner2ndName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Prenom: </strong> {examinerOtherNames}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Autre Noms: </strong> {examinerOtherNames}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> CNI: </strong> {examinerCNI}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Matricule: </strong> {examinerMatricule}
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <strong> Sexe: </strong> {gender.genderName}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Email: </strong>
                                                    {examinerEmail}
                                                </span>
                                            </p>

                                            <p>
                                                <span>
                                                    <strong> Phone: </strong>{examinerPhone}
                                                </span>
                                            </p>


                                        </FirstInfo>
                                    </ResultsHeader>
                                    
                                    </Form>
                                    </StyledForm>
                        </MiniStyledPage>
        )}
        </Formik>
                  
        );
}

export default ExaminerRegistrationReceipt;
