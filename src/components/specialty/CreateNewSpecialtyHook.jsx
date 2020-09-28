import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import {
  SygefexSelect,
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import styled from "styled-components";
import * as Yup from "yup";
import { createSpecialtyMutation } from "../queries&Mutations&Functions/Mutations";
import { getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import {
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";

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
  specialtyName: Yup.string().required("Libéllé de la série obligatoire"),
  specialtyCode: Yup.string().required("Code de la série obligatoire"),
  educType: Yup.string().required("Choissisez un type d'enseignement"),
});

const CreateNewSpecialtyHook = () => {
  const initialValues = {
    specialtyName: "",
    specialtyCode: "",
    educType: "",
  };

  const {
    data: dataEducType,
    loading: loadingEducType,
    error: errorEducType,
  } = useQuery(getAllEducationTypesQuery);

  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  console.log(getEducationTypes);
  const getEducTypeOptions =
    getEducationTypes &&
    getEducationTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const refinedEducTypes =
    getEducationTypes && removeTypename(getEducTypeOptions);

  const [createSpecialty, { loading, error }] = useMutation(
    createSpecialtyMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSpecialty({
          variables: {
            ...values,
            educationType:
              refinedEducTypes && getObjectFromID(values.educType.value),
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
          <MiniStyledPage>
            <h4> Nouvelle Spécialité</h4>
            <Error error={error || errorEducType} />
            <StyledForm
              disabled={isSubmitting || loading || loadingEducType}
              aria-busy={isSubmitting || loading || loadingEducType}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      name="educType"
                      onChange={(value) => setFieldValue("educType", value)}
                      options={getEducTypeOptions}
                      placeholder={"Type d'Enseignement"}
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="specialtyName"
                      type="text"
                      label="Libéllé de la Spécialité"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="specialtyCode"
                      type="text"
                      label="Code de la Spécialité"
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
          </MiniStyledPage>
        );
      }}
    </Formik>
  );
};
export default CreateNewSpecialtyHook;
