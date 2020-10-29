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
import { getAllSpecialtiesQuery } from "../queries&Mutations&Functions/Queries";
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

const specialtyToModifyHook = () => {
  const [state, setState, handleReactSelectChange] = useForm({ specialtyID: "" });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const {
    data: dataSpecialty,
    loading: loadingSpecialty,
    error: errorSpecialty,
  } = useQuery(getAllSpecialtiesQuery);
  
  const getSpecialty = dataSpecialty && dataSpecialty.specialties;
  const specialtyOptions =
    getSpecialty &&
    getSpecialty.map((item) => ({ value: item.id, label: item.specialtyName }));
  console.log(getSpecialty);

  state.specialtyID && console.log(state.specialtyID);
  return (
    <Formik method="POST">
      {({ values, isSubmitting }) => (
        <MinimStyledPage>
          <h4>Correction Info Spécialité</h4>
          <Error error={errorSpecialty} />
          <StyledForm
            disabled={isSubmitting || loadingSpecialty}
            aria-busy={isSubmitting  || loadingSpecialty}
          >
            <Form>
              <AllControls>
                <TwoGroups>
                  <InputGroup>
                    <SygefexSelect
                      name="specialtyID"
                      onChange={handleReactSelectChange}
                      options={specialtyOptions}
                      placeholder={"La Spécialité "}
                    />
                  </InputGroup>
                  <Buttons>
                    <ButtonStyled>
                      <StyledButton type="submit" id={state.specialtyID}>
                        Supprimer
                      </StyledButton>
                    </ButtonStyled>
                    <ButtonStyled>
                      <StyledButton type="submit">
                        <Link
                          href={{
                            pathname: "../updates/updateSpecialty",
                            query: state.specialtyID && { id: state.specialtyID },
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

export default specialtyToModifyHook;
