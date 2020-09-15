import React, { useState, useEffect } from "react";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { Formik, Form } from "formik";
import useForm from "../utils/useForm";
import format from "date-fns";
import Router from "next/router";
import styled from "styled-components";
import * as Yup from "yup";
import { updateCandidateMutation } from "../queries&Mutations&Functions/Mutations";
import {
  SygexInput,
  StyledForm,
  ButtonStyled,
  StyledButton,
} from "../utils/FormInputs";
import { singleCandidateQuery } from "../queries&Mutations&Functions/Queries";

import { FormikDatepicker, FormikRadio } from "@dccs/react-formik-mui";
import {
  FormLabel,
  RadioGroup,
  Typography,
  Container,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  min-width: 12rem;
  .RadioSet {
    display: flex;
    flex-direction: row;
  }
`;

const RadioButtons = styled.div`
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

const TwoGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  /* grid-gap: 0.09rem; */
`;

const AllControls = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
`;

const PicFrame = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin: 1rem auto;
    margin-top: 1rem;
    height: 18rem;
    width: 15rem;
    border-radius: 0.5rem;
    background-size: contain;
    background-position: center;
  }
`;

const NewUpdateCandidate = ({ id }) => {
  const client = useApolloClient();
  const [state, setState] = useForm({
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    momName: "",
    dadName: "",
    email: "",
    image: "",
    phoneNumb: "",
    placeOfBirth: "",
    dateOfBirth: "",
    birthCertNumber: "",
    gender: "",
  });
  const [photo, setPhoto] = useState({ image: "" });
  const uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ineximages");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/inex/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setPhoto({ image: file.secure_url });
  };

  const getObjectFromID = (suppliedID) => {
    const theObject = { id: `${suppliedID}` };
    return theObject;
  };

  const loadCandidateData = async () => {
    const { error, data } = await client.query({
      query: singleCandidateQuery,
      variables: { id },
    });
    const candData = { ...data.candidate };

    const {
      cand1stName,
      cand2ndName,
      cand3rdName,
      momName,
      dadName,
      email,
      image,
      gender,
      phoneNumb,
      dateOfBirth,
      placeOfBirth,
      birthCertNumber,
    } = candData;
    setState({
      cand1stName: cand1stName,
      cand2ndName: cand2ndName,
      cand3rdName: cand3rdName,
      momName: momName,
      dadName: dadName,
      email: email,
      image: image,
      phoneNumb: phoneNumb,
      placeOfBirth: placeOfBirth,
      dateOfBirth: dateOfBirth,
      birthCertNumber: birthCertNumber,
      gender: gender,
    });
    console.log(candData);
  };

  useEffect(() => {
    loadCandidateData();
  }, []);

  const getImage = photo.image;
  console.log({ getImage });
  const initialValues = {
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    momName: "",
    dadName: "",
    email: "",
    image: "",
    gender: "",
    phoneNumb: "",
    placeOfBirth: "",
    dateOfBirth: "",
    birthCertNumber: "",
    gender: "",
  };

  const validationSchema = Yup.object().shape({
    cand1stName: Yup.string().required("Nom obligatoire"),
    cand2ndName: Yup.string().required("Prénom obligatoire"),
    cand3rdName: Yup.string(),
    momName: Yup.string().required("Noms de la mere obligatoire"),
    dadName: Yup.string().required("Noms du pere obligatoire"),
    placeOfBirth: Yup.string().required("Lieu de naissance obligatoire"),
    birthCertNumber: Yup.string().required(
      "Numéro de l'acte de naissance obligatoire"
    ),
    phoneNumb: Yup.number().required("Numéro de portable obligatoire"),

    gender: Yup.string().required("Choix du sexe obligatoire"),
    dateOfBirth: Yup.date()
      .min(new Date("01-01-1900"))
      .max(new Date())
      .required("Date de naissance obligatoire"),
    email: Yup.string().email("Email invalide").required("Email obligatoire"),
  });

  // const Create
  const [updateCandidate, { errorMut, loadingMut }] = useMutation(
    updateCandidateMutation
  );
  return (
    <Formik
      method="POST"
      initialValues={state || initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        const res = await updateCandidate({
          variables: {
            ...values,
            image: getImage,
            id,
          },
        });
        Router.push({
          pathname: "/show/singleCand",
          query: { id },
        });
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          console.log(res);
          resetForm(true);
          setSubmitting(false);
        }, 200);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <MiniStyledPage>
          <h4>Correction Info Candidat</h4>
          <Error error={errorMut} />
          <StyledForm
            disabled={loadingMut || isSubmitting}
            aria-busy={loadingMut || isSubmitting}
          >
            <Form>
              <AllControls>
                <TwoGroups>
                  <InputGroup>
                    <SygexInput
                      disabled={isSubmitting}
                      name="file"
                      type="file"
                      onChange={uploadFile}
                    />

                    <SygexInput
                      id="cand1stName"
                      name="cand1stName"
                      type="text"
                      label="Nom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      id="cand2ndName"
                      name="cand2ndName"
                      type="text"
                      label="Prénom"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="cand3rdName"
                      id="cand3rdName"
                      type="text"
                      label="Autres Noms"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="placeOfBirth"
                      id="placeOfBirth"
                      type="text"
                      label="Lieu de Naissance"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="dadName"
                      id="dadName"
                      type="text"
                      label="Noms du pere"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="momName"
                      id="momName"
                      type="text"
                      label="Noms de la mere"
                      disabled={isSubmitting}
                    />

                    <SygexInput
                      name="birthCertNumber"
                      id="birthCertNumber"
                      type="text"
                      label="Numéro l'Acte de Naissance"
                      disabled={isSubmitting}
                    />
                    <SygexInput
                      name="phoneNumb"
                      id="phoneNumb"
                      type="number"
                      label="Numéro de portable"
                      disabled={isSubmitting}
                    />
                  </InputGroup>
                  <InputGroup>
                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <FormikDatepicker
                        name="dateOfBirth"
                        label="Brith Date"
                        format="DD MMMM YYYY"
                      ></FormikDatepicker>
                    </MuiPickersUtilsProvider>
                    <SygexInput
                      name="email"
                      id="email"
                      type="email"
                      label="Email"
                      disabled={isSubmitting}
                    />
                    <RadioButtons>
                      <FormLabel>Sexe</FormLabel>
                      <RadioGroup name="Sexe" className="RadioSet">
                        <FormikRadio
                          label="Female"
                          name="gender"
                          value="Femele"
                        />
                        <FormikRadio label="Male" name="gender" value="Male" />
                      </RadioGroup>
                    </RadioButtons>
                    <PicFrame>
                      <img
                        src={getImage ? getImage : state.image}
                        alt={state.cand1stName}
                      />
                    </PicFrame>
                  </InputGroup>
                </TwoGroups>
                <ButtonStyled>
                  <StyledButton type="submit" disabled={isSubmitting}>
                    Valid{isSubmitting ? "ation en cours" : "er"}
                  </StyledButton>
                </ButtonStyled>
              </AllControls>
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )}
    </Formik>
  );
};
export default NewUpdateCandidate;

//
