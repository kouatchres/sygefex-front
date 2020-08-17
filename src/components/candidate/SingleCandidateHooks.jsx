import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import Link from "next/link";
import useForm from "../utils/useForm";
import { StyledButton, ButtonStyled, StyledForm } from "../utils/FormInputs";
import { format } from "date-fns";
import { MiniStyledPage } from "../styles/StyledPage";
import styled from "styled-components";
import { singleCandidateQuery } from "../queries&Mutations&Functions/Queries";
import { useApolloClient } from "@apollo/react-hooks";

const DivBtn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1rem;
  /* a{
	text-decoration:none;	
	} */
`;

const ImageInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  grid-gap: 1rem;
`;

//
const BottomInfo = styled.div`
  padding-left: 0.3rem;
  text-align: left;
  font-size: 1.3rem;
  line-height: 0.3rem;
  min-width: 13rem;
`;

const CandImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  img {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    height: 18rem;
    width: 15rem;
    border-radius: 0.7rem;
    background-size: contain;
    background-position: center;
  }
`;

const SingleCandidateHooks = ({ id }) => {
  const [state, setState] = useForm({});
  const client = useApolloClient();

  const loadCandData = async () => {
    const { error, data } = await client.query({
      query: singleCandidateQuery,
      variables: { id },
    });
    console.log(data);
    const { candidate } = data;
    setState({ candidate });
  };
  useEffect(() => {
    loadCandData();
  }, []);

  // const { candidate } = state.candidate;
  console.log(state.candidate);
  const { gender } = { ...state.candidate };
  const { genderName } = { ...gender };
  console.log(gender);
  console.log(genderName);
  const {
    momName,
    dadName,
    candCode,
    image,
    cand1stName,
    cand2ndName,
    cand3rdName,
    email,
    phoneNumb,
    placeOfBirth,
    dateOfBirth,
    birthCertNumber,
  } = { ...state.candidate };
  const initialValues = {
    momName: "",
    dadName: "",
    candCode: "",
    image: "",
    cand1stName: "",
    cand2ndName: "",
    cand3rdName: "",
    email: "",
    phoneNumb: "",
    gender: "",
    placeOfBirth: "",
    dateOfBirth: "",
    birthCertNumber: "",
  };
  return (
    <Formik initialValues={initialValues}>
      {({ values, isSubmitting }) => (
        <MiniStyledPage>
          <h4>Info Candidat</h4>
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <ImageInfo>
                <BottomInfo>
                  <p>
                    <strong>Nom:</strong> <span>{cand1stName}</span>
                  </p>
                  <p>
                    <strong>Prenoms: </strong>
                    <span> {cand2ndName}</span>
                  </p>

                  <p>
                    <strong>Autres Noms:</strong>
                    <span> {cand3rdName}</span>
                  </p>

                  <strong>Naissance:</strong>
                  <hr />
                  <p>
                    <strong>Sexe:</strong> <span>{genderName}</span>
                  </p>
                  <p>
                    <strong>Date:</strong>
                    <span> {format(dateOfBirth, "d MMMM, YYYY")}</span>
                  </p>
                  <p>
                    <strong>Lieu:</strong> <span>{placeOfBirth}</span>
                  </p>

                  <strong>Nom des parents:</strong>
                  <hr />

                  <p>
                    <strong>Père:</strong>
                    <span> {dadName}</span>
                  </p>
                  <p>
                    <strong>Mère:</strong>
                    <span> {momName}</span>
                  </p>

                  <p>
                    <strong>Acte Naissance:</strong>
                  </p>
                  <hr />
                  <p>
                    <strong>No:</strong>
                    <span> {birthCertNumber}</span>
                  </p>
                  <p>
                    <strong>Tel: </strong> <span>{phoneNumb}</span>
                  </p>
                </BottomInfo>
                <BottomInfo>
                  <p>
                    <strong>Email:</strong>
                    <span> {email}</span>
                  </p>

                  <p>
                    <strong>Code:</strong> <span> {candCode}</span>
                  </p>
                  <CandImg>
                    <div>{<img src={image} alt={cand1stName} />}</div>
                  </CandImg>
                </BottomInfo>
              </ImageInfo>
              <DivBtn>
                <ButtonStyled>
                  <StyledButton>
                    <Link
                      href={{
                        pathname: "../updates/updateCand",
                        query: { id },
                      }}
                    >
                      <a target="_blank">Modifier </a>
                    </Link>
                  </StyledButton>
                </ButtonStyled>
                <ButtonStyled>
                  <StyledButton>
                    <Link
                      href={{
                        pathname: "../creates/newCand",
                      }}
                    >
                      <a target="_blank">Candidat Suivant</a>
                    </Link>
                  </StyledButton>
                </ButtonStyled>
              </DivBtn>
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )}
    </Formik>
  );
};

export default SingleCandidateHooks;
