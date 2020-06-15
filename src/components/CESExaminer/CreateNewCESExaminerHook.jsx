
import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { MinimStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage.js';
import Router from 'next/router'
import { Formik, Form } from 'formik';
import { SygexInput, SygefexSelect, StyledForm, ButtonStyled, StyledButton } from '../utils/FormInputs'
import styled from 'styled-components';
import * as Yup from 'yup';
import useForm from '../utils/useForm'
import { getSelectedObject, removeTypename } from '../queries&Mutations&Functions/Functions';
import { createCenterExamSessionExaminerMutation } from '../queries&Mutations&Functions/Mutations';
import {
    getExamSessionQuery,
    getAllExamsQuery,
    getAllSessionsQuery,
    getSingleCenterExamSessionQuery,
    getSingleCenterQuery,
    getAllPhasesQuery,
    getAllRanksOfAnExamPhaseQuery
} from '../queries&Mutations&Functions/Queries';

const InputGroup = styled.div`
    
    display: flex;
    flex-direction:column;
    min-width:13rem;
    margin:0 1rem;
    padding-bottom:0;
    margin-bottom:0;
   
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
        // phase: Yup
        //     .string()
        //     .required("Choix de la phase de l'examen Obligatoire"),
        phaseRank: Yup
            .string()
            .required("Choix du poste exige"),
        examinerCode: Yup
            .string()
            .required("Code secret examinateur Obligatoire"),
        // centerNumber: Yup
        //     .number()
        //     .min(0, 'Pas de note négative')
        //     .required('No du centre obligatoire'),
    });

const CreateNewCESExaminer = () => {

    const initialValues = {

        phaseRank: "",
        examinerCode: ""

    };
    const [state, setState, handleReactSelectChange] = useForm({ centerNumber: "", examID: "", sessionID: "", phaseID: "" })

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



    const makeExaminerObject = (profCodeValue) => {
        const storedProf = {
            examinerCode: `${profCodeValue}`
        };
        return storedProf;
    };
    const makeCESSObject = (candCodeValue) => {
        const objCESS = {
            id: `${candCodeValue}`
        };
        return objCESS;
    };
    const onSelectCustomerHandler = (data, setFieldValue) => {
        setFieldValue('customerName', data.name);
        setFieldValue('customerId', data.id);
    };


    const { data: dataExams, loading: loadingExams, errorExams } = useQuery(getAllExamsQuery)
    { loadingExams && <p>loading...</p>; }
    { errorExams && <Error error={errorExams} />; }

    const getExams = dataExams && dataExams.exams;
    console.log(getExams);
    const removeExamName = getExams && getExams.map(({ examName, ...others }) => others)
    const refinedExams = getExams && removeTypename(removeExamName)
    const getExamOptions = getExams && getExams.map((item) => ({ value: item.id, label: item.examName }))

    const { data: dataSession, loading: loadingSession, errorSession } = useQuery(getAllSessionsQuery)
    { loadingSession && <p>loading...</p>; }
    { errorSession && <Error error={errorSession} />; }

    const getSessions = dataSession && dataSession.sessions;
    const refinedSessions = removeTypename(getSessions)
    const getSessionOptions = getSessions && getSessions.map((item) => ({ ...item, value: item.id, label: item.sessionName }))


    const { data: dataExamSession, loading: loadingExamSession, errorExamSession } = useQuery(getExamSessionQuery, {
        skip: !state.examID || !state.sessionID,
        variables: {
            exam: getExams && getSelectedObject(refinedExams, state.examID),
            session: getSessions && getSelectedObject(refinedSessions, state.sessionID)
        }
    })
    { loadingExamSession && <p>loading...</p>; }
    { errorExamSession && <Error error={errorExamSession} />; }


    console.log(dataExamSession)
    const getExamSessions = dataExamSession && dataExamSession.examSessions
    const refinedES = getExamSessions && removeTypename(getExamSessions)
    const reducedES = refinedES && refinedES[0]
    console.log(reducedES)

    const { data: dataCenter, loading: loadingCenter, errorCenter } = useQuery(getSingleCenterQuery, {
        skip: !state.centerNumber,
        variables: {
            centerNumber: state.centerNumber
        }
    })
    { loadingCenter && <p>loading...</p>; }
    { errorCenter && <Error error={errorCenter} />; }


    const getCenterByNumber = dataCenter && dataCenter.centerByNumber
    const newCenter = getCenterByNumber && removeTypename(getCenterByNumber)
    console.log(newCenter)

    const { data: dataCES, loading: loadingCES, errorCES } = useQuery(getSingleCenterExamSessionQuery, {
        skip: !reducedES || !getCenterByNumber,
        variables: {
            examSession: reducedES && reducedES,
            center: newCenter && newCenter
        }
    })
    { loadingCES && <p>loading...</p>; }
    { errorCES && <Error error={errorCES} />; }


    console.log(dataCES);
    const getCenterExamSessionsByCode = dataCES && dataCES.centerExamSessionsByCode;
    console.log(getCenterExamSessionsByCode);
    // remove typename from the object
    const refinedCenterExamSessionsByCode = getCenterExamSessionsByCode && removeTypename(getCenterExamSessionsByCode);
    // transform the array into a single object
    const getCES = refinedCenterExamSessionsByCode && refinedCenterExamSessionsByCode[0]
    console.log(getCES);



    const { data: dataPhase, loading: loadingPhase, error: errorPhase } = useQuery(getAllPhasesQuery)

    { loadingPhase && <p>loading...</p>; }
    { errorPhase && <Error error={errorPhase} />; }
    console.log(dataPhase);

    const getPhases = dataPhase && dataPhase.phases;
    console.log(getPhases);
    const refinedPhase = getPhases && removeTypename(getPhases);
    console.log(refinedPhase);

    const getPhaseOptions = getPhases && getPhases.map(item => ({ ...item, value: item.id, label: item.phaseName }));


    const { data: dataRankPhase, loading: loadingRankPhase, error: errorRankPhase } = useQuery(getAllRanksOfAnExamPhaseQuery, { variables: { id: state.phaseID } })

    { loadingRankPhase && (<p> loading... </p>); }
    { errorRankPhase && (<Error error={errorRankPhase} />); }
    console.log(dataRankPhase);
    const getThePhase = dataRankPhase && dataRankPhase.phase;
    const { phaseRank } = { ...getThePhase }
    const refinedPhaseRanks = phaseRank && removeTypename(phaseRank)
    const getPhaseRankOptions = refinedPhaseRanks && refinedPhaseRanks.map(item => ({ ...item, value: item.id, label: item.rankName }))
    console.log(phaseRank);


    const [CreateCenterExamSessionExaminer, { loading, error }] = useMutation(createCenterExamSessionExaminerMutation)

    return (
        <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions, setSubmitting, resetForm) => {
                const res = await CreateCenterExamSessionExaminer({
                    variables: {
                        ...values,
                        examiner: makeExaminerObject(values.examinerCode),
                        centerExamSession: getCES && getCES,
                        phaseRank: refinedPhaseRanks && { id: values.phaseRank.value }
                    }

                });
                res && Router.push({
                    pathname: '/show/examinerRegReceipt',
                    query: { id: res.data.createCenterExamSessionExaminer.id },
                });
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    console.log(res);
                    actions.resetForm(true);
                    actions.setSubmitting(false);
                }, 400);
            }}>
            {({ values, setFieldValue, isSubmitting }) => (

                <MinimStyledPage>
                    <h4> Inscription d'examinateur</h4>
                    <Error error={error} />
                    <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
                        <Form>
                            <AllControls>
                                <InputGroup>
                                    <SygexInput
                                        value={getCenterByNumber && getCenterByNumber.centerCode}
                                        name="centerName"
                                        type="text"
                                        label=" Nom du centre"
                                        disabled={isSubmitting}
                                    />
                                    <SygexInput
                                        onChange={handleChange}
                                        name="centerNumber"
                                        type="number"
                                        value={state.centerNumber || ''}
                                        label="no du centre"
                                        disabled={isSubmitting}
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
                                        name="phaseID"
                                        options={getPhaseOptions}
                                        placeholder={"La phase l'Examen"}
                                        disabled={isSubmitting}

                                    />
                                    <SygefexSelect
                                        onChange={(value) => (setFieldValue('phaseRank', value))}
                                        name="phaseRank"
                                        options={getPhaseRankOptions}
                                        placeholder={"Le poste"}
                                        disabled={isSubmitting}
                                    />
                                    <SygexInput
                                        name="examinerCode"
                                        type="text"
                                        label="Code de l'Examinateur"
                                        disabled={isSubmitting}
                                    />
                                </InputGroup>
                                <ButtonStyled>
                                    <StyledButton type="submit">Valid{isSubmitting ? 'ation en cours' : 'er'}</StyledButton>
                                </ButtonStyled>
                            </AllControls>
                        </Form>
                    </StyledForm>
                </MinimStyledPage>
            )
            }
        </Formik>

    )


}
export default CreateNewCESExaminer