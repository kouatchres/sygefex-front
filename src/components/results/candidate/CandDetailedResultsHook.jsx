import React, { useEffect } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { MiniStyledPage } from "../../styles/StyledPage";
import { format } from "date-fns";
import ResultDetails from "./ResultDetails";
import { Formik, Form } from "formik";
import useForm from "../../utils/useForm";
import { StyledForm } from "../../utils/FormInputs";
import { getCandidateResultsQuery } from "../../queries&Mutations&Functions/Queries";
import Error from "../../ErrorMessage";
import styled from "styled-components";
import {
  roundFloatNumber,
  calcCandTotalScore,
  calcCandTotalCoeff,
  calcCandAve,
} from "../../queries&Mutations&Functions/Functions";

const AveTotals = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1.5rem;
  grid-gap: 1rem;
  color: white;
  background: ${(props) => props.theme.goldenBrown};
  align-items: center;
  justify-items: center;
  border-bottom: 0.1rem solid black;
  padding-left: 0.2rem;
`;

const SubjectTitles = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
  color: white;
  font-size: 1.5rem;
  justify-content: left;
  background: ${(props) => props.theme.blues[2]};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  text-align: left;
`;
const CandInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;
const StyledContainer = styled.div`
  padding: 1rem;
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
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
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.3rem;
`;

const SchoolInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: colums;
  background: ${(props) => props.theme.blues[2]};
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.black};
`;
const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  padding: 5rem 0;
  img {
    height: 15rem;
    width: 15rem;
    border-radius: 0.5rem;
  }
`;

const FirstInfo = styled.div`
  text-align: left;
  display: block;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 0.3rem;
`;

const CandDetailedResultsHook = ({ id }) => {
  const [state, setState] = useForm({});
  const client = useApolloClient();

  const loadCandResultsData = async () => {
    const { error, data } = await client.query({
      query: getCandidateResultsQuery,
      variables: { id },
    });
    console.log(data);
    const { registration } = data;
    setState({ registration });
  };
  useEffect(() => {
    loadCandResultsData();
  }, []);

  console.log(state.registration);
  const {
    candidate,
    centerExamSessionSpecialty,
    candRegistrationNumber,
    scores,
  } = { ...state.registration };

  const { centerExamSession, specialty } = { ...centerExamSessionSpecialty };

  const { examSession, center } = { ...centerExamSession };
  const { exam, session } = { ...examSession };
  const { centerName } = { ...center };
  const { examName } = { ...exam };
  const { sessionName } = { ...session };
  const { specialtyName } = { ...specialty };

  const {
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    placeOfBirth,
    dateOfBirth,
    dadName,
    momName,
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
    <Formik method="GET" initialValues={initialValues}>
      {({ isSubmitting }) => {
        return (
          <MiniStyledPage>
            <h4>
              Resultat Du: {exam && examName}, Session:
              {session && sessionName}, de:-
              {candidate && cand1stName}
              {candidate && cand2ndName}
            </h4>
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
              <Form>
                <StyledContainer>
                  <SchoolInfoBlock>
                    <SchoolInfo>
                      <span>
                        <strong> Centre D'Examen: </strong>
                        <hr />
                      </span>
                      <span>{center && centerName}</span>
                    </SchoolInfo>
                    <SchoolInfo2>
                      <span>
                        <strong> Examen: </strong> {exam && examName}
                      </span>
                      <span>
                        <strong> Session: </strong>
                        {session && sessionName}
                      </span>
                    </SchoolInfo2>
                    <SchoolInfo>
                      <span>
                        <strong> Numero d'Inscription: </strong>
                        {candRegistrationNumber}
                      </span>
                      <span>
                        <strong> Specialization: </strong>
                        <hr />
                      </span>
                      <span>{specialty && specialtyName}</span>
                    </SchoolInfo>
                  </SchoolInfoBlock>
                  <CandInfo>
                    <CandPic>
                      <img
                        src={candidate && image}
                        alt={candidate && cand1stName}
                      />
                    </CandPic>
                    <FirstInfo>
                      <p>
                        <span>
                          <strong> Nom: </strong>
                          {candidate && cand1stName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Prenom: </strong>
                          {candidate && cand2ndName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Autres Noms: </strong>
                          {candidate && cand3rdName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Naissance: </strong>
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span>
                          <strong> Date: </strong>
                          {format(candidate && dateOfBirth, "d MMMM, YYYY ")}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Lieu: </strong>
                          {candidate && placeOfBirth}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Sexe: </strong>
                          {candidate && gender.genderName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Email: </strong>
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span>{candidate && email}</span>
                      </p>

                      <p>
                        <span>
                          <strong> Noms des parents: </strong>
                        </span>
                      </p>
                      <hr />
                      <p>
                        <span>
                          <strong>Père: </strong>
                          {candidate && dadName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Mère: </strong>
                          {candidate && momName}
                        </span>
                      </p>
                    </FirstInfo>
                  </CandInfo>
                  <ResultsHeader>
                    <SubjectTitles>
                      <TitleItem>
                        <span>Matiere</span>
                      </TitleItem>
                      <TitleItem>
                        <span>Coeff </span>
                      </TitleItem>
                      <TitleItem>
                        <span>Moyenne </span>
                      </TitleItem>
                      <TitleItem>
                        <span>Total </span>
                      </TitleItem>
                    </SubjectTitles>
                  </ResultsHeader>

                  {scores &&
                    scores.map((item) => (
                      <ResultDetails key={item.id} score={item} />
                    ))}
                  <AveTotals>
                    <span>
                      <strong>
                        Total Matieres:
                        {scores &&
                          roundFloatNumber(calcCandTotalScore(scores), 4)}
                      </strong>
                    </span>
                    <span>
                      <strong>
                        Somme Coefficients:
                        {scores &&
                          roundFloatNumber(calcCandTotalCoeff(scores), 4)}
                      </strong>
                    </span>
                    <span>
                      <strong>
                        Moyenne:
                        {scores && roundFloatNumber(calcCandAve(scores), 4)}
                      </strong>
                    </span>
                  </AveTotals>
                </StyledContainer>
              </Form>
            </StyledForm>
          </MiniStyledPage>
        );
      }}
    </Formik>
  );
};

export default CandDetailedResultsHook;
