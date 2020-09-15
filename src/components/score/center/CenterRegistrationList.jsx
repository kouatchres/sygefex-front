import React, { useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../../styles/StyledPage";
import Error from "../../ErrorMessage";
import Router from "next/router";
import { Formik, Form } from "formik";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../../utils/FormInputs";
import styled from "styled-components";
import useForm from "../../utils/useForm";
import * as Yup from "yup";
import {
  getSelectedObject,
  removeTypename,
} from "../../queries&Mutations&Functions/Functions";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
} from "../../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const validationSchema = Yup.object().shape({
  // exam: Yup
  //     .string()
  //     .required("Choix De l'examen Obligatoire"),
  // session: Yup
  //     .string()
  //     .required("Choix de la session Obligatoire"),
  // series: Yup
  //     .string()
  //     .required("Choix de la Séries Obligatoire"),
  // candCode: Yup
  //     .string()
  //     .required("Choix De l'examen Obligatoire"),
  // centerNumber: Yup
  //     .number()
  //     .min(0, 'Pas de note négative')
  //     .required('Numéro du centre obligatoire'),
});

const GenCenterResultsHook = () => {
  const initialValues = {
    centerNumber: "",
    candCode: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    seriesID: "",
    centerNumber: "",
    examID: "",
    sessionID: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const makeCenterVariableObject = (centerCodeValue) => {
    const storedCenter = {
      centerNumber: `${centerCodeValue}`,
    };
    return storedCenter;
  };

  const candRegistrationNumber = (centerCode, exam, session) => {
    return `${centerCode + exam + session}`;
  };
  const makeCandVariableObject = (candCodeValue) => {
    const storedCandidate = {
      candCode: `${candCodeValue}`,
    };
    return storedCandidate;
  };
  const makeCESSObject = (candCodeValue) => {
    const objCESS = {
      id: `${candCodeValue}`,
    };
    return objCESS;
  };

  useEffect(() => {
    {
      state.examID &&
        state.sessionID &&
        showExamSessions({
          variables: {
            exam: getExamName,
            session: getSessionName,
          },
        });
    }
  }, [state.examID, state.sessionID]);

  const { data: dataExams, loading: loadingExams, error: errExams } = useQuery(
    getAllExamsQuery
  );
  {
    loadingExams && <p>loading...</p>;
  }
  {
    errExams && <Error error={errExams} />;
  }
  const getExams = dataExams && dataExams.exams;
  console.log(getExams);
  const removeExamName =
    getExams && getExams.map(({ examName, ...others }) => others);
  const refinedExams = getExams && removeTypename(removeExamName);

  const getExamName = refinedExams && {
    ...getSelectedObject(refinedExams, state.examID),
  };
  const getExamsOptions =
    getExams &&
    getExams.map((item) => ({ value: item.id, label: item.examName }));

  const {
    data: dataSession,
    loading: loadingSession,
    error: errSession,
  } = useQuery(getAllSessionsQuery);
  {
    loadingSession && <p> loading...</p>;
  }
  {
    errSession && <Error error={errSession} />;
  }
  const getSessions = dataSession && dataSession.sessions;

  const refinedSessions = getSessions && removeTypename(getSessions);

  const getSessionName = refinedSessions && {
    ...getSelectedObject(refinedSessions, state.sessionID),
  };
  const getSessionsOptions =
    refinedSessions &&
    refinedSessions.map((item) => ({
      value: item.id,
      label: item.sessionName,
    }));

  const [
    showExamSessions,
    {
      data: dataExamSessions,
      error: errExamSessions,
      loading: loadingExamSessions,
    },
  ] = useLazyQuery(getExamSessionQuery, {
    variables: {
      exam: getExamName,
      session: getSessionName,
    },
  });

  {
    loadingExamSessions && <p>...Loading</p>;
  }
  {
    errExamSessions && <Error error={errExamSessions} />;
  }
  console.log(dataExamSessions);
  const getExamSessions = dataExamSessions && dataExamSessions.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];
  console.log(reducedES);

  console.log(state.examSessionID);
  const {
    data: dataCenter,
    error: errCenter,
    loading: loadingCenter,
  } = useQuery(getSingleCenterQuery, {
    variables: { centerNumber: state.centerNumber },
  });
  {
    loadingCenter && <p>...Loading</p>;
  }
  {
    errCenter && <Error error={errCenter} />;
  }
  const { centerByNumber } = { ...dataCenter };
  const newCenterByNumber = removeTypename(centerByNumber);
  console.log(newCenterByNumber);

  const { data: dataCES, error: errCES, loading: loadingCES } = useQuery(
    getSingleCenterExamSessionQuery,
    {
      skip: !newCenterByNumber || !reducedES,
      variables: {
        examSession: reducedES && reducedES,
        center: newCenterByNumber && newCenterByNumber,
      },
    }
  );
  {
    loadingCES && <p>...Loading</p>;
  }
  {
    errCES && <Error error={errCES} />;
  }
  console.log(dataCES);
  const getCenterExamSessionsByCode =
    dataCES && dataCES.centerExamSessionsByCode;
  console.log(getCenterExamSessionsByCode);
  const refinedCenterExamSessions =
    getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
  // transform the array into a single object
  const getCESID = refinedCenterExamSessions && refinedCenterExamSessions[0];
  console.log(getCESID);
  getCESID &&
    Router.push({
      pathname: "/lists/centerRegistrationDetails",
      query: {
        id: getCESID.id,
      },
    });
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Resultats d'un Centre</h4>
            <Error error={errCES} />
            <StyledForm
              disabled={isSubmitting || loadingExamSessions || loadingCES}
              aria-busy={isSubmitting || loadingExamSessions || loadingCES}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      value={centerByNumber && centerByNumber.centerCode}
                      name="centerName"
                      type="text"
                      label=" Nom du centre"
                    />
                    <SygexInput
                      onChange={handleChange}
                      name="centerNumber"
                      value={state.centerNumber}
                      type="number"
                      label="Numéro du centre"
                      disabled={isSubmitting}
                    />

                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="sessionID"
                      options={getSessionsOptions}
                      placeholder={"La Session"}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="examID"
                      options={getExamsOptions}
                      placeholder={"L'Examen"}
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type="submit">
                      Valid{isSubmitting ? "ation en cours" : "er"}
                    </StyledButton>
                  </ButtonStyled>
                </AllControls>
              </Form>
            </StyledForm>
          </MinimStyledPage>
        );
      }}
    </Formik>
  );
};
export default GenCenterResultsHook;
