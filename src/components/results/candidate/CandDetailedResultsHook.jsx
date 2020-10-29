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
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  font-size: 1.7rem;
  grid-gap: 1rem;
  background: ${(props) => props.theme.darkRed};
  border-bottom: 0.2rem solid ${(props) => props.theme.black};
  border-top: 0.2rem solid ${(props) => props.theme.black};
  align-items: center;
  justify-items: center;
  border-bottom-right-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
`;

const SubjectTitles = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  color: white;
  border-top-right-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
  font-size: 1.8rem;
  justify-items: center;
  border-bottom: 0.3rem solid ${(props) => props.theme.black};
  background: ${(props) => props.theme.darkRed};
`;

const TitleItem = styled.div`
  padding-right: 2rem;
  border-right: 0.2rem solid ${(props) => props.theme.pureWhite};
  /* text-align: left; */
`;

const TitlesItem = styled.div`
  padding-right: 2rem;
  /* text-align: left; */
`;

const CandInfo = styled.div`
  background: ${(props) => props.theme.pureWhite};
  display: grid;
  padding: 0;
  border-bottom-right-radius: 0.9rem;
  border-bottom-left-radius: 0.9rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 0.009rem solid ${(props) => props.theme.darkRed};
  border-left: 0.009rem solid ${(props) => props.theme.darkRed};
  border-right: 0.009rem solid ${(props) => props.theme.darkRed};
`;
const StyledContainer = styled.div`
  padding: 1rem;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-size: 1.8rem;
  margin: 0 auto;
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
  background: ${(props) => props.theme.lightGrey};
  border-top: 1rem solid ${(props) => props.theme.darkRed};
  border-bottom: 1rem solid ${(props) => props.theme.darkRed};
  border-left: 0.009rem solid ${(props) => props.theme.darkRed};
  border-right: 0.009rem solid ${(props) => props.theme.darkRed};
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.black};
  font-size: 1.5rem;
  padding: 0.2rem;
  border-top-right-radius: 0.6rem;
  border-top-left-radius: 0.6rem;
`;
const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  padding: 5rem 0;
  img {
    height: 18rem;
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
  margin: 0;
`;

const AveGen = styled.div`
  display: grid;
  grid-template-columns: 1fr;
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
              {session && sessionName}, Pour:-
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
                          {candidate && gender}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Email: </strong>
                        </span>
                      </p>
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
                        </span>
                      </p>
                      <p>
                        <span>{candidate && dadName}</span>
                      </p>
                      <p>
                        <span>
                          <strong>Mère: </strong>
                        </span>
                      </p>
                      <p>
                        <span>{candidate && momName}</span>
                      </p>
                    </FirstInfo>
                  </CandInfo>
                  <SubjectTitles>
                    <TitleItem>Matiere</TitleItem>
                    <TitleItem>Coeff</TitleItem>
                    <TitleItem>Moyenne</TitleItem>
                    <TitlesItem>Total</TitlesItem>
                  </SubjectTitles>

                  {scores &&
                    scores.map((item) => (
                      <ResultDetails key={item.id} score={item} />
                    ))}
                  <AveTotals>
                    <AveGen>
                      <span>
                        <strong>Moyenne:</strong>
                      </span>
                      <span>
                        <strong>
                          {scores && roundFloatNumber(calcCandAve(scores), 4)}
                        </strong>
                      </span>
                    </AveGen>

                    <AveGen>
                      <span>
                        <strong>Coefficients:</strong>
                      </span>
                      <span>
                        <strong>
                          {scores &&
                            roundFloatNumber(calcCandTotalCoeff(scores), 4)}
                        </strong>
                      </span>
                    </AveGen>
                    <AveGen>
                      <span>
                        <strong>Total Matieres:</strong>
                      </span>
                      <span>
                        <strong>
                          {scores &&
                            roundFloatNumber(calcCandTotalScore(scores), 4)}
                        </strong>
                      </span>
                    </AveGen>
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
