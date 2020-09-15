import React from "react";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import { StyledForm, ButtonStyled, StyledButton } from "../utils/FormInputs";
import styled from "styled-components";
import GetRegionList from "./GetRegionList";
import * as Yup from "yup";
import { useQuery } from "@apollo/react-hooks";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";

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
  regName: Yup.string().required("Nom Région Obligatoire"),
  regCode: Yup.string().required("Code Région Obligatoire"),
  // country: Yup
  //     .object()
  //     .required('Pays Obligatoire')
});

const GetRegionList = () => {
  const initialValues = {
    regName: "",
    regCode: "",
    country: "",
    //   country: refinedCountry && getObjectFromID(id)
  };

  const { data, loading: loadingReg, error: errorReg } = useQuery(
    getAllRegionsQuery
  );
  {
    loadingReg && <p>Loading Countries from DB...</p>;
  }
  {
    errorReg && <Error error={error} />;
  }
  const { regions } = { ...data };

  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions, setSubmitting, resetForm) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          actions.resetForm(true);
          actions.setSubmitting(false);
        }, 100);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <MinimStyledPage>
            <h4>Liste des Région</h4>
            <Error error={error} />
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
              <Form>
                <AllControls>
                  <InputGroup></InputGroup>
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
export default GetRegionList;
