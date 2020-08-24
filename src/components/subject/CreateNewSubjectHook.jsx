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
import { getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import { createNewSubjectMutation } from "../queries&Mutations&Functions/Mutations";
import {
  getObjectFromID,
  removeTypename,
} from "../queries&Mutations&Functions/Functions";
import {
  FormikCheckbox,
  FormikDatepicker,
  FormikSelect,
  FormikRadio,
} from "@dccs/react-formik-mui";
import { FormControl, FormLabel, RadioGroup } from "@material-ui/core";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
const AllControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubjTypeRadioButtons = styled.div`
  display: flex;
  padding: 0 0.5rem;
  label {
    font-size: 1.3rem;
  }
  /* input[type="checkbox"] {
    font-size: 12rem;
    width: 2rem;
  } */
  flex-direction: row;
  align-items: center;
  .RadioSet {
    FormikCheckbox {
      font-size: 1.5rem;
    }
    padding: 0 3rem;

    display: flex;
    flex-direction: row;
    label {
      font-size: 1.3rem;
    }
  }
`;

const SubjectGroupRadioButtons = styled.div`
  display: flex;
  padding: 0 0.5rem;
  label {
    font-size: 1.3rem;
  }

  flex-direction: row;
  align-items: center;
  .RadioSet {
    FormikRadio {
      font-size: 1.5rem;
    }
    padding: 0 1rem;

    display: flex;
    flex-direction: row;
    label {
      font-size: 1.3rem;
    }
  }
`;

const validationSchema = Yup.object().shape({
  subjectName: Yup.string().required("Libéllé de la matière obligatoire"),
  subjectCode: Yup.string().required("Code de la matière obligatoire"),
  subjectGroup: Yup.string().required("Groupe de la matière obligatoire"),
  subjectType: Yup.string().required("Type de la matière obligatoire"),
  educType: Yup.string().required("Choix d'un type d'enseignement obligatiore"),
});

const CreateNewSubject = () => {
  const initialValues = {
    subjectName: "",
    subjectCode: "",
    educType: "",
    subjectType: "Oblig",
    subjectGroup: "G3",
  };

  const facObligCheck = () => {
    if (document.getElementById("facChoice").checked) {
      document.getElementById("groupButtons").style.display = "block";
    } else if (document.getElementById("obligChoice").checked) {
      document.getElementById("groupButtons").style.display = "none";
    }
  };

  const {
    data: dataEducType,
    loading: loadingEducType,
    error: errEducType,
  } = useQuery(getAllEducationTypesQuery);

  {
    loadingEducType && <p>Loading...</p>;
  }
  {
    errEducType && <Error error={errEducType} />;
  }

  const getEducationTypes = dataEducType && dataEducType.educationTypes;
  const refinedEducTypes =
    getEducationTypes && removeTypename(getEducationTypes);
  const getEducTypeOptions =
    refinedEducTypes &&
    refinedEducTypes.map((item) => ({
      value: item.id,
      label: item.educationTypeName,
    }));

  const [createSubject, { loadingSubj, errorSubj }] = useMutation(
    createNewSubjectMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createSubject({
          variables: {
            ...values,
            educType:
              refinedEducTypes && getObjectFromID(values.educType.value),
          },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          setSubmitting(false);
          resetForm(true);
        }, 400);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => {
        return (
          <MiniStyledPage>
            <h4>Nouvelle Matière</h4>
            <Error error={errorSubj} />
            <StyledForm
              disabled={isSubmitting || loadingEducType || loadingSubj}
              aria-busy={isSubmitting || loadingEducType || loadingSubj}
            >
              <Form>
                <AllControls>
                  <InputGroup>
                    <SygefexSelect
                      name="educType"
                      onChange={(value) => setFieldValue("educType", value)}
                      options={getEducTypeOptions}
                      placeholder={"Le Type d'Enseignement"}
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="subjectName"
                      type="text"
                      label="Libéllé de la Matière"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="subjectCode"
                      type="text"
                      label="Code de la Matière"
                      disabled={isSubmitting}
                    />
                    <SubjTypeRadioButtons>
                      <FormLabel>Type de la Matière</FormLabel>
                      <RadioGroup className="RadioSet">
                        <FormikRadio
                          label="Facultative"
                          name="subjectType"
                          value="Fac"
                          id="facChoice"
                          onclick={facObligCheck}
                        />
                        <FormikRadio
                          id="obligChoice"
                          label="Obligatoire"
                          name="subjectType"
                          value="Oblig"
                          onclick={facObligCheck}
                        />
                      </RadioGroup>
                    </SubjTypeRadioButtons>
                    <SubjectGroupRadioButtons id="groupButtons">
                      <FormLabel className="RadioSet">
                        Groupe de la Matière
                      </FormLabel>
                      <RadioGroup name="SubjectGroup" className="RadioSet">
                        <FormikRadio
                          label="Groupe 1"
                          name="subjectGroup"
                          value="G1"
                        />
                        <FormikRadio
                          label="Groupe 2"
                          name="subjectGroup"
                          value="G2"
                          defaultChecked
                        />
                      </RadioGroup>
                    </SubjectGroupRadioButtons>
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
export default CreateNewSubject;
