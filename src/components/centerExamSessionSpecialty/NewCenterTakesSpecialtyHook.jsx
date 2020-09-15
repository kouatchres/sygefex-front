import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
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
import useForm from "../utils/useForm";
import {
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import { createCenterExamSessionSpecialtyMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
  getAllEducationTypesQuery,
  getAllSpecialtiesOfAnEducationTypeQuery,
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
  // exam: Yup
  //     .string()
  //     .required("Choix De l'examen Obligatoire"),
  // session: Yup
  //     .string()
  //     .required("Choix de la session Obligatoire"),
  // centerNumber: Yup
  //     .number()
  //     .min(0, 'Pas de Numéro négative')
  //     .required('Numéro du centre obligatoire'),
  // educType: Yup
  //     .string()
  //     .required("Choix du Type d'enseignement Obligatoire"),
  specialty: Yup.string().required("Série Obligatoire"),
});

const NewCenterTakesSpecialty = () => {
  const initialValues = {
    centerName: "",
    centerNumber: "",
    specialty: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    examID: "",
    sessionID: "",
    educTypeID: "",
    centerNumber: "",
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

  const makeExaminerObject = (profCodeValue) => {
    const storedProf = {
      examinerCode: `${profCodeValue}`,
    };
    return storedProf;
  };
  const makeCESSObject = (candCodeValue) => {
    const objCESS = {
      id: `${candCodeValue}`,
    };
    return objCESS;
  };

  const { data: dataExams, loading: loadingExams, errorExams } = useQuery(
    getAllExamsQuery
  );

  const getExams = dataExams && dataExams.exams;
  console.log(getExams);
  const removeExamName =
    getExams && getExams.map(({ examName, ...others }) => others);
  const refinedExams = getExams && removeTypename(removeExamName);
  const getExamOptions =
    getExams &&
    getExams.map((item) => ({ value: item.id, label: item.examName }));

  const { data: dataSession, loading: loadingSession, errorSession } = useQuery(
    getAllSessionsQuery
  );

  const getSessions = dataSession && dataSession.sessions;
  const refinedSessions = removeTypename(getSessions);
  const getSessionOptions =
    getSessions &&
    getSessions.map((item) => ({
      ...item,
      value: item.id,
      label: item.sessionName,
    }));

  const {
    data: dataExamSession,
    loading: loadingExamSession,
    errorExamSession,
  } = useQuery(getExamSessionQuery, {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: getExams && getSelectedObject(refinedExams, state.examID),
      session:
        getSessions && getSelectedObject(refinedSessions, state.sessionID),
    },
  });

  console.log(dataExamSession);
  const getExamSessions = dataExamSession && dataExamSession.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];
  console.log(reducedES);

  const { data: dataCenter, loading: loadingCenter, errorCenter } = useQuery(
    getSingleCenterQuery,
    {
      skip: !state.centerNumber,
      variables: {
        centerNumber: state.centerNumber,
      },
    }
  );

  const getCenterByNumber = dataCenter && dataCenter.centerByNumber;
  const refinedCenter = getCenterByNumber && removeTypename(getCenterByNumber);
  console.log(getCenterByNumber);

  const { data: dataCES, loading: loadingCES, error: errorCES } = useQuery(
    getSingleCenterExamSessionQuery,
    {
      skip: !reducedES || !getCenterByNumber,
      variables: {
        examSession: reducedES && reducedES,
        center: refinedCenter && refinedCenter,
      },
    }
  );

  console.log(dataCES);
  const getCenterExamSessionsByCode =
    dataCES && dataCES.centerExamSessionsByCode;
  console.log(getCenterExamSessionsByCode);
  // remove typename from the object
  const refinedCenterExamSessionsByCode =
    getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
  // transform the array into a single object
  const getCES =
    refinedCenterExamSessionsByCode && refinedCenterExamSessionsByCode[0];
  console.log(getCES);

  const {
    data: dataEducType,
    loading: loadingEducType,
    errorEducType,
  } = useQuery(getAllEducationTypesQuery);

  console.log(dataEducType);
  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  const getEducTypeOptions =
    getEducationTypes &&
    getEducationTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const {
    data: dataSpecialty,
    loading: loadingSpecialty,
    errorSpecialty,
  } = useQuery(getAllSpecialtiesOfAnEducationTypeQuery, {
    skip: !state.educTypeID,
    variables: { id: state.educTypeID },
  });

  console.log(dataSpecialty);

  const getEducationType = dataSpecialty && dataSpecialty.educationType;

  const specialtyEducType = { ...getEducationType };
  const { specialty } = specialtyEducType;
  console.log(specialty);
  const removeSpecialtyName =
    specialty && specialty.map(({ specialtyName, ...others }) => others);
  const refinedSpecialty = specialty && removeTypename(removeSpecialtyName);
  const getSpecialtyOptions =
    specialty &&
    specialty.map((item) => ({ value: item.id, label: item.specialtyName }));

  const [createCenterExamSessionSpecialty, { error }] = useMutation(
    createCenterExamSessionSpecialtyMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const res = await createCenterExamSessionSpecialty({
          variables: {
            specialty:
              refinedSpecialty &&
              getSelectedObject(refinedSpecialty, values.specialty.value),
            centerExamSession: getCES && getCES,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res.data.createCenterExamSessionSpecialty);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Spécialités offertes par Centre</h4>
            <Error error={error} />
            <Error error={errorExams} />
            <Error error={errorSession} />
            <Error error={errorCenter} />
            <Error error={errorCES} />
            <Error error={errorExamSession} />
            <Error error={errorSpecialty} />
            <Error error={errorEducType} />
            <StyledForm
              disabled={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCenter ||
                loadingCES ||
                loadingExamSession ||
                loadingSpecialty ||
                loadingEducType
              }
              aria-busy={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCenter ||
                loadingCES ||
                loadingExamSession ||
                loadingSpecialty ||
                loadingEducType
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      value={getCenterByNumber && getCenterByNumber.centerCode}
                      name="centerName"
                      type="text"
                      label=" Nom du centre"
                    />
                    <SygexInput
                      onChange={handleChange}
                      name="centerNumber"
                      type="number"
                      value={state.centerNumber || ""}
                      label="Numéro du centre"
                    />

                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="sessionID"
                      options={getSessionOptions}
                      placeholder={"La Session"}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="examID"
                      options={getExamOptions}
                      placeholder={"L'Examen"}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="educTypeID"
                      options={getEducTypeOptions}
                      placeholder={"Type d'Enseignement"}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) => setFieldValue("specialty", value)}
                      name="specialty"
                      options={getSpecialtyOptions}
                      placeholder={"La Série"}
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
export default NewCenterTakesSpecialty;
