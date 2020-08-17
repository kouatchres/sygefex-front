import React, { useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import * as Yup from "yup";
import useForm from "../utils/useForm";
import { Form, Formik } from "formik";
import { updateRegionMutation } from "../queries&Mutations&Functions/Mutations";
import { getSingleRegionQuery } from "../queries&Mutations&Functions/Queries";
import {
  StyledForm,
  ButtonStyled,
  StyledButton,
  SygexInput,
} from "../utils/FormInputs";

const validationSchema = Yup.object().shape({
  regName: Yup.string().required("Nom Région Obligatoire"),
  regCode: Yup.string().required("Code Région Obligatoire"),
});
const NewUpdateRegionHook = (props) => {
  const [state, setState] = useForm({ regCode: "", regName: "" });
  const client = useApolloClient();

  console.log(props);

  const loadRegionData = async () => {
    const { data, error } = await client.query({
      query: getSingleRegionQuery,
      variables: { id: props.id },
    });
    const getRegionData = data.region;
    const { regName, regCode } = getRegionData;
    setState({
      regName: regName,
      regCode: regCode,
    });
    return getRegionData;
  };

  const initialValues = {
    regName: "",
    regCode: "",
  };

  useEffect(() => {
    loadRegionData();
  }, []);
  console.log(state);

  const [updateRegion] = useMutation(updateRegionMutation, {
    variables: { id: props.id },
  });

  return (
    <Formik
      initialValues={state || initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await updateRegion({ variables: { ...values } });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ isSubmitting }) => (
        <MiniStyledPage>
          <Form>
            <h4>Modification de Région</h4>
            <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
              <SygexInput
                type="text"
                id="regName"
                name="regName"
                label="Nom Région"
                disabled={isSubmitting}
              />
              <SygexInput
                type="text"
                id="regCode"
                name="regCode"
                label="Code Région"
                disabled={isSubmitting}
              />
              <ButtonStyled>
                <StyledButton type="submit">
                  Valid{isSubmitting ? "cation" : "er"}
                </StyledButton>
              </ButtonStyled>
            </StyledForm>
          </Form>
        </MiniStyledPage>
      )}
    </Formik>
  );
};

export default NewUpdateRegionHook;
