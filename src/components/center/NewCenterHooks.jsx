import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
  SygefexSelect,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getObjectFromID,
  uniqueCodeGen,
} from "../queries&Mutations&Functions/Functions";

import {
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getTownsOfASubDivisionQuery,
} from "../queries&Mutations&Functions/Queries";

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

const validationSchema = Yup.object().shape({
  centerName: Yup.string().required("Nom du Centre Obligatoire"),
  centerCode: Yup.string().required("Code centre Obligatoire"),
  centerNumber: Yup.number()
    .min(1, "Numéro centre du doit etre Positif")
    .required("Numéro centre Obligatoire"),
});

const NewCenterHooks = () => {
  const initialValues = {
    centerName: "",
    centerCode: "",
    town: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    regionID: "",
    divisionID: "",
    subDivID: "",
  });

  const { data: dataRegions, loading: loadingRegs, error: errRegs } = useQuery(
    getAllRegionsQuery
  );
 
  console.log(dataRegions);
  const getRegions = dataRegions && dataRegions.regions;
  console.log(getRegions);
  const getRegionsOptions =
    getRegions &&
    getRegions.map((item) => ({ value: item.id, label: item.regName }));
  console.log(state.regionID);

  const {
    data: dataRegion,
    loading: loadingRegion,
    error: errRegion,
  } = useQuery(getDivisionsOfARegionQuery, {
    skip: !state.regionID,
    variables: { id: state.regionID },
  });
  
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
    loading: loadingDiv,
    error: errDivision,
  } = useQuery(getSubDivisionsOfADivisionQuery, {
    skip: !state.divisionID,
    variables: { id: state.divisionID },
  });
  
  console.log(dataDivision);
  const getDivision = dataDivision && dataDivision.division;
  const { subDivision } = { ...getDivision };
  console.log(subDivision);
  const getSubDivOptions =
    subDivision &&
    subDivision.map((item) => ({ value: item.id, label: item.subDivName }));

  const {
    data: dataSubDivision,
    loading: loadingSubDiv,
    error: errSubDivision,
  } = useQuery(getTownsOfASubDivisionQuery, {
    skip: !state.subDivID,
    variables: { id: state.subDivID },
  });
 
  console.log(dataSubDivision);
  const getSubDivision = dataSubDivision && dataSubDivision.subDivision;
  const { town } = { ...getSubDivision };
  console.log(town);
  const getTownOptions =
    town && town.map((item) => ({ value: item.id, label: item.townName }));

  const [createCenter, { loading, error }] = useMutation(createCenterMutation, {
    refetchQueries: ["getAllCentersQuery"],
  });
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createCenter({
          variables: {
            ...values,
            centerSecretCode: uniqueCodeGen(18),
            town: values.town && getObjectFromID(values.town.value),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Nouveau Centre </h4>
            <Error error={error  ||errSubDivision ||errRegs ||errRegion||errDivision } />
            <StyledForm
              disabled={
                isSubmitting ||
                loadingRegion ||
                loadingRegs ||
                loadingDiv ||
                loadingSubDiv 
              }
              aria-busy={
                isSubmitting ||
                loadingRegion ||
                loadingRegs ||
                loadingDiv ||
                loadingSubDiv 
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
                      onChange={handleReactSelectChange}
                      name="subDivID"
                      placeholder={"L'Arrondissement"}
                      options={getSubDivOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) => setFieldValue("town", value)}
                      name="town"
                      placeholder="La Ville"
                      options={getTownOptions}
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="centerName"
                      type="text"
                      label="Libéllé du centre"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="centerCode"
                      type="text"
                      label="Nom Abbregé du centre"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="centerNumber"
                      type="number"
                      label="Code Numérique du centre"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <ButtonStyled>
                    <StyledButton type="submit" disabled={isSubmitting}>
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
export default NewCenterHooks;
