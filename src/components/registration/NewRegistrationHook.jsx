import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import Router from "next/router";
import styled from "styled-components";
import useForm from "../utils/useForm";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import {
  getSelectedObject,
  removeTypename,
  uniqueCodeGen,
  candExamSessionCode,
} from "../queries&Mutations&Functions/Functions";
import { createRegistrationMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllAptitudesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";

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
  // specialty: Yup.string().required("Choix de la Séries Obligatoire"),
  candCode: Yup.string().required("Choix De l'examen Obligatoire"),
  // centerNumber: Yup.number().required("Numéro du centre obligatoire"),
});

const NewRegistrationHook = () => {
  const initialValues = {
    candCode: "",
    // specialty: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    centerExamSessionSpecialtyID: "",
    centerNumber: "",
    examID: "",
    sessionID: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newVal = type === "number" ? parseInt(value) : value;
    setState({ [name]: newVal });
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
  const removeExamName =
    getExams && getExams.map(({ examName, ...others }) => others);
  const refinedExams = getExams && removeTypename(removeExamName);

  const getExamName = refinedExams && {
    ...getSelectedObject(refinedExams, state.examID),
  };
  const getExamsOptions =
    getExams &&
    getExams.map((item) => ({ value: item.id, label: item.examName }));
  console.log(getExamName);

  const {
    data: dataAptitudes,
    loading: loadingAptitudes,
    error: errAptitudes,
  } = useQuery(getAllAptitudesQuery);
  {
    loadingAptitudes && <p>loading...</p>;
  }
  {
    errAptitudes && <Error error={errAptitudes} />;
  }
  const getAptitudes = dataAptitudes && dataAptitudes.aptitudes;
  // const removeAptitudeName =
  //   getAptitudes && getAptitudes.map(({ examName, ...others }) => others);
  // const refinedAptitudes = getAptitudes && removeTypename(removeAptitudeName);

  // const getAptitudeName = refinedAptitudes && {
  //   ...getSelectedObject(refinedAptitudes, state.examID),
  // };
  const getAptitiudesOptions =
    getAptitudes &&
    getAptitudes.map((item) => ({ value: item.id, label: item.aptitudeName }));

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

  const {
    data: dataExamSessions,
    error: errExamSessions,
    loading: loadingExamSession,
  } = useQuery(getExamSessionQuery, {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: getExamName,
      session: getSessionName,
    },
  });

  {
    loadingExamSession && <p>...Loading</p>;
  }
  {
    errExamSessions && <Error error={errExamSessions} />;
  }
  console.log(dataExamSessions);
  const getExamSessions = dataExamSessions && dataExamSessions.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];
  console.log(reducedES);

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
      skip: !reducedES || !newCenterByNumber,
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

  const {
    data: dataSpecialtyCES,
    loading: loadingSpecialtyCES,
    error: errSpecialtyCES,
  } = useQuery(getAllSpecialtiesOfACenterExamSessionQuery, {
    variables: getCESID,
  });
  {
    loadingSpecialtyCES && <p>...Loading</p>;
  }
  {
    errSpecialtyCES && <Error error={errSpecialtyCES} />;
  }
  console.log(dataSpecialtyCES);
  const getCenterExamSession =
    dataSpecialtyCES && dataSpecialtyCES.centerExamSession;
  const { centerExamSessionSpecialty } = { ...getCenterExamSession };
  console.log({ centerExamSessionSpecialty });

  const newSpecialty =
    centerExamSessionSpecialty &&
    centerExamSessionSpecialty.map((item) => item);
  const refinedSpecialty = newSpecialty && removeTypename(newSpecialty);
  console.log(refinedSpecialty);
  const getSpecialtyOptions =
    refinedSpecialty &&
    refinedSpecialty.map((item) => ({
      id: item.specialty.id,
      value: item.id,
      label: item.specialty.specialtyName,
    }));
  console.log({ state });
  console.log({ getCESID });
  console.log(state.centerExamSessionSpecialtyID);

  const [createRegistration, { loading, error }] = useMutation(
    createRegistrationMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createRegistration({
          variables: {
            ...values,
            candExamSecretCode: uniqueCodeGen(12),
            candidate: makeCandVariableObject(values.candCode),
            centerExamSession: { id: getCESID.id },
            specialty: { id: values.centerExamSessionSpecialty.id },
            aptitude: { id: values.aptitude.value },
            centerExamSessionSpecialty: {
              id: values.centerExamSessionSpecialty.value,
            },
            candExamSession: candExamSessionCode(
              values.candCode,
              state.examID,
              state.sessionID
            ),
            candRegistrationNumber:
              refinedExams &&
              refinedSessions &&
              candRegistrationNumber(
                state.centerNumber,
                getExamName.examCode,
                getSessionName.sessionName
              ),
          },
        });
        res &&
          Router.push({
            pathname: "/show/results/registrationReceipt",
            query: { id: res.data.createRegistration.id },
          });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ setFieldValue, isSubmitting, isValid, dirty }) => {
        return (
          <MinimStyledPage>
            <h4>Inscription à un Examen</h4>
            <Error error={error} />
            <StyledForm
              disabled={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCES ||
                loadingExamSession ||
                loading ||
                loadingSpecialtyCES ||
                loadingAptitudes
              }
              aria-busy={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCES ||
                loadingExamSession ||
                loading ||
                loadingSpecialtyCES ||
                loadingAptitudes
              }
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
                      value={state.centerNumber || ""}
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
                    <SygefexSelect
                      onChange={(value) =>
                        setFieldValue("centerExamSessionSpecialty", value)
                      }
                      name="centerExamSessionSpecialty"
                      options={getSpecialtyOptions}
                      placeholder={"La Spécialité"}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) => setFieldValue("aptitude", value)}
                      name="aptitude"
                      options={getAptitiudesOptions}
                      placeholder={"Aptitude a l'EPS"}
                      disabled={isSubmitting}
                    />

                    <SygexInput
                      name="candCode"
                      type="text"
                      label="Code secret candidat"
                      disabled={isSubmitting}
                    />
                    <ErrorMessage name="candCode" />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton
                      type="submit"
                      disabled={!(dirty && isValid) || isSubmitting}
                    >
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
export default NewRegistrationHook;
