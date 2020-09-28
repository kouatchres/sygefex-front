import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import { Formik, Form } from "formik";
import {
  SygexInput,
  SygefexSelect,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import Error from "../ErrorMessage";
import * as Yup from "yup";
import useForm from "../utils/useForm";
import { createNewReportMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getSelectedObject,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import {
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery,
  getSingleCenterExamSessionQuery,
  getSingleCenterQuery,
  getCESExaminerQuery,
} from "../queries&Mutations&Functions/Queries";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  img {
    margin: 0 auto;
    height: 15rem;
    width: 15rem;
    border-radius: 15px;
    background-size: contain;
    background-position: center;
  }
`;

const validationSchema = Yup.object().shape({
  reportName: Yup.string().required("Nom de rapport obligatoire"),
  examID: Yup.string().required("Choix De l'examen Obligatoire"),
  sessionID: Yup.string().required("Choix de la session Obligatoire"),

  examinerCode: Yup.string().required("Code secret examinateur Obligatoire"),
  centerNumber: Yup.number()
    .min(0, "Pas de note négative")
    .required("No du centre obligatoire"),
});

const CreateNewReportHook = () => {
  const initialValues = {
    reportName: "",
    reportImage: "",
    centerNumber: "",
    examinerCode: "",
  };

  const [state, setState, handleReactSelectChange] = useForm({
    reportImage: "",
    examID: "",
    sessionID: "",
    centerNumber: "",
    examinerCode: "",
  });

  const makeExaminerObject = (profCodeValue) => {
    const storedProf = {
      examinerCode: `${profCodeValue}`,
    };
    return storedProf;
  };


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ineximages");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/inex/reportImage/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setState({ ...state, reportImage: file.secure_url });
  };

  const { data: dataExams, loading: loadingExams, errExams } = useQuery(
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

  const { data: dataSession, loading: loadingSession, errSession } = useQuery(
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
    error: errExamSession,
  } = useQuery(getExamSessionQuery, {
    skip: !state.examID || !state.sessionID,
    variables: {
      exam: refinedExams && getSelectedObject(refinedExams, state.examID),
      session:
        refinedSessions && getSelectedObject(refinedSessions, state.sessionID),
    },
  });
  

  console.log(dataExamSession);
  const getExamSessions = dataExamSession && dataExamSession.examSessions;
  const refinedES = getExamSessions && removeTypename(getExamSessions);
  const reducedES = refinedES && refinedES[0];
  console.log(reducedES);

  const { data: dataCenter, loading: loadingCenter, errCenter } = useQuery(
    getSingleCenterQuery,
    {
      skip: !state.centerNumber,
      variables: {
        centerNumber: state.centerNumber,
      },
    }
  );
  
  const getCenterByNumber = dataCenter && dataCenter.centerByNumber;
  const newCenter = getCenterByNumber && removeTypename(getCenterByNumber);
  console.log(newCenter);

  const { data: dataCES, loading: loadingCES, errorCES } = useQuery(
    getSingleCenterExamSessionQuery,
    {
      skip: !reducedES || !getCenterByNumber,
      variables: {
        examSession: reducedES && reducedES,
        center: newCenter && newCenter,
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
    data: dataExaminer,
    loading: loadingExaminer,
    error: errExaminer,
  } = useQuery(getCESExaminerQuery, {
    skip: !getCES || !state.examinerCode,
    variables: {
      centerExamSession: getCES && getCES,
      examiner: state.examinerCode && makeExaminerObject(state.examinerCode),
    },
  });
  

  const getCESExaminers =
    dataExaminer && dataExaminer.getCenterExamSessionExaminers;
  console.log(getCESExaminers);
  const refinedCESExaminer = getCESExaminers && removeTypename(getCESExaminers);
  const reducedCESExaminer = refinedCESExaminer && refinedCESExaminer[0];
  console.log(reducedCESExaminer);

  const [createReport, { loading, error }] = useMutation(
    createNewReportMutation
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createReport({
          variables: {
            ...values,
            reportImage: state.reportImage,
            centerExamSessionExaminer: reducedCESExaminer && reducedCESExaminer,
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm({ values: "" });
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Nouveau Rapport</h4>
            <Error error={
              error ||  
               errExams ||
                errSession ||
                errExamSession ||
                errCenter ||
                errCES ||
                errExaminer
              } />
            <StyledForm
              disabled={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingExamSession ||
                loadingCenter ||
                loadingCES ||
                loadingExaminer ||
                loading ||
              }
              aria-busy={
                isSubmitting ||
                loadingExams ||
                loadingSession ||
                loadingExamSession ||
                loadingCenter ||
                loadingCES ||
                loadingExaminer ||
                loading ||
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygexInput
                      value={newCenter && newCenter.centerCode}
                      name="centerName"
                      type="text"
                      label=" Nom du centre"
                      disabled
                    />
                    <SygexInput
                      value={state.centerNumber}
                      onChange={handleChange}
                      name="centerNumber"
                      type="number"
                      label="Numero du centre"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="file"
                      type="file"
                      onChange={uploadFile}
                      disabled={isSubmitting}
                    />

                    <SygefexSelect
                      options={getSessionOptions}
                      onChange={handleReactSelectChange}
                      name="sessionID"
                      placeholder="La session"
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      options={getExamOptions}
                      onChange={handleReactSelectChange}
                      name="examID"
                      placeholder="L'Examen"
                      disabled={isSubmitting}
                    />

                    <SygexInput
                      name="reportName"
                      type="text"
                      label="Titre du Rapport"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      onChange={handleChange}
                      value={state.examinerCode}
                      name="examinerCode"
                      type="text"
                      label="Code Secret de l'examinateur"
                      disabled={isSubmitting}
                    />
                    <PicFrame>
                      {state.reportImage && (
                        <img src={state.reportImage} alt={reportImage} />
                      )}
                    </PicFrame>
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
export default CreateNewReportHook;
