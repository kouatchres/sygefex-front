import React, { useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import { updateSubjectGroupMutation } from "../queries&Mutations&Functions/Mutations";
import { singleSubjectGroupQuery } from "../queries&Mutations&Functions/Queries";
import useForm from "../utils/useForm";
import styled from "styled-components";

const Controls = styled.div`
  padding: 0 2rem;
`;
const UpdateSubjectGroup = ({ id }) => {
  const [state, setState] = useForm({
    subjectGroupCode: "",
    subjectGroupName: "",
  });
  const client = useApolloClient();

  const loadSubjData = async () => {
    const { data } = await client.query({
      query: singleSubjectGroupQuery,
      variables: { id },
    });
    const getSubjData = data.subject;
    console.log(getSubjData);
    const { subjectGroupName, subjectGroupCode } = getSubjData;

    setState({
      subjectGroupCode: subjectGroupCode,
      subjectGroupName: subjectGroupName,
    });
  };
  useEffect(() => {
    loadSubjData();
  }, []);

  const validationSchema = Yup.object().shape({
    subjectGroupName: Yup.string().required(
      "Nom du groupe de matière obligatoire"
    ),
    subjectGroupCode: Yup.string().required(
      "Code du groupe de matière  obligatoire"
    ),
  });
  const [updateSubjectGroup, { loading, error }] = useMutation(
    updateSubjectGroupMutation,
    {
      variables: { id },
    }
  );

  return (
    <Formik
      method="POST"
      initialValues={state || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const res = await updateSubjectGroup({
          variables: {
            ...values,
            id: id,
          },
        });
        // Router.push({
        // 	pathname: '/show/singleExam',
        // 	query: { id }
        // });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, isSubmitting }) => (
        <MiniStyledPage>
          <h4>Modification d'info matière</h4>
          <Error error={error} />
          <StyledForm
            disabled={isSubmitting || loading}
            aria-busy={isSubmitting || loading}
          >
            <Form>
              <Controls>
                <SygexInput
                  type="text"
                  id="subjectGroupName"
                  name="subjectGroupName"
                  label="Nom du groupe de matière"
                  disabled={isSubmitting}
                />
                <SygexInput
                  type="text"
                  id="subjectGroupCode"
                  name="subjectGroupCode"
                  label="Code du groupe de matière"
                  disabled={isSubmitting}
                />
                <ButtonStyled className="submitButton">
                  <StyledButton type="submit">
                    valid{isSubmitting ? "ation en cours" : "er"}
                  </StyledButton>
                </ButtonStyled>
              </Controls>
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )}
    </Formik>
  );
};

export default UpdateSubjectGroup;
