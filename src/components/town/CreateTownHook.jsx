import { Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { getObjectFromID } from "../queries&Mutations&Functions/Functions";
import { createTownMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getDivisionsOfARegionQuery,
  getAllRegionsQuery,
  getSubDivisionsOfADivisionQuery,
} from "../queries&Mutations&Functions/Queries";
import { MinimStyledPage } from "../styles/StyledPage";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import useForm from "../utils/useForm";
import Error from "../ErrorMessage.js";
import { useMutation, useQuery } from "@apollo/react-hooks";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 13rem;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const validationSchema = Yup.object().shape({
  subDiv: Yup.string().required("Choix de l'arrondissement Obligatoire"),
  townName: Yup.string().required("Nom de la ville Obligatoire"),
  townCode: Yup.string().required("Code de la ville Obligatoire"),
});

const CreateTownHook = () => {
  const initialValues = {
    townName: "",
    townCode: "",
    subDiv: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    regionID: "",
    divisionID: "",
  });

  const { data: dataRegions, loading: loadingReg, error: errReg } = useQuery(
    getAllRegionsQuery
  );
  {
    loadingReg && <p>loading...</p>;
  }
  {
    errReg && <Error error={errReg} />;
  }
  console.log(dataRegions);
  const getCountry = dataRegions && dataRegions.regions;
  console.log(getCountry);
  const getRegionsOptions =
    getCountry &&
    getCountry.map((item) => ({ value: item.id, label: item.regName }));
  console.log(state.regionID);

  const { data: dataRegion, loading: loadingDiv, error: errRegion } = useQuery(
    getDivisionsOfARegionQuery,
    {
      skip: !state.regionID,
      variables: { id: state.regionID },
    }
  );
  {
    loadingDiv && <p>loading...</p>;
  }
  {
    errRegion && <Error error={errRegion} />;
  }
  console.log(dataRegion);
  const getRegion = dataRegion && dataRegion.region;
  const { division } = { ...getRegion };
  console.log(division);
  const getDivOptions =
    division &&
    division.map((item) => ({ value: item.id, label: item.divName }));

  console.log(state.divisionID);

  const {
    data: dataDivision,
    loading: loadingSubDiv,
    error: errDivision,
  } = useQuery(getSubDivisionsOfADivisionQuery, {
    skip: !state.divisionID,
    variables: { id: state.divisionID },
  });
  {
    loadingSubDiv && <p>loading...</p>;
  }
  {
    errDivision && <Error error={errDivision} />;
  }
  console.log(dataDivision);
  const getDivision = dataDivision && dataDivision.division;
  const { subDivision } = { ...getDivision };
  console.log(subDivision);
  const getSubDivOptions =
    subDivision &&
    subDivision.map((item) => ({ value: item.id, label: item.subDivName }));

  const [createTown, { loading, error }] = useMutation(createTownMutation, {
    refetchQueries: ["getAllTownsQuery"],
  });
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createTown({
          variables: {
            ...values,
            subDiv: values.subDiv && getObjectFromID(values.subDiv.value),
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
      {({ values, setFieldValue, isSubmitting, isValid, dirty }) => {
        return (
          <MinimStyledPage>
            <h4>Nouvelle Ville</h4>
            <Error error={error} />
            <StyledForm
              disabled={
                isSubmitting || loadingRegion || loading || loadingSubDiv
              }
              aria-busy={
                isSubmitting || loadingRegion || loading || loadingSubDiv
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="regionID"
                      placeholder={"La Région"}
                      options={getRegionsOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="divisionID"
                      placeholder={"Le Département"}
                      options={getDivOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) => setFieldValue("subDiv", value)}
                      name="subDiv"
                      placeholder="L'Arrondissement"
                      options={getSubDivOptions}
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="townName"
                      type="text"
                      label="Nom de la ville"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="townCode"
                      type="text"
                      label="Code de la ville"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton
                      type="submit"
                      disabled={!(dirty || isValid) && isSubmitting}
                    >
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
export default CreateTownHook;
