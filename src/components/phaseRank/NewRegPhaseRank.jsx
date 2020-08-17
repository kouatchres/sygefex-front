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
import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
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
  initialValues = {
    phase: "",
    rank: "",
  };

  const { data, loadingPhase, error } = useQuery(getAllPhasesQuery);

  {
    loadingPhase && <p>loading...</p>;
  }
  {
    error && <Error error={error} />;
  }
  console.log(data);

  const { phases } = data;
  console.log(phases);
  const refinedPhase =
    phases && phases.map(({ __typename, ...others }) => others);

  const getPhases =
    refinedPhase &&
    refinedPhase.map((item) => ({
      ...item,
      value: item.id,
      label: item.phaseName,
    }));
  const { data: dataRanks, loading: loadingRanks, error: errRanks } = useQuery(
    getAllRanksQuery
  );

  {
    loadingRanks && <p>loading...</p>;
  }
  {
    errRanks && <Error error={errRanks} />;
  }
  console.log(data);

  const { ranks } = dataRanks;

  const refinedRank = ranks && ranks.map(({ __typename, ...others }) => others);
  const getRanks =
    refinedRank &&
    refinedRank.map((item) => ({
      ...item,
      value: item.id,
      label: item.rankName,
    }));
  const [createPhaseRank, { loading: loadingMut, Error: errMut }] = useMutation(
    createPhaseRankMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={this.initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions, setSubmitting, resetForm) => {
        const res = await createPhaseRank({
          variables: {
            ...values,
            rankName: ranks && values.rank.rankName,
            rankCode: ranks && values.rank.rankCode,
            phase: refinedPhase && getObjectFromID(values.phase.id),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          actions.resetForm(true);
          actions.setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Postes des Phases de l'Examen</h4>
            <Error error={error} />
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
                      Valid{loading ? "ation en cours" : "er"}
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
