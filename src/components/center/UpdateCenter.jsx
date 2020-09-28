
import React, { useEffect } from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { MiniStyledPage } from '../styles/StyledPage'
import Error from '../ErrorMessage';
import { Formik, Form } from 'formik';
import useForm from '../utils/useForm'
import Router from 'next/router';
import * as Yup from 'yup';
import { SygexInput, StyledForm, StyledButton, ButtonStyled } from '../utils/FormInputs'
import { singleCenterQuery } from "../queries&Mutations&Functions/Queries";
import { updateCenterMutation } from "../queries&Mutations&Functions/Mutations";

import styled from 'styled-components'


const Controls = styled.div`
padding:0 2rem;
`;
const UpdateCenter = ({ id }) => {
  console.log(id)
  const client = useApolloClient()
  const [state, setState] = useForm({
    centerCode: "",
    centerName: "",
    centerNumber: "",
  })

  const handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    setState({ [name]: val });
  };

  const updateSingleCenter = async (e, updateMutation) => {
    e.preventDefault();
    const res = await updateMutation({
      variables: {
        id,
        ...state
      }
    });
  };



  const loadCenterData = async () => {
    const { error, data } = await client.query({
      query: singleCenterQuery,
      variables: { id }
    })
    {error && <Error error={error}/>}
    const centerData = { ...data.center }
    const {
      centerCode,
      centerName,
      centerNumber,
    } = centerData
    setState({
      centerCode: centerCode,
      centerName: centerName,
      centerNumber: centerNumber,

    })
    console.log(centerData)
  }


  useEffect(() => {
    loadCenterData()
  }, [])

  const initialValues = {
    centerCode: "",
    centerName: "",
    centerNumber: "",
  }

  const validationSchema = Yup.object().shape({
    centerName: Yup.string().required('Nom  du centre obligatoire'),
    centerCode: Yup.string().required('Code du centre  obligatoire'),
    centerNumber: Yup.number().required('Numéro  du centre obligatoire'),
  });

  const Create
  const [updateCenter, { loading: loadingMut, error: errorMut }] = useMutation(updateCenterMutation, {
    variables: { id }
  })
  return (
    <Formik
      method="POST"
      initialValues={state || initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const res = await updateCenter({
          variables: { ...values, id },
        });
        // Router.push({
        //   pathname: '/show/singleCand',
        //   query: { id }
        // });

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
          <h4>Correction Info Centre</h4>
          <Error error={errorMut} />
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting} >
            <Form>
              <Controls>
                <SygexInput
                  id="centerName"
                  name="centerName"
                  type="text"
                  label="Nom du centre"
                  disabled={isSubmitting}

                />
                <SygexInput
                  id="centerCode"
                  name="centerCode"
                  type="text"
                  label="Code du centre"
                  disabled={isSubmitting}

                />
                <SygexInput
                  name="centerNumber"
                  id="centerNumber"
                  type="number"
                  label="Numéro du centre"
                  disabled={isSubmitting}
                />

                <ButtonStyled >
                  <StyledButton type="submit" disabled={isSubmitting}  >Valid{isSubmitting ? "ation en cours" : "er"}</StyledButton>
                </ButtonStyled>
              </Controls>
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )
      }
    </Formik >

  );
}

export default UpdateCenter;
