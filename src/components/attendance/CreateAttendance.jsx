import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
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
  getObjectFromID,
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import { createAttendanceMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllEducationTypesQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getAllSpecialtiesOfACenterExamSessionQuery,
  getAllSubjectSpecialtiesOfASpecialtyQuery,
  getRegisteredCandidatesPerSpecialty,
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
  collected: Yup.string().required(
    "Indiquer si Le(a) candidat(e) a pris le materiel de composition, est Obligatoire"
  ),
  handin: Yup.string().required(
    "Indiquer si Le(a) candidat(e) a remis sa feuille de composition, est Obligatoire"),
  })
const CreateAttendance = () => {
  const [state, setState, handleReactSelectChange] = useForm({
    centerExamSessionSpecialtyID: "",
    centerNumber: null,
    examID: "",
    sessionID: "",
    educTypeID: "",
    specialtyID: "",
    subjectSpecialty: "",
  });

  const initialValues = {
    centerNumber: null,
    collected: "",
    handin: "",
    subjectSpecialty: "",
    candExamSecretCode: "",
  };
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = (type === "number") ? parseInt(value) : value;
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

  const getExamSessions = dataExamSessions && dataExamSessions.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];

  const {
    data: dataCenter,
    error: errCenter,
    loading: loadingCenter,
  } = useQuery(getSingleCenterQuery, {
    variables: { centerNumber: state.centerNumber },
  });

  const { centerByNumber } = { ...dataCenter };
  const newCenterByNumber = removeTypename(centerByNumber);

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

  const getCenterExamSessionsByCode =
    dataCES && dataCES.centerExamSessionsByCode;
  const refinedCenterExamSessions =
    getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
  // transform the array into a single object
  const getCESID = refinedCenterExamSessions && refinedCenterExamSessions[0];

  const {
    data: dataSpecialtyCES,
    loading: loadingSpecialtyCES,
    error: errSpecialtyCES,
  } = useQuery(getAllSpecialtiesOfACenterExamSessionQuery, {
    variables: getCESID,
  });

  const getCenterExamSession =
    dataSpecialtyCES && dataSpecialtyCES.centerExamSession;
  const { centerExamSessionSpecialty } = { ...getCenterExamSession };

  const newSpecialty =
    centerExamSessionSpecialty &&
    centerExamSessionSpecialty.map((item) => item);
  const refinedCESS = newSpecialty && removeTypename(newSpecialty);
  const getCESSOptions =
    refinedCESS &&
    refinedCESS.map((item) => ({
      value: item.id.concat("/", item.specialty.id),
      label: item.specialty.specialtyName,
    }));

  const getCESSSubjIDs =state.centerExamSessionSpecialtyID && state.centerExamSessionSpecialtyID.split("/");

  const {
    data: dataRegistration,
    loading: loadingReg,
    error: errReg,
  } = useQuery(getRegisteredCandidatesPerSpecialty, {
    skip:getCESSSubjIDs  && !getCESSSubjIDs[0],
    variables: { id: getCESSSubjIDs &&  getCESSSubjIDs[0] },
  });

  const { centerExamSessionSpecialty: CESS } = { ...dataRegistration };
  const { registration } = { ...CESS };
  const getCandOptions =
    registration &&
    registration.map((item) => ({
      value: item.candExamSecretCode,
      label: item.candidate.cand1stName.concat(
        item.candidate.cand2ndName,
        item.candRegistrationNumber
      ),
    }));

  const {
    data: dataSubjSpecialty,
    loading: loadingSubjSpecialty,
    error: errSubjSpecialty,
  } = useQuery(getAllSubjectSpecialtiesOfASpecialtyQuery, {
    skip: getCESSSubjIDs &&  !getCESSSubjIDs[1],
    variables: { id: getCESSSubjIDs && getCESSSubjIDs[1] },
  });

  const getSubjSpecialty = dataSubjSpecialty && dataSubjSpecialty.specialty;
  const { subjectSpecialty } = { ...getSubjSpecialty };

  const refinedSubjectSpecialty =
    subjectSpecialty && removeTypename(subjectSpecialty);
  const getSubjectSpecialtyOptions =
    refinedSubjectSpecialty &&
    refinedSubjectSpecialty.map((item) => ({
      id: item.id,
      value: item.id,
      label: item.subject.subjectName,
    }));

  const [createAttendance, { loading, error }] = useMutation(
    createAttendanceMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createAttendance({
          variables: {
            ...values,
            candExamSecretCode: values.candExamSecretCode.value,
            centerExamSessionSpecialty:getCESSSubjIDs && getObjectFromID(getCESSSubjIDs[0]),
            subjectSpecialty:
              refinedSubjectSpecialty &&
              getObjectFromID(values.subjectSpecialty.value),
          },
        });

        setTimeout(() => {
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ setFieldValue, isSubmitting, isValid, dirty }) => {
        return (
          <MinimStyledPage>
            <h4>Présence des candidats à l'Ecrit</h4>
            <Error
              error={
                error ||
                errCenter ||
                errExams ||
                errSession ||
                errExamSessions ||
                errSpecialtyCES ||
                errEducType ||
                errSubjSpecialty ||
                errReg
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
                loadingSubjSpecialty ||
                loadingCenter ||
                loadingReg
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
                loadingSubjSpecialty ||
                loadingCenter ||
                loadingReg
              }
            >
              <Form>
                <WholeControls>
                  <InputGroup>
                    <SygexInput
                      value={centerByNumber && centerByNumber.centerCode || "" }
                      name="centerName"
                      type="text"
                      label=" Nom du centre"
                    />
                    <SygexInput
                      onChange={handleChange}
                      name="centerNumber"
                      value={state.centerNumber && state.centerNumber }
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
                      onChange={handleReactSelectChange}
                      name="centerExamSessionSpecialtyID"
                      options={getCESSOptions}
                      placeholder={"Les Spécialités"}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) =>
                        setFieldValue("subjectSpecialty", value)
                      }
                      name="subjectSpecialty"
                      placeholder={"les Matières"}
                      options={getSubjectSpecialtyOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) =>
                        setFieldValue("candExamSecretCode", value)
                      }
                      name="candExamSecretCode"
                      options={getCandOptions}
                      placeholder={"Candidats par Spécialité"}
                      disabled={isSubmitting}
                    />

                    <RadioControls>
                      <RadioButtons>
                        <FormLabel>Collecte Des Materiels</FormLabel>
                        <RadioGroup name="collected" className="RadioSet">
                          <FormikRadio
                            label="Oui"
                            name="collected"
                            value="Oui"
                          />
                          <FormikRadio
                            label="Non"
                            name="collected"
                            value="Non"
                          />
                        </RadioGroup>
                      </RadioButtons>
                      <RadioButtons>
                        <FormLabel>Remise Des Copies</FormLabel>
                        <RadioGroup name="handin" className="RadioSet">
                          <FormikRadio label="Oui" name="handin" value="Oui" />
                          <FormikRadio label="Non" name="handin" value="Non" />
                        </RadioGroup>
                      </RadioButtons>
                    </RadioControls>
                  </InputGroup>

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
          </MinimStyledPage>
        );
      }}
    </Formik>
  );
};
export default CreateAttendance;
