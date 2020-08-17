import React, { useEffect } from "react";
import Error from "../ErrorMessage.js";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { StyledPage } from "../styles/StyledPage";
import { singleSubDivisionQuery } from "../queries&Mutations&Functions/Queries";
import { updateSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import * as Yup from "yup";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import {
  StyledButton,
  ButtonStyled,
  StyledForm,
  SygexInput,
} from "../utils/FormInputs";

const validationSchema = Yup.object().shape({
  subDivName: Yup.string().required("Nom du arrondissement Obligatoire"),
  subDivCode: Yup.string().required("Code du arrondissement Obligatoire"),
});

const UpdateSubDivision = (props) => {
  const [state, setState] = useForm({ subDivName: "", subDivCode: "" });
  const client = useApolloClient();

  const loadSubDivData = async () => {
    const { data, error } = await client.query({
      query: singleSubDivisionQuery,
      variables: { id: props.id },
    });

    const getSubDivData = data.subDivision;
    const { subDivName, subDivCode } = getSubDivData;
    setState({ subDivName: subDivName, subDivCode: subDivCode });
    return getSubDivData;
  };

  useEffect(() => {
    loadSubDivData();
  }, []);
  console.log(state);
  const [updateSubDivision] = useMutation(updateSubDivisionMutation, {
    variables: { id: props.id },
  });

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateSubDivision({
          variables: { ...values },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, isSubmitting }) => (
        <StyledPage>
          <h4>Modification d'Info Arrondissement</h4>
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <SygexInput
                type="text"
                id="subDivName"
                name="subDivName"
                label="Nom Arrondissement"
                required
                disabled={isSubmitting}
              />
              <SygexInput
                type="text"
                id="subDivCode"
                name="subDivCode"
                label="Code Arrondissement"
                required
                disabled={isSubmitting}
              />
              <ButtonStyled>
                <StyledButton type="submit">
                  Valid{isSubmitting ? "ation en cours" : "er"}
                </StyledButton>
              </ButtonStyled>
            </Form>
          </StyledForm>
        </StyledPage>
      )}
    </Formik>
  );
};

export default UpdateSubDivision;
