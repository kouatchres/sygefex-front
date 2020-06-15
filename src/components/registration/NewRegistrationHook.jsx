
import React, { useEffect } from 'react';
import { useMutation, useQuery, useLazyQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Router from 'next/router'
import { Formik, Form } from 'formik';
import { SygefexSelect, SygexInput, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import useForm from '../utils/useForm'
import * as Yup from 'yup';
import { getSelectedObject, removeTypename, uniqueCodeGen, candExamSessionCode } from '../queries&Mutations&Functions/Functions';
import { createRegistrationMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getAllSeriesOfACenterExamSessionQuery,
    getCenterExamSessionSeriesQuery,
    getSingleCenterQuery
} from '../queries&Mutations&Functions/Queries';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
   
`;
const AllControls = styled.div`
  display: flex;
flex-direction:column;
/* min-width: 17rem; */
`;

const validationSchema = Yup
    .object()
    .shape({
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

const NewRegistrationHook = () => {
    const initialValues = {

        centerNumber: "",
        candCode: "",
    };
    const [state, setState, handleReactSelectChange] = useForm({ seriesID: "", centerNumber: "", examID: "", sessionID: "" })

    const handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseInt(value) : value;
        setState({ [name]: val });
    };

    const makeCenterVariableObject = (centerCodeValue) => {
        const storedCenter = {
            centerNumber: `${centerCodeValue}`
        };
        return storedCenter;
    };

    const candRegistrationNumber = (centerCode, exam, session) => {

        return `${centerCode + exam + session}`

    };
    const makeCandVariableObject = (candCodeValue) => {
        const storedCandidate = {
            candCode: `${candCodeValue}`
        };
        return storedCandidate;
    };
    const makeCESSObject = (candCodeValue) => {
        const objCESS = {
            id: `${candCodeValue}`
        };
        return objCESS;
    };
    // useEffect(() => {
    //     {
    //         state.examID && state.sessionID && showExamSessions({
    //             variables: {
    //                 exam: getExamName,
    //                 session: getSessionName
    //             }
    //         })
    //     }

    // }, [state.examID, state.sessionID])


    const { data: dataExams, loading: loadingExams, error: errExams } = useQuery(getAllExamsQuery)
    { loadingExams && <p>loading...</p>; }
    { errExams && <Error error={errExams} />; }
    const getExams = dataExams && dataExams.exams;
    const removeExamName = getExams && getExams.map(({ examName, ...others }) => others)
    const refinedExams = getExams && removeTypename(removeExamName);

    const getExamName = refinedExams && { ...getSelectedObject(refinedExams, state.examID) }
    const getExamsOptions = getExams && getExams.map((item) => ({ value: item.id, label: item.examName }))
    console.log(getExamName);

    const { data: dataSession, loading: loadingSession, error: errSession } = useQuery(getAllSessionsQuery)
    { loadingSession && <p> loading...</p>; }
    { errSession && <Error error={errSession} />; }
    const getSessions = dataSession && dataSession.sessions;

    const refinedSessions = getSessions && removeTypename(getSessions);

    const getSessionName = refinedSessions && { ...getSelectedObject(refinedSessions, state.sessionID) }
    const getSessionsOptions = refinedSessions && refinedSessions.map((item) => ({ value: item.id, label: item.sessionName }))

    const { data: dataExamSessions, error: errExamSessions, loading: loadingExamSessions } = useQuery(getExamSessionQuery, {
        skip: !state.examID || !state.sessionID,
        variables: {
            exam: getExamName,
            session: getSessionName
        }
    })

    { loadingExamSessions && <p>...Loading</p> }
    { errExamSessions && <Error error={errExamSessions} /> }
    console.log(dataExamSessions)
    const getExamSessions = dataExamSessions && dataExamSessions.examSessions
    const refinedES = getExamSessions && removeTypename(getExamSessions)
    const reducedES = refinedES && refinedES[0]
    console.log(reducedES)

    const { data: dataCenter, error: errCenter, loading: loadingCenter } = useQuery(getSingleCenterQuery, { variables: { centerNumber: state.centerNumber } })
    { loadingCenter && <p>...Loading</p> }
    { errCenter && <Error error={errCenter} /> }
    const { centerByNumber } = { ...dataCenter }
    const newCenterByNumber = removeTypename(centerByNumber)
    console.log(newCenterByNumber)


    const { data: dataCES, error: errCES, loading: loadingCES } = useQuery(getSingleCenterExamSessionQuery, {

        skip: !reducedES || !newCenterByNumber,
        variables: {
            examSession: reducedES && reducedES,
            center: newCenterByNumber && newCenterByNumber
        }
    })
    { loadingCES && <p>...Loading</p> }
    { errCES && <Error error={errCES} /> }
    console.log(dataCES);
    const getCenterExamSessionsByCode = dataCES && dataCES.centerExamSessionsByCode
    console.log(getCenterExamSessionsByCode);
    const refinedCenterExamSessions =
        getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
    // transform the array into a single object
    const getCESID = refinedCenterExamSessions && refinedCenterExamSessions[0]
    console.log(getCESID);

    const { data: dataSeriesCES, loading: loadingSeriesCES, error: errSeriesCES } = useQuery(getAllSeriesOfACenterExamSessionQuery, {
        variables: getCESID
    })
    { loadingSeriesCES && <p>...Loading</p> }
    { errSeriesCES && <Error error={errSeriesCES} /> }
    console.log(dataSeriesCES);
    const getCenterExamSession = dataSeriesCES && dataSeriesCES.centerExamSession;
    const { centerExamSessionSeries } = { ...getCenterExamSession };
    console.log(centerExamSessionSeries);

    const newSeries = centerExamSessionSeries && centerExamSessionSeries.map((item) => (item.series))
    const refinedSeries =
        newSeries && removeTypename(newSeries);
    console.log(refinedSeries);
    const getSeriesOptions = refinedSeries && refinedSeries.map((item) => ({ value: item.id, label: item.seriesName }))

    const { data: dataCESS, eerror: errCESS, loading: loadingCESS } = useQuery(getCenterExamSessionSeriesQuery, {
        skip: !getCESID || !state.seriesID,
        variables: {
            centerExamSession: getCESID && getCESID,
            series: { id: state.seriesID },
        },
    })
    { loadingCESS && <p>...Loading</p> }
    { errCESS && <Error error={errCESS} /> }
    console.log(refinedSeries && getSelectedObject(refinedSeries, state.seriesID));
    const { centerExamSessionSerieses } = { ...dataCESS }
    const getCESS = centerExamSessionSerieses && centerExamSessionSerieses[0]
    const { id: idObj } = { ...getCESS }
    const refinedCESS = idObj && makeCESSObject(idObj)
    console.log('CESS', refinedCESS)

    console.log(getExamName);
    console.log(getSessionName);
    const [createRegistration, { loading, error }] = useMutation(createRegistrationMutation)
    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await createRegistration({
                    variables: {
                        ...values,
                        candExamSecretCode: uniqueCodeGen(12),
                        candidate: makeCandVariableObject(values.candCode),
                        centerExamSession: { id: getCenterExamSession.id },
                        series: { id: state.seriesID },
                        centerExamSessionSeries: refinedCESS,
                        candExamSession: candExamSessionCode(values.candCode, state.examID, state.sessionID),
                        candRegistrationNumber: refinedExams && refinedSessions && candRegistrationNumber(state.centerNumber, getExamName.examCode, getSessionName.sessionName)
                    }

                });
                res && Router.push({
                    pathname: '/show/results/registrationReceipt',
                    query: { id: res.data.createRegistration.id },
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>
            {({ setFieldValue, isSubmitting }) => {

                return (


                    <MinimStyledPage>
                        <h4>Inscription à l'Examen</h4>
                        <Error error={error} />
                        <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                            <Form>
                                <AllControls>
                                    <InputGroup>
                                        <SygexInput
                                            value={centerByNumber && centerByNumber.centerCode}
                                            name="centerName" type="text" label=" Nom du centre" />
                                        <SygexInput onChange={handleChange} name="centerNumber" value={state.centerNumber} type="number" label="Numéro du centre" disabled={isSubmitting} />

                                        <SygefexSelect onChange={handleReactSelectChange} name="sessionID" options={getSessionsOptions} placeholder={'La Session'} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="examID" options={getExamsOptions} placeholder={"L'Examen"} disabled={isSubmitting} />
                                        <SygefexSelect onChange={handleReactSelectChange} name="seriesID" options={getSeriesOptions} placeholder={'La Série'} disabled={isSubmitting} />

                                        <SygexInput name="candCode" type="text" label="Code secret candidat" disabled={isSubmitting} />
                                    </InputGroup>
                                    <ButtonStyled>
                                        <StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
                                    </ButtonStyled>
                                </AllControls>
                            </Form>
                        </StyledForm>
                    </MinimStyledPage>
                )
            }}
        </Formik>
    );
}
export default NewRegistrationHook;