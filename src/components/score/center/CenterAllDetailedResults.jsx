import React, { useEffect } from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { Form, Formik } from "formik";
import { BiggestStyledPage } from "../../styles/StyledPage";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";
import SeriesTitles from "./SeriesTitles";
import Error from "../../ErrorMessage";
import styled from "styled-components";
import { StyledForm } from "../../utils/FormInputs";
import useForm from "../../utils/useForm";

const SeriesHeadings = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  color: white;
  font-size: 1.7rem;
  justify-content: left;
  background: ${(props) => props.theme.blues[2]};
`;

const TitleItem = styled.div`
  margin: 0 20px;
  text-align: left;
`;

const ExamCenterInfo = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 5fr 0.5fr;
  grid-gap: 0.2rem;
  font-weight: bold;
  font-size: 1.7rem;
  margin: 0 0.2rem;
  justify-items: center;
  align-items: center;
`;

const CenterAllDetailedResults = ({ id }) => {
  // static propTypes = { id: PropTypes.string.isRequired };
  const [state, setState] = useForm({});
  const client = useApolloClient();

  const loadCandScoreData = async () => {
    const { error, data } = await client.query({
      query: centerExamSessionForResultsQuery,
      variables: { id },
    });
    console.log(data);
    setState(data.centerExamSession);
  };

  useEffect(() => {
    loadCandScoreData();
  }, []);

  console.log(state);
  const { examSession, center, centerExamSessionSpecialty } = {
    ...state,
  };
  const { exam, session } = { ...examSession };
  const { examName } = { ...exam };
  const { sessionName } = { ...session };
  const { centerName, centerCode } = { ...center };
  console.log(exam);
  console.log(session);

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
      {({ isSubmitting }) => (
        <BiggestStyledPage>
          <h4>
            Resultat Complets Du: {examName}, Session:
            {sessionName}, centre: {centerCode}
          </h4>
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <ExamCenterInfo>
                <p>
                  <strong> Examen: </strong>
                  <span>{examName}</span>
                </p>
                <p>
                  <strong> Centre: </strong>
                  <span>{centerName}</span>
                </p>
                <p>
                  <strong> Session:</strong>
                  <span>{sessionName}</span>
                </p>
              </ExamCenterInfo>

              <SeriesHeadings>
                <TitleItem>
                  <span>Libelle Serie </span>
                </TitleItem>
                <TitleItem>
                  <span>Code Serie </span>
                </TitleItem>
              </SeriesHeadings>
              {centerExamSessionSpecialty &&
                centerExamSessionSpecialty.map((item) => (
                  <SeriesTitles key={item.specialty.id} CESS={item} />
                ))}
            </Form>
          </StyledForm>
        </BiggestStyledPage>
      )}
    </Formik>
  );
};

export default CenterAllDetailedResults;
