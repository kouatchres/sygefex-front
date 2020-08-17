import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { MinimStyledPage } from "../styles/StyledPage";
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
import useForm from "../utils/useForm";
import * as Yup from "yup";
import { registerNewSubjectSpecialtyMutation } from "../queries&Mutations&Functions/Mutations";
import { removeTypename } from "../queries&Mutations&Functions/Functions";
import {
  getAllEducationTypesQuery,
  getAllSubjectsOfAnEducTypeQuery,
  getAllSpecialtiesOfAnEducationTypeQuery,
} from "../queries&Mutations&Functions/Queries";

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
  specialty: Yup.string().required("Choix de la Série Obligatoire"),
  subject: Yup.string().required("Choix de la matière Obligatoire"),
  coeff: Yup.number()
    .min(1, "Le coefficient doit etre au moins 1")
    .required("Choix de la matière Obligatoire"),
});

const NewRegSubjectSpecialty = () => {
  const makeSpecialtyObject = (specialtyID, specialtyCode) => {
    const storedSpecialty = {
      id: `${specialtyID}`,
      specialtyCode: `${specialtyCode}`,
    };
    return storedSpecialty;
  };

  const makeSubjectObject = (subjectID, subjectCode) => {
    const storedSubject = {
      id: `${subjectID}`,
      subjectCode: `${subjectCode}`,
    };
    return storedSubject;
  };
  const initialValues = {
    specialty: " ",
    subject: " ",
    coeff: "",
  };

  const [state, setState, handleReactSelectChange] = useForm({
    educTypeID: " ",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    setState({ [name]: val });
  };

  const { data: dataEducType, loadingEducType, errorEducType } = useQuery(
    getAllEducationTypesQuery
  );
  {
    loadingEducType && <p>loading...</p>;
  }
  {
    errorEducType && <Error error={errorEducType} />;
  }
  console.log(dataEducType);

  const getEducTypes = dataEducType && dataEducType.educationTypes;
  console.log(getEducTypes);
  const getEducTypeOptions =
    getEducTypes &&
    getEducTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const {
    data: dataSpecialty,
    loading: loadingSpecialty,
    error: errorSpecialty,
  } = useQuery(getAllSpecialtiesOfAnEducationTypeQuery, {
    skip: !state.educTypeID,
    variables: { id: state.educTypeID },
  });
  {
    loadingSpecialty && <p>loading...</p>;
  }
  {
    errorSpecialty && <Error error={errorSpecialty} />;
  }
  console.log(dataSpecialty);

  const getSpecialtyEducType = dataSpecialty && dataSpecialty.educationType;
  const { specialty } = { ...getSpecialtyEducType };
  console.log(specialty);

  const refinedSpecialty = specialty && removeTypename(specialty);
  const getSpecialtyOptions =
    refinedSpecialty &&
    refinedSpecialty.map((item) => ({
      ...item,
      value: item.id,
      label: item.specialtyName,
    }));

  const { data: dataSubj, loading: loadingSubj, error: errorSubj } = useQuery(
    getAllSubjectsOfAnEducTypeQuery,
    {
      skip: !state.educTypeID,
      variables: { id: state.educTypeID },
    }
  );
  {
    loadingSubj && <p>loading...</p>;
  }
  {
    errorSubj && <Error error={errorSubj} />;
  }
  console.log(dataSubj);
  const getEducationType = dataSubj && dataSubj.educationType;
  const { subject } = { ...getEducationType };
  console.log(subject);
  const refinedSubject = subject && removeTypename(subject);
  const getSubjectOptions =
    refinedSubject &&
    refinedSubject.map((item) => ({
      ...item,
      value: item.id,
      label: item.subjectName,
    }));

  const [createSubjectSpecialty, { loading, error }] = useMutation(
    registerNewSubjectSpecialtyMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSubjectSpecialty({
          variables: {
            ...values,
            specialty:
              refinedSpecialty &&
              makeSpecialtyObject(
                values.specialty.value,
                values.specialty.specialtyCode
              ),
            subject:
              refinedSubject &&
              makeSubjectObject(
                values.subject.value,
                values.subject.subjectCode
              ),
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
      {({ values, isSubmitting, setFieldValue }) => {
        return (
          <MinimStyledPage>
            <h4>Donner les matières aux Séries</h4>
            <Error error={error} />
            <StyledForm
              disabled={
                isSubmitting ||
                loading ||
                loadingEducType ||
                loadingSpecialty ||
                loadingSubj
              }
              aria-busy={
                isSubmitting ||
                loading ||
                loadingEducType ||
                loadingSpecialty ||
                loadingSubj
              }
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      onChange={handleReactSelectChange}
                      name="educTypeID"
                      placeholder="Le type d'enseignement"
                      options={getEducTypeOptions}
                      disbled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) => setFieldValue("specialty", value)}
                      name="specialty"
                      placeholder="La Spécialité"
                      options={getSpecialtyOptions}
                      disbled={isSubmitting}
                    />
                    <SygefexSelect
                      onChange={(value) => setFieldValue("subject", value)}
                      name="subject"
                      placeholder="La matière"
                      options={getSubjectOptions}
                      disbled={isSubmitting}
                    />
                    <SygexInput
                      name="coeff"
                      type="number"
                      label="Coefficient de la matière"
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
          </MinimStyledPage>
        );
      }}
    </Formik>
  );
};
export default NewRegSubjectSpecialty;
