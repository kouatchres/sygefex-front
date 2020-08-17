import React from "react";
import { MinimStyledPage } from "../styles/StyledPage";
import Link from "next/link";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import Error from "../ErrorMessage";
import {
  SygefexSelect,
  StyledForm,
  StyledButton,
  ButtonStyled,
} from "../utils/FormInputs";
import styled from "styled-components";
import DeleteRegion from "../region/DeleteRegion";
import { getAllSubjectGroupsQuery } from "../queries&Mutations&Functions/Queries";
import { useQuery } from "@apollo/react-hooks";

const StyledDivision = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
`;

const Buttons = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;
const SelectSubjectGroupToModify = () => {
  const [state, setState, handleReactSelectChange] = useForm({
    subjectGroupID: "",
  });

  const { subjectGroupID } = state;
  const { data, loading, error } = useQuery(getAllSubjectGroupsQuery);

  {
    loading && <p>Loading...</p>;
  }
  {
    error && <Error error={error} />;
  }

  const getSubjects = data && data.subjectGroups;
  console.log(getSubjects);
  const subjectsOptions =
    getSubjects &&
    getSubjects.map((item) => ({
      value: item.id,
      label: item.subjectGroupName,
    }));

  return (
    <Formik method="POST">
      {({ isSubmitting, values }) => (
        <MinimStyledPage>
          <h4>Correction Info groupe des matières</h4>
          <Error error={error} />
          <StyledForm
            disabled={isSubmitting || loading}
            aria-busy={isSubmitting || loading}
          >
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await updateSubjectGroup();
                console.log(res);
              }}
            >
              <StyledDivision>
                <SygefexSelect
                  id="subjectGroupID"
                  name="subjectGroupID"
                  options={subjectsOptions}
                  onChange={handleReactSelectChange}
                  placeholder="Choix de la matière"
                />
                <Buttons>
                  <ButtonStyled>
                    <DeleteRegion id={state.id}>Supprimer</DeleteRegion>
                  </ButtonStyled>
                  <ButtonStyled>
                    <StyledButton>
                      <Link
                        href={{
                          pathname: "../updates/updateSubjectGroup",
                          query: { id: subjectGroupID },
                        }}
                      >
                        <a target="_blank">Modifier</a>
                      </Link>
                    </StyledButton>
                  </ButtonStyled>
                </Buttons>
              </StyledDivision>
            </Form>
          </StyledForm>
        </MinimStyledPage>
      )}
    </Formik>
  );
};

export default SelectSubjectGroupToModify;
