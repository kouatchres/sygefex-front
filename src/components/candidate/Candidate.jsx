import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import DeleteCandidate from "./DeleteCandidate";

const ItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  width: 320px;
  border-radius: 15px;
  height: 260px;
  grid-row-gap: 10px;
  justify-content: space-evenly;
  &:hover {
    box-shadow: ${props => props.theme.bs};
  }
`;

const CandAllInfo = styled.div`
  display: grid;
  grid-template-columns: 11fr 19fr;
  height: 220px;
`;

const ButtonList = styled.div`
  display: grid;
  grid-template-columns: 4fr 7fr;
  width: 100%;
  border-top: 1px solid ${props => props.theme.grey};
  grid-gap: 5px;
  height: 42px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  align-content: center;
  font-size: 1.1rem;
  color: white;
  background: ${props => props.theme.grey};
`;

const CandImg = styled.div`
  padding: 5px;
  height: 230px;
  width: 150px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &:hover {
      transition: all 2s ease-in-out;
      transform: scale(1.5);
    }
  }
`;

const RestInfo = styled.div`
  display: flex;
  font-size: 1.1rem;
  flex-direction: column;
  padding: 5px;
  line-height: 5px;
`;

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

const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

class Candidate extends Component {
  static propTypes = {
    eachCandidate: PropTypes.object.isRequired
  };

  render() {
    const {
      image,
      id,
      cand1stName,
      cand2ndName,
      cand3rdName,
      email,
      phoneNumb,
      placeOfBirth
    } = this.props.eachCandidate;

    return (
      <ItemStyled>
        <CandAllInfo>
          <CandImg>{image && <img src={image} alt={cand1stName} />}</CandImg>
          <RestInfo>
            <ItemInfo>
              <p>Prenom: {cand1stName}</p>
            </ItemInfo>
            <ItemInfo>
              <p>Noms: {cand2ndName}</p>
            </ItemInfo>
            <ItemInfo>
              <p>Autre: {cand3rdName}</p>
            </ItemInfo>
            <ItemInfo>
              <p>Date: {phoneNumb}</p>
            </ItemInfo>
            <ItemInfo>
              <p>Lieu: {placeOfBirth}</p>
            </ItemInfo>
            <ItemInfo>
              <p>tel: {phoneNumb}</p>
            </ItemInfo>
            <ItemInfo>
              <p>Email: {email}</p>
            </ItemInfo>
          </RestInfo>
        </CandAllInfo>
        <ButtonList>
          <UpdateBtn>
            <Link
              href={{
                pathname: "../updates/updateCand",
                query: {
                  id
                }
              }}
            >
              <a>Update </a>
            </Link>
          </UpdateBtn>
          <DeleteCandidate id={id}>Delete Candidate</DeleteCandidate>
        </ButtonList>
      </ItemStyled>
    );
  }
}
export default Candidate;
