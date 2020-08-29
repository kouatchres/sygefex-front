import React, { useEffect, useState, useReducer } from "react";
import { useMutation, useQuery, useApolloClient } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
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
  getAllGroup1Query,
  getAllGroup2Query,
  getAllEducationTypesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";
import {
  FormikTextField,
  FormikDatepicker,
  FormikSelect,
  FormikRadio,
} from "@dccs/react-formik-mui";
import { FormControl, FormLabel, RadioGroup } from "@material-ui/core";

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

const RadioControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const RadioButtons = styled.div`
  display: flex;
  padding-left: 1rem;
  label {
    font-size: 1.3rem;
  }
 
  flex-direction: row;
  align-items: center;
  /* background: ${(props) => props.theme.blues[3]}; */
  .RadioSet {
    FormikRadio{
        font-size:1.5rem
    }
    padding: 0 1rem;

    display: flex;
    flex-direction: row;
    label {
    font-size: 1.3rem;
  }
  }
`;

const validationSchema = Yup.object().shape({
  // specialty: Yup.string().required("Choix de la Séries Obligatoire"),
  candCode: Yup.string().required("Choix De l'examen Obligatoire"),
  aptitude: Yup.string().required("Choix du l'aptitude a l'EPS Obligatoire"),
  // centerNumber: Yup.number().required("Numéro du centre obligatoire"),
});

