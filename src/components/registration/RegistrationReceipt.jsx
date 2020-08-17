import React, { useEffect } from "react";
import { StyledButton, ButtonStyled, StyledForm } from "../utils/FormInputs";
import { Formik, Form } from "formik";
import useForm from "../utils/useForm";
import { MiniStyledPage } from "../styles/StyledPage";
import { format } from "date-fns";
import { getCandidateRegistrationInfoQuery } from "../queries&Mutations&Functions/Queries";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { useApolloClient } from "@apollo/react-hooks";
import SubjectList from "./SubjectList";

const SubjectTitles = styled.div`
  display: flex;
  color: ${(props) => props.theme.pureWhite};
  font-size: 1.5rem;
  justify-content: left;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.darkRed};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  width: 25%;
  text-align: left;
`;

const WholeForm = styled.div`
  padding: 1rem;
`;

// const GenInfo = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
//   grid-gap: 1rem;
// `;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  /* grid-template-columns: 1fr 5fr; */
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`;

const SchoolInfo2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`;

const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: colums;
  background: ${(props) => props.theme.darkRed};
  color: ${(props) => props.theme.pureWhite};
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.3rem;
  border-radius: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.black};
`;
const CandPic = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
  img {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: 15rem;
    width: 13rem;
    border-radius: 0.7rem;
    background-size: contain;
    background-position: center;
  }
`;

const FirstInfo = styled.div`
  display: block;
  text-align: left;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 0.3rem;
  min-width: 13rem;
`;

const Signature = styled.div`
  margin-top: 1.5rem;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
  font-size: 1.5rem;
  line-height: 0.3rem;
  justify-content: center;
  align-items: center;
`;

const RegistrationReceipt = ({ id }) => {
  const [state, setState] = useForm({});
  const client = useApolloClient();

  const loadRegistrationData = async () => {
    const { error, data } = await client.query({
      query: getCandidateRegistrationInfoQuery,
      variables: { id },
    });
    console.log(data);
    const { registration } = data;
    setState({ registration });
  };

  useEffect(() => {
    loadRegistrationData();
  }, []);

  console.log(state.registration);
  const {
    candExamSecretCode,
    candidate,
    centerExamSessionSpecialty,
    createdAt,
    candRegistrationNumber,
  } = { ...state.registration };

  const { centerExamSession, specialty } = { ...centerExamSessionSpecialty };

  const { examSession, center } = { ...centerExamSession };
  const { exam, session } = { ...examSession };
  const { centerName } = { ...center };
  const { examName } = { ...exam };
  const { sessionName } = { ...session };
  const { specialtyName, subjectSpecialty } = { ...specialty };

  const {
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    placeOfBirth,
    dateOfBirth,
    gender,
  } = { ...candidate };
  const { genderName } = { ...gender };

  const initialValues = {
    candCode: "",
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    candExamSecretCode: "",
  };

  return (
    <Formik initialValues={initialValues}>
      {({ isSubmitting, values }) => (
        <MiniStyledPage>
          <h4>
            Reçu d'inscription de: {cand1stName}' '{cand2ndName} " "
            {cand3rdName}
          </h4>

          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <WholeForm>
                <SchoolInfoBlock>
                  <SchoolInfo>
                    <span>
                      <strong> Centre D'Examen: </strong>
                      <hr />
                    </span>
                    <span>{centerName}</span>
                  </SchoolInfo>
                  <SchoolInfo2>
                    <span>
                      <strong> Examen: </strong> {examName}
                    </span>
                    <span>
                      <strong> Session: </strong> {sessionName}
                    </span>
                  </SchoolInfo2>
                  <SchoolInfo>
                    <span>
                      <strong>Info Inscritption: </strong>
                      <hr />
                    </span>
                    <span>
                      <strong> Numero: </strong> {candRegistrationNumber}
                    </span>
                    <span>
                      <strong> Date: </strong>
                      {format(createdAt, "d  MMM, yyyy , HH:MM:SS")}
                    </span>

                    <span>
                      <strong> Specialization: </strong>
                      <hr />
                    </span>
                    <span>
                      <strong> SERIE: </strong>
                      {specialtyName}
                    </span>
                  </SchoolInfo>
                </SchoolInfoBlock>
                <ResultsHeader>
                  <CandPic>
                    <img src={image} alt={cand1stName} />
                  </CandPic>
                  <FirstInfo>
                    <p>
                      <span>
                        <strong> Nom: </strong> {cand1stName}
                      </span>
                    </p>

                    <p>
                      <span>
                        <strong> Prenom: </strong> {cand2ndName}
                      </span>
                    </p>

                    <p>
                      <span>
                        <strong> Autres Noms: </strong>
                        {cand3rdName}
                      </span>
                    </p>
                    <p>
                      <span>
                        <hr />
                        <strong>Naissance: </strong>
                        <hr />
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong> Lieu: </strong> {placeOfBirth}
                      </span>
                    </p>

                    <p>
                      <span>
                        <strong> Date: </strong>
                        {format(dateOfBirth, "d MMMM, YYYY ")}
                      </span>
                    </p>
                    <p>
                      <span>
                        <strong> Sexe: </strong> {genderName}
                      </span>
                    </p>

                    <p>
                      <span>
                        <strong> Email: </strong>
                        {email}
                      </span>
                    </p>
                  </FirstInfo>
                </ResultsHeader>
                <SubjectTitles>
                  <TitleItem>
                    <span>Matiere</span>
                  </TitleItem>
                  <TitleItem>
                    <span>Coeff </span>
                  </TitleItem>
                </SubjectTitles>
                {subjectSpecialty &&
                  subjectSpecialty.map((item) => (
                    <SubjectList key={item.id} subjSpec={item} />
                  ))}
                <Signature>
                  <FirstInfo>Candidat:</FirstInfo>
                  <FirstInfo>Proviseur/Directeur:</FirstInfo>
                </Signature>
              </WholeForm>
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )}
    </Formik>
  );
};

export default RegistrationReceipt;

// todo get all the required subject for the candidate

// {scores.map((score) => (
//   <SubjectList key={score.subjectSeries.id} score={score} />
// )}
