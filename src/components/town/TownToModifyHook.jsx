import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import Link from "next/link";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import {
  SygefexSelect,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";

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

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: 2rem;
  margin: 0 auto;
`;

const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 17rem; */
`;

const validationSchema = Yup.object().shape({
  centerName: Yup.string().required("Choix nom du centre Obligatoire"),
  centerCode: Yup.string().required("Choix  code du centre Obligatoire"),
  centerNumber: Yup.number()
    .min(1, "Numéro du centre doit etre Positif")
    .required("Choix de la Séries Obligatoire"),
});

const TownToModifyHook = () => {
  const initialValues = {
    centerName: "",
    centerCode: "",
    town: "",
  };
  const [state, setState, handleReactSelectChange] = useForm({
    regionID: "",
    divisionID: "",
    subDivisionID: "",
    townID: "",
  });

  const { data: dataReg, loading: loadingReg, error: errReg } = useQuery(
    getAllRegionsQuery,
  );
 
  console.log(dataReg);
  const getRegions = dataReg && dataReg.regions;
  console.log(getRegions);
  const getRegionsOptions =
    getRegions && getRegions.map((item) => ({ value: item.id, label: item.regName }));
  console.log(state.regionID);

  const { data: dataDiv, loading: loadingDiv, error: errDiv } = useQuery(
    getDivisionsOfARegionQuery,
    {
      skip: !state.regionID,
      variables: { id: state.regionID },
    }
  );
 
  console.log(dataDiv);
  const theRegion = dataDiv && dataDiv.region
  const {division} = {...theRegion}
  const getDivOptions =
    division &&
    division.map((item) => ({ value: item.id, label: item.divName }));

  console.log(state.divisionID);

  const {
    data: dataSubDiv,
    loading: loadingSubDiv,
    error: errSubDiv,
  } = useQuery(getSubDivisionsOfADivisionQuery, {
    skip: !state.divisionID,
    variables: { id: state.divisionID },
  });
  
  console.log(dataSubDiv);
  const theDiv = dataSubDiv && dataSubDiv.division;
  const {subDivision} = {...theDiv};
  // console.log(subDivision);
  const getSubDivOptions =
    subDivision &&
    subDivision.map((item) => ({ value: item.id, label: item.subDivName }));

  const { data: dataTown, loading: loadingTown, error: errTown } = useQuery(
    getTownsOfASubDivisionQuery,
    {
      skip: !state.subDivID,
      variables: { id: state.subDivID },
    }
  );
  
  console.log(dataTown);
  const getTown = dataTown && dataTown.subDivision;
  const { town } = { ...getTown };
  // console.log(town);
  const getTownOptions =
    town && town.map((item) => ({ value: item.id, label: item.townName }));

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Correction Info Ville</h4>
            <Error error={errTown || errSubDiv  || errDiv || errReg } />
            <StyledForm
              disabled={
                isSubmitting ||
                loadingReg ||
                loadingDiv ||
                loadingSubDiv ||
                loadingTown
              }
              aria-busy={
                isSubmitting ||
                loadingReg ||
                loadingDiv ||
                loadingSubDiv ||
                loadingTown
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="regionID"
                      placeholder="La Région"
                      options={getRegionsOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="divisionID"
                      placeholder="Le Département"
                      options={getDivOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="subDivID"
                      placeholder="L'Arrondissement"
                      options={getSubDivOptions}
                      disabled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="townID"
                      placeholder="La Ville"
                      options={getTownOptions}
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <Buttons>
                    <ButtonStyled>
                      <StyledButton type="submit" >
                        Supprimer
                      </StyledButton>
                    </ButtonStyled>
                    <ButtonStyled>
                      <StyledButton type="submit">
                        <Link
                          href={{
                            pathname: "../updates/updateTown",
                            query: state.townID && { id: state.townID },
                          }}
                        >
                          <a target="_blank">Modifier</a>
                        </Link>
                      </StyledButton>
                    </ButtonStyled>
                  </Buttons>
                </AllControls>
              </Form>
            </StyledForm>
          </MinimStyledPage>
        );
      }}
    </Formik>
  );
};
export default TownToModifyHook;
