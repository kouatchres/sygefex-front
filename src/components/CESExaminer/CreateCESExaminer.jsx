import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import Router from "next/router";
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
import {removeTypename} from "../queries&Mutations&Functions/Functions";
import { createCenterExamSessionExaminerMutation } from "../queries&Mutations&Functions/Mutations";
import {
 getSingleCenterExamSessionBySecretCodeQuery,
  getAllPhasesQuery,
getSingleCenterFromCenterSecretCodeQuery,
  getAllRanksOfAnExamPhaseQuery,
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
  CESCode: Yup
      .string()
      .required("Code secret du centre Obligatoire"),
  phaseRank: Yup.string().required("Choix du poste exige"),
  examinerCode: Yup.string().required("Code secret examinateur Obligatoire"),
  });

const CreateCESExaminer = () => {
  const initialValues = {
    phaseRank: "",
    examinerCode: "",
    CESCode: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    CESCode: "",
    phaseID: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };



  const makeExaminerObject = (profCodeValue) => {
    const storedProf = {
      examinerCode: `${profCodeValue}`,
    };
    return storedProf;
  };
 

  const { data: dataCenter, loading: loadingCenter, errorCenter } = useQuery(
    getSingleCenterFromCenterSecretCodeQuery,
    {
      skip: !state.CESCode,
      variables: {
        CESCode: state.CESCode,
      },  
    }
  );
  

  const getCenterBySecretCode = dataCenter && dataCenter.centerBySecretCode;
  const newCenter = getCenterBySecretCode && removeTypename(getCenterBySecretCode);
  console.log(newCenter);

  const { data: dataCES, loading: loadingCES, errorCES } = useQuery(
    getSingleCenterExamSessionBySecretCodeQuery,
    {
      skip: !newCenter,
      variables: {CESCode: newCenter && newCenter,},
    }
  );
 

  console.log(dataCES);
  const getCenterExamSessionBySecretCode =
    dataCES && dataCES.centerExamSessionBySecretCode;
  console.log(getCenterExamSessionBySecretCode);
  // remove typename from the object
  const refinedCenterExamSessionByCode =
    getCenterExamSessionBySecretCode && removeTypename(getCenterExamSessionBySecretCode);
  // transform the array into a single object
  const getCES =
    refinedCenterExamSessionByCode && refinedCenterExamSessionByCode[0];
  console.log(getCES);



  const {
    data: dataPhase,
    loading: loadingPhase,
    error: errorPhase,
  } = useQuery(getAllPhasesQuery);

  
  console.log(dataPhase);

  const getPhases = dataPhase && dataPhase.phases;
  console.log(getPhases);
  const refinedPhase = getPhases && removeTypename(getPhases);
  console.log(refinedPhase);

  const getPhaseOptions =
    getPhases &&
    getPhases.map((item) => ({
      ...item,
      value: item.id,
      label: item.phaseName,
    }));

  const {
    data: dataPhaseRank,
    loading: loadingPhaseRank,
    error: errorPhaseRank,
  } = useQuery(getAllRanksOfAnExamPhaseQuery, {
    variables: { id: state.phaseID },
  });

 
  console.log(dataPhaseRank);
  const getThePhase = dataPhaseRank && dataPhaseRank.phase;
  const { phaseRank } = { ...getThePhase };
  const { phase, rank } = { ...phaseRank };
  const refinedPhaseRanks = phaseRank && removeTypename(phaseRank);
  const getPhaseRankOptions =
    refinedPhaseRanks &&
    refinedPhaseRanks.map((item) => ({
      ...item,
      value: item.id,
      label: item.rank.rankName,
    }));
  console.log(phaseRank);

  const [CreateCenterExamSessionExaminer, { loading, error }] = useMutation(
    createCenterExamSessionExaminerMutation
  );

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values,  {setSubmitting, resetForm}) => {
        const res = await CreateCenterExamSessionExaminer({
          variables: {
            ...values,
            examiner: makeExaminerObject(values.examinerCode),
            centerExamSession: getCES && getCES,
            phaseRank: refinedPhaseRanks && { id: values.phaseRank.value },
          },
        });
        res &&
          Router.push({
            pathname: "/show/examinerRegReceipt",
            query: { id: res.data.createCenterExamSessionExaminer.id },
          });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <MinimStyledPage>
          <h4> Inscription d'examinateur</h4>
          <Error error={
            error  || 
              errorCenter ||
              errorCES ||
              errorPhase ||
              errorPhaseRank} />
          <StyledForm
            disabled={
              isSubmitting ||
              loadingCenter ||
              loadingCES ||
              loadingPhase ||
              loading ||
              loadingPhaseRank 
            }
            aria-busy={
              isSubmitting ||
              loadingCenter ||
              loadingCES ||
              loadingPhase ||
              loading ||
              loadingPhaseRank 
            }
          >
            <Form>
              <AllControls>
                <InputGroup>
                  <SygexInput
                    value={getCenterBySecretCode && getCenterBySecretCode.centerSecretCode}
                    name="centerName"
                    type="text"
                    label=" Nom du centre"
                    disabled={isSubmitting}
                  />
                  <SygexInput
                    onChange={handleChange}
                    name="CESCode"
                    type="text"
                    value={state.CESCode || ""}
                    label="code secret du centre"
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
                    onChange={(value) => setFieldValue("phaseRank", value)}
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
                  <StyledButton type="submit">
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </StyledButton>
                </ButtonStyled>
              </AllControls>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )}
    </Formik>
  );
};
export default CreateCESExaminer;
