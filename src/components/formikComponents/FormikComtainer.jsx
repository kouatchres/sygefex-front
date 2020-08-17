import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { validateSchema } from "graphql";

const FormikContainer = () => {
  const initialValues = {};
  const validateSchema = Yup.object({});
  const onSubmit = (values) => {
    () => console.log("form data ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validateSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {({ issubmitting, values }) => (
        <Form>
          <button type="submit">Validate</button>
        </Form>
      )}
    </Formik>
  );
};
export default FormikContainer;
