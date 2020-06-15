import React, { Component } from "react";
import { Query } from "react-apollo";
import Error from "../ErrorMessage";
import Link from "next/link";
import styled from "styled-components";
import { singleCandidateQuery } from "../queries&Mutations&Functions/Queries";

const UpdateBtn = styled.button`
  background-color: #379;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  height: 30px;
  border: none;
  outline: none;
  a {
    color: white;
  }
`;

const OtherInfo = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: column;
  margin: 2rem auto;

  p {
    font-size: 1.3rem;
    line-height: 2px;
  }
`;
const ImageInfo = styled.div`
  margin: 2rem auto;
  max-width: 90vw;
  display: grid;
  grid-template-columns: 1fr 20fr 20fr;
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`;

const BottomInfo = styled.div`
  padding: 5px;
  margin: 2rem auto;

  p {
    font-size: 1.3rem;
    line-height: 2px;
  }
`;

const CandImg = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  img {
    margin-top: 1rem;
    margin-left: 5rem;
    height: 15rem;
    width: 15rem;
    border-radius: 15px;
    background-size: contain;
    background-position: center;
  }
`;

class SingleCandidate extends Component {
  render() {
    return (
      <Query query={singleCandidateQuery} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          console.log(data);
          const { candidate } = data;
          console.log(candidate);
          const {
            candCode,
            image,
            cand1stName,
            cand2ndName,
            cand3rdName,
            email,
            phoneNumb,
            placeOfBirth,
            gender: { genderName },
            dateOfBirth,
            birthCertNumber
          } = candidate;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          return (
            <ImageInfo>
              <CandImg>
                <div>{candidate.image && <img src={image} alt="Upload image" />}</div>{" "}
              </CandImg>

              <OtherInfo>
                <p>Nom: {cand1stName}</p>
                <p>Prenoms: {cand2ndName}</p>
                <p>Autres Noms: {cand3rdName}</p>
                <p>Date Naissance: {dateOfBirth}</p>
                <p>Lieu Naissance: {placeOfBirth}</p>
                <p>Tel: {phoneNumb}</p>
                <p>Nom Pere: {cand1stName}</p>
                <p>Nom Mere: {cand2ndName}</p>
                <p>No: Acte Naissance: {birthCertNumber}</p>
                <p>Code: {candCode}</p>
              </OtherInfo>
              <BottomInfo>
                <p>Birth Place: {placeOfBirth}</p>
                <p>Code: {candCode}</p>
                <p>Email: {email}</p>
                <p>Sexe: {genderName}</p>
                <p>No Acte Naissance: {birthCertNumber}</p>
                <p>Birth Date: {dateOfBirth}</p>

                <UpdateBtn>
                  <Link
                    href={{
                      pathname: "../updates/updateCand",
                      query: { id: this.props.id }
                    }}
                  >
                    <a>Modifier </a>
                  </Link>
                </UpdateBtn>
                <UpdateBtn>
                  <Link
                    href={{
                      pathname: "../creates/newCand"
                    }}
                  >
                    <a>Candidat Suivant</a>
                  </Link>
                </UpdateBtn>
              </BottomInfo>
            </ImageInfo>
          );
        }}
      </Query>
    );
  }
}

export default SingleCandidate;
