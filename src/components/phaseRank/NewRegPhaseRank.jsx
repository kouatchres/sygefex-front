import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import {
  SygefexSelect,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { createPhaseRankMutation } from "../queries&Mutations&Functions/Mutations";
import { getObjectFromID, removeTypename } from "../queries&Mutations&Functions/Functions";
import {
  getAllPhasesQuery,
  getAllRanksQuery,
} from "../queries&Mutations&Functions/Queries";
import { useQuery, useMutation } from "@apollo/react-hooks";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const validationSchema = Yup.object().shape({
  phase: Yup.string().required("Choix de la phase de l'examen Obligatoire"),
  rank: Yup.string().required("Choix du poste Obligatoire"),
});

const NewRegPhaseRank = () => {
const  initialValues = {
    phase: "",
    rank: "",
  };

  const { data, loadingPhase, errorPhase } = useQuery(getAllPhasesQuery);

  
  console.log(data);

  const allPhases =data &&  data.phases;
  console.log(allPhases);
  const refinedPhase =allPhases && removeTypename(allPhases);
  console.log(refinedPhase);

  const getPhases =
    refinedPhase &&
    refinedPhase.map((item) => ({
      value: item.id,
      label: item.phaseName,
    }))
  const { data: dataRanks, loading: loadingRanks, error: errRanks } = useQuery(
    getAllRanksQuery
  );

  
  
  const AllRanks  = dataRanks   && dataRanks.ranks;
  
  const refinedRank = AllRanks && removeTypename(AllRanks)
  console.log(refinedRank);
  const getRanks =
    refinedRank &&
    refinedRank.map((item) => ({
      value: item.id,
      label: item.rankName,
    }))
  const [createPhaseRank, { loading: loadingMut, Error: errMut }] = useMutation(
    createPhaseRankMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values,{ setSubmitting, resetForm}) => {
        const res = await createPhaseRank({
          variables: {
            ...values,
            phase: refinedPhase && getObjectFromID(values.phase.value),
            rank: refinedRank && getObjectFromID(values.rank.value),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Postes des Phases de l'Examen</h4>
            <Error error={errMut || errRanks || errorPhase} />
            <StyledForm
              disabled={loadingMut || loadingRanks || loadingPhase}
              aria-busy={loadingMut || loadingRanks || loadingPhase}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      name="phase"
                      onChange={(value) => setFieldValue("phase", value)}
                      options={getPhases}
                      placeholder={"La Phase de l'Examen"}
                    />

                    <SygefexSelect
                      name="rank"
                      onChange={(value) => setFieldValue("rank", value)}
                      options={getRanks}
                      placeholder={"Poste de responsabilité tenu"}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton disables={isSubmitting} type="submit">
                      Valid{loadingMut ? "ation en cours" : "er"}
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
export default NewRegPhaseRank;
