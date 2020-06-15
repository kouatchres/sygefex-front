import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../../styles/Form";
import { StyledPage } from "../../styles/StyledPage";
import Error from "../../ErrorMessage";
import styled from "styled-components";
import { format } from "date-fns";
import RegistrationDetails from './RegistrationDetails'
import { getAllCandidateRegistrationIDsQuery } from "../../queries&Mutations&Functions/Queries";


const SubjectTitles = styled.div`
  display: grid;
  grid-template-columns:4fr 1fr 1fr 1fr;
  color: white;
  font-size: 1.5rem;
  justify-content: center;
  background: ${props => props.theme.googleBlue};
`;


const CandPic = styled.div`
  margin-top: 1rem;
  display: block;
  flex-direction: column;

  img {
    height: 30vh;
    width: 15vw;
    border-radius: 0.5rem;
  }
`;

const TitleItem = styled.div`
  margin: 0 20px;
  border-right: 1px solid black;
  text-align: left;
`;

const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 18fr ;
  justify-items: center;
  align-items: center;
`;

const FirstInfo = styled.div`
text-align:left;
  display: block;
  flex-direction: column;
  font-size:1.5rem;
  line-height:0.3rem;
`;


class CandidateResultsByRegisID extends Component {

  makeCandVariableObject = (candIDValue) => {
    const storedCandidate = {
      candidate: `id : ${candIDValue}`
    };
    return storedCandidate;
  };
  static propTypes = { id: PropTypes.string.isRequired };
  render() {
    return (
      <Query query={getAllCandidateRegistrationIDsQuery} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          { loading && <p>...Loading</p> }
          { error && <Error error={error} /> }
          console.log(data)
          const { candidate } = { ...data }
          console.log(candidate)
          return (
            <StyledPage>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <h4>
                  Les Resultats de:{candidate.cand1stName} {candidate.cand2ndName} {candidate.cand3rdName}
                </h4>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <ResultsHeader>
                    <CandPic>
                      <img src={candidate.image} alt={candidate.cand1stName} />
                    </CandPic>
                    <FirstInfo>
                      <p>
                        <span>
                          <strong> Nom: </strong> {candidate.cand1stName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Prenom: </strong> {candidate.cand2ndName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Autres Noms: </strong>
                          {candidate.cand3rdName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Naissance: </strong>
                          <hr />
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Lieu: </strong> {candidate.placeOfBirth}
                        </span>
                      </p>


                      <p>
                        <span>
                          <strong> Date: </strong>
                          {format(candidate.dateOfBirth, "d MMM, YYYY ")}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Sexe: </strong> {candidate.gender.genderName}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Email: </strong>
                          {candidate.email}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Noms des parents: </strong>
                          <hr />
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Père: </strong> {candidate.dadName}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong>Mère: </strong> {candidate.momName}
                        </span>
                      </p>

                    </FirstInfo>
                  </ResultsHeader>
                  <SubjectTitles>
                    <TitleItem>
                      <span>Centre</span>
                    </TitleItem>
                    <TitleItem>
                      <span>Session </span>
                    </TitleItem>
                    <TitleItem>
                      <span>Examen </span>
                    </TitleItem>
                    <TitleItem>
                      <span>Resultats</span>
                    </TitleItem>
                  </SubjectTitles>
                  {candidate.registration.map(oneRegistration => (
                    <RegistrationDetails key={oneRegistration.id} registrationInfo={oneRegistration} />
                  ))}
                </fieldset>
              </Form>
            </StyledPage>
          );
        }}
      </Query>
    );
  }
}

export default CandidateResultsByRegisID;