const NewRegistrationHook = () => {
  const initialValues = {
    centerNumber: "100000",
  };
  const client = useApolloClient();
  const [state, setState, handleReactSelectChange] = useForm({
    centerExamSessionSpecialtyID: "",
    centerNumber: "100000",
    examID: "",
    sessionID: "",
    educTypeID: "",
  });
  const [group1, setGroup1] = useState([]);
  const [group2, setGroup2] = useState([]);
  const [g1Options, setG1Options] = useState([]);
  const [g2Options, setG2Options] = useState([]);

  const facObligCheck = () => {
    if (document.getElementById("EPF1").checked && g2Options.length <= 1) {
      document.getElementById("selectEPF1").style.display = "block";
      document.getElementById("selectEPF2").style.display = "none";
    } else if (
      document.getElementById("EPF1").checked &&
      g2Options.length > 1
    ) {
      document.getElementById("selectEPF1").style.display = "none";
      document.getElementById("selectEPF2").style.display = "block";
    } else if (
      document.getElementById("EPF2").checked &&
      g1Options.length <= 1
    ) {
      document.getElementById("selectEPF2").style.display = "block";
      document.getElementById("selectEPF1").style.display = "none";
    } else if (
      document.getElementById("EPF2").checked &&
      g1Options.length > 1
    ) {
      document.getElementById("selectEPF2").style.display = "none";
      document.getElementById("selectEPF1").style.display = "block";
    } else if (document.getElementById("aucun").checked) {
      document.getElementById("selectEPF2").style.display = "none";
      document.getElementById("selectEPF1").style.display = "none";
    }
  };
  const makeCESSObject = (candCodeValue) => {
    const objCESS = {
      id: `${candCodeValue}`,
    };
    return objCESS;
  };
  const { educTypeID } = state;

  const loadG1SubjData = async () => {
    const { error, data } = await client.query({
      skip: !educTypeID,
      query: getAllGroup1Query,
      variables: { educType: makeCESSObject(educTypeID) },
    });
    const { group1Subjects } = { ...data };
    console.log(group1Subjects);
    setGroup1(group1Subjects);
  };

  const loadG2SubjData = async () => {
    const { error, data } = await client.query({
      skip: !educTypeID,
      query: getAllGroup2Query,
      variables: { educType: makeCESSObject(educTypeID) },
    });
    const { group2Subjects } = { ...data };
    console.log(group2Subjects);
    setGroup2(group2Subjects);
  };
  console.log({ state });
  useEffect(() => {
    loadG1SubjData();
    loadG2SubjData();
    document.getElementById("selectEPF1").style.display = "none";
    document.getElementById("selectEPF2").style.display = "none";
  }, [educTypeID]);

  const EPF1Options =
    group1 &&
    group1.map((item) => ({
      value: item.id,
      label: item.subjectName,
    }));

  const EPF2Options =
    group2 &&
    group2.map((item) => ({
      value: item.id,
      label: item.subjectName,
    }));

  const handleG1MultiSelectChange = (e) => {
    if (g1Options.length < 3) {
      setG1Options(
        Array.isArray(e)
          ? e.map((item) => ({
              id: item.value,
              subjectName: item.label,
            }))
          : []
      );
    }
  };

  const handleG2MultiSelectChange = (e) => {
    if (g2Options.length < 3) {
      setG2Options(
        Array.isArray(e)
          ? e.map((item) => ({
              id: item.value,
              subjectName: item.label,
            }))
          : []
      );
    }
  };
  const getAllOptions = () => {
    if (g1Options.length === 1 && g2Options.length === 1) {
      return [...g1Options, ...g2Options];
    } else if (g1Options.length === 0 && g2Options.length > 1) {
      return [g2Options[0], g2Options[1]];
    } else if (g2Options.length === 0 && g1Options.length > 1) {
      return [g1Options[0], g1Options[1]];
    } else if (g1Options.length > 1 && g2Options.length === 1) {
      return [g1Options[0], g2Options[0]];
    } else if (g2Options.length > 1 && g1Options.length > 1) {
      return [g1Options[0], g2Options[0]];
    } else if (g2Options.length > 1 && g1Options.length === 0) {
      return [...g2Options];
    } else if (g2Options.length > 1 && g1Options.length === 1) {
      return [g2Options[0], g1Options[0]];
    } else if (g2Options.length === 1 && g1Options.length === 0) {
      return [...g2Options];
    } else if (g1Options.length === 1 && g2Options.length === 0) {
      return [...g1Options];
    } else return null;
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const {
    data: dataEducType,
    loading: loadingEducType,
    error: errEducType,
  } = useQuery(getAllEducationTypesQuery);

  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  const refinedEducTypes =
    getEducationTypes && removeTypename(getEducationTypes);
  const getEducTypeOptions =
    refinedEducTypes &&
    refinedEducTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const { data: dataExams, loading: loadingExams, error: errExams } = useQuery(
    getAllExamsQuery
  );

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
    data: dataSession,
    loading: loadingSession,
    error: errSession,
  } = useQuery(getAllSessionsQuery);

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
            optionalSubjects: [...state.group1, ...state.group2],
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
          <MiniStyledPage>
            <h4>Inscription à un Examen</h4>
            <Error
              error={
                error ||
                errCenter ||
                errExams ||
                errSession ||
                errExamSessions ||
                errSpecialtyCES ||
                errEducType
              }
            />

            <StyledForm
              disabled={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCES ||
                loadingExamSession ||
                loading ||
                loadingSpecialtyCES ||
                loadingEducType
              }
              aria-busy={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCES ||
                loadingExamSession ||
                loading ||
                loadingSpecialtyCES ||
                loadingEducType
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
                      name="educTypeID"
                      options={getEducTypeOptions}
                      placeholder={"Type d'enseignement"}
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
                    <SygexInput
                      name="candCode"
                      type="text"
                      label="Code secret candidat"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                </AllControls>
                <AllControls>
                  <RadioControls>
                    <RadioButtons>
                      <FormLabel>Aptitude</FormLabel>
                      <RadioGroup name="aptitude" className="RadioSet">
                        <FormikRadio label="Apte" name="aptitude" value="A" />
                        <FormikRadio label="Inapte" name="aptitude" value="I" />
                      </RadioGroup>
                    </RadioButtons>
                    <RadioButtons>
                      <FormLabel>Ep Facultative</FormLabel>
                      <RadioGroup name="Ep Facultative" className="RadioSet">
                        <FormikRadio
                          id="EPF1"
                          label="EPF1"
                          name="EPF"
                          value="EPF1"
                          onClick={facObligCheck}
                        />
                        <FormikRadio
                          id="EPF2"
                          label="EPF2"
                          name="EPF"
                          value="EPF2"
                          onClick={facObligCheck}
                        />

                        <FormikRadio
                          id="aucun"
                          label="Aucun"
                          name="EPF"
                          value="aucun"
                          onClick={facObligCheck}
                        />
                      </RadioGroup>
                    </RadioButtons>
                  </RadioControls>
                  <SygefexSelect
                    id="selectEPF1"
                    name="group1"
                    isMulti={true}
                    options={EPF1Options}
                    placeholder="Matières fac groupe 1"
                    disabled={isSubmitting}
                    isClearable
                    onChange={handleG1MultiSelectChange}
                  />
                  <SygefexSelect
                    id="selectEPF2"
                    name="group2"
                    isMulti={true}
                    options={EPF2Options}
                    placeholder="Matières fac groupe 2"
                    disabled={isSubmitting}
                    isClearable
                    onChange={handleG2MultiSelectChange}
                  />
                  {g1Options && (
                    <div style={{ marginTop: 20, lineHeight: "25px" }}>
                      <div>
                        <b> All Options Value: </b>
                        {JSON.stringify(g1Options, null, 2)}
                      </div>
                    </div>
                  )}
                  {g2Options && (
                    <div style={{ marginTop: 20, lineHeight: "25px" }}>
                      <div>
                        <b> All Options Value: </b>
                        {JSON.stringify(g2Options, null, 2)}
                      </div>
                    </div>
                  )}
                  {(g2Options || g1Options) && (
                    <div style={{ marginTop: 20, lineHeight: "25px" }}>
                      <div>
                        <b> All Options Value: </b>
                        {JSON.stringify(getAllOptions(), null, 2)}
                      </div>
                    </div>
                  )}

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
          </MiniStyledPage>
        );
      }}
    </Formik>
  );
};
export default NewRegistrationHook;
