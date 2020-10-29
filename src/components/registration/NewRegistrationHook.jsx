import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import Router from "next/router";
import styled from "styled-components";
import useForm from "../utils/useForm";
import * as Yup from "yup";
import { Formik, Form } from "formik";

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
  getAllEducationTypesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getSingleCenterQuery,
} from "../queries&Mutations&Functions/Queries";
import { FormikRadio } from "@dccs/react-formik-mui";
import { FormLabel, RadioGroup } from "@material-ui/core";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 13rem; */
  margin: 0 1rem;
`;

const WholeControls = styled.div`
  display: flex;
  flex-direction: Column;
`;

const TwoGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
`;
const RadioControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const RadioButtons = styled.div`
margin-top: 2rem;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  label {
    font-size: 1.3rem;
  }
 
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
  centerExamSessionSpecialty: Yup.object().required(
    "Choix de la Séries Obligatoire"
  ),
  candCode: Yup.string().required("Choix De l'examen Obligatoire"),
  aptitude: Yup.string().required("Choix du l'aptitude a l'EPS Obligatoire"),
  // centerNumber: Yup.number().required("Numéro du centre obligatoire"),
});

const NewRegistrationHook = () => {
  const [state, setState, handleReactSelectChange] = useForm({
    centerExamSessionSpecialtyID: "",
    centerNumber: "100000",
    examID: "",
    sessionID: "",
    educTypeID: "",
  });
  const [EPF1State, setEPF1State] = useState({ value: "" });
  const [EPF2State, setEPF2State] = useState({ value: "" });

  const initialValues = {
    centerNumber: "100000",
    EPF1: "",
    EPF2: "",
  };

  const makeCESSObject = (candCodeValue) => {
    const objCESS = {
      id: `${candCodeValue}`,
    };
    return objCESS;
  };

  const makeCandVariableObject = (candCodeValue) => {
    const storedCandidate = {
      candCode: `${candCodeValue}`,
    };
    return storedCandidate;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const candRegistrationNumber = (centerCode, exam, session) => {
    return `${centerCode + exam + session}`;
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
            aptitude: values.aptitude,
            EPF1: values.EPF1,
            EPF2: values.EPF2,
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
                loadingEducType ||
                loadingCenter
              }
              aria-busy={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingCES ||
                loadingExamSession ||
                loading ||
                loadingSpecialtyCES ||
                loadingEducType ||
                loadingCenter
              }
            >
              <Form>
                <WholeControls>
                  <TwoGroups>
                    <InputGroup>
                      <SygexInput
                        value={centerByNumber && centerByNumber.centerCode  || ""}
                        name="centerName"
                        type="text"
                        label="Libellé du centre"
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

                    <RadioControls>
                      <RadioButtons>
                        <FormLabel>Aptitude</FormLabel>
                        <RadioGroup name="aptitude" className="RadioSet">
                          <FormikRadio label="Apte" name="aptitude" value="A" />
                          <FormikRadio
                            label="Inapte"
                            name="aptitude"
                            value="I"
                          />
                        </RadioGroup>
                      </RadioButtons>
                      <RadioButtons>
                        <FormLabel>EPF1 Theories</FormLabel>
                        <RadioGroup name="EPF1" className="RadioSet">
                          <FormikRadio label="Dessin" name="EPF1" value="D" />
                          <FormikRadio
                            label="Education Musicale"
                            name="EPF1"
                            value="M"
                          />
                          <FormikRadio
                            label="Education Menagere"
                            name="EPF1"
                            value="E"
                          />
                          <FormikRadio label="Latin" name="EPF1" value="L" />
                          <FormikRadio label="Grec" name="EPF1" value="G" />
                        </RadioGroup>
                      </RadioButtons>
                      <RadioButtons>
                        <FormLabel>EPF2 Travaux Pratiques</FormLabel>
                        <RadioGroup name="EPF2" className="RadioSet">
                          <FormikRadio
                            label="TP Chimie"
                            name="EPF2"
                            value="C"
                          />
                          <FormikRadio label="TP Info" name="EPF2" value="I" />
                          <FormikRadio
                            label="TP Physique"
                            name="EPF2"
                            value="P"
                          />
                          <FormikRadio label="TP SVT" name="EPF2" value="S" />
                        </RadioGroup>
                      </RadioButtons>
                    </RadioControls>
                  </TwoGroups>
                  <div>
                    <ButtonStyled>
                      <StyledButton
                        type="submit"
                        disabled={!(dirty && isValid) || isSubmitting}
                      >
                        Valid{isSubmitting ? "ation en cours" : "er"}
                      </StyledButton>
                    </ButtonStyled>
                  </div>
                </WholeControls>
              </Form>
            </StyledForm>
          </MiniStyledPage>
        );
      }}
    </Formik>
  );
};
export default NewRegistrationHook;
