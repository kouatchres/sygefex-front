import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";
import {
  StyledForm,
  SygefexSelect,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import Error from "../ErrorMessage";
import { Formik, Form } from "formik";
import styled from "styled-components";
import useForm from "../utils/useForm";
import DeleteRegion from "../region/DeleteRegion";
import { getAllSeriesQuery } from "../queries&Mutations&Functions/Queries";
import { removeTypename } from "../queries&Mutations&Functions/Functions";

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: 2rem;
  margin: 0 auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  min-width: 12rem;
`;

const TwoGroups = styled.div`
  display: flex;
  flex-direction: column;
`;

const AllControls = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 15rem;
`;

const SeriesToModifyHook = () => {
  const [state, setState, handleReactSelectChange] = useForm({ seriesID: "" });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const {
    data: dataSeries,
    loading: loadingSeries,
    error: errorSeries,
  } = useQuery(getAllSeriesQuery);
  {
    loadingSeries && <p>Loading Series from DB...</p>;
  }
  {
    errorSeries && <Error error={errorSeries} />;
  }
  const getSeries = dataSeries && dataSeries.serieses;
  const seriesOptions =
    getSeries &&
    getSeries.map((item) => ({ value: item.id, label: item.seriesName }));
  console.log(getSeries);

  state.seriesID && console.log(state.seriesID);
  return (
    <Formik method="POST">
      {({ values, isSubmitting }) => (
        <MinimStyledPage>
          <h4>Correction Info Séries</h4>
          <Error error={errorSeries} />
          <StyledForm
            disabled={isSubmitting || loading}
            aria-busy={isSubmitting || loading}
          >
            <Form>
              <AllControls>
                <TwoGroups>
                  <InputGroup>
                    <SygefexSelect
                      name="seriesID"
                      onChange={handleReactSelectChange}
                      options={seriesOptions}
                      placeholder={"La Séries "}
                    />
                  </InputGroup>
                  <Buttons>
                    <ButtonStyled>
                      <StyledButton type="submit" id={state.seriesID}>
                        Supprimer
                      </StyledButton>
                    </ButtonStyled>
                    <ButtonStyled>
                      <StyledButton type="submit">
                        <Link
                          href={{
                            pathname: "../updates/updateSeries",
                            query: state.seriesID && { id: state.seriesID },
                          }}
                        >
                          <a target="_blank">Modifier</a>
                        </Link>
                      </StyledButton>
                    </ButtonStyled>
                  </Buttons>
                </TwoGroups>
              </AllControls>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )}
    </Formik>
  );
};

export default SeriesToModifyHook;
