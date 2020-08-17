import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import {
  SygexInput,
  SygefexSelect,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import {
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import { createCenterExamSessionMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  margin: 0 1rem;
  padding-bottom: 0;
  margin-bottom: 0;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const validationSchema = Yup.object().shape({
  // examID: Yup
  //     .string()
  //     .required("Choix De l'examen Obligatoire"),
  // sessionID: Yup
  //     .string()
  //     .required("Choix de la session Obligatoire"),
  // centerCode: Yup
  //     .string()
  //     .required("Choix de la session Obligatoire"),
  // centerNumber: Yup
  //     .number()
  //     .min(0, 'Pas de Numéro de centre négative')
  //     .required('Numéro du centre obligatoire'),
});

const CreateCenterExamSessionHook = () => {
  const initialValues = {
    centerNumber: "",
    centerCode: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
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
  console.log({ refinedExams });
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
  console.log({ refinedSessions });
  const getSessionsOptions =
    refinedSessions &&
    refinedSessions.map((item) => ({
      value: item.id,
      label: item.sessionName,
    }));

  const {
    data: dataExamSessions,
    error: errExamSessions,
    loading: loadingExamSessions,
  } = useQuery(getExamSessionQuery, {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: refinedExams && getSelectedObject(refinedExams, state.examID),
      session:
        refinedSessions && getSelectedObject(refinedSessions, state.sessionID),
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

  const {
    data: dataCenter,
    error: errCenter,
    loading: loadingCenter,
  } = useQuery(getSingleCenterQuery, {
    skip: !state.centerNumber,
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

  const [createCenterExamSession, { loading, error }] = useMutation(
    createCenterExamSessionMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createCenterExamSession({
          variables: {
            center: newCenterByNumber && newCenterByNumber,
            examSession: reducedES && reducedES,
          },
        });

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, setfieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4> Inscrire un Centre à un Examen pour une session</h4>
            <Error error={error} />
            <StyledForm
              disabled={isSubmitting || loadingExamSessions}
              aria-busy={isSubmitting || loadingExamSessions}
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
export default CreateCenterExamSessionHook;
