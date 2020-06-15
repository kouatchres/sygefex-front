import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import Form from "../../styles/Form";
import { StyledPage } from "../../styles/StyledPage";
import { format } from "date-fns";
import Error from "../../ErrorMessage";
import styled from "styled-components";
import { getEachCandidateResultsQuery } from "../../queries&Mutations&Functions/Queries";


const ResultsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 0.5rem;
  font-weight: 500;
`;

const SchoolInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* margin: 0 auto; */
  justify-items: center;
  align-items: center;
`;


const FirstInfo = styled.div`
  display: block;
  flex-direction: column;
`;
const SecInfo = styled.div`
  display: block;
  flex-direction: column;
`;

class EachCandResults extends Component {
  static propTypes = { id: PropTypes.string.isRequired };
  render() {
    return (
      <Query query={getEachCandidateResultsQuery} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          const { registration } = data;
          const { candidate, exam, session, center, series, scores } = { ...registration };

          return (
            <StyledPage>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <h4>
                  Resultat Du: {exam.examName}, Session: {session.sessionName},pour:
                  {center.centerName}
                </h4>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <SchoolInfo>
                    <p>
                      <span>
                        <strong> Centre D'Examen: </strong> {center.centerName}
                      </span>
                      <span> ...</span>
                      <span>
                        <strong> Specialization: </strong>
                        {series.seriesName}
                      </span>
                    </p>
                  </SchoolInfo>
                  <ResultsHeader>
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
                          <strong> Sexe: </strong> {candidate.gender.genderName}
                        </span>
                      </p>
                    </FirstInfo>
                    <SecInfo>
                      <p>
                        <span>
                          <strong> Email: </strong>
                          {candidate.email}
                        </span>
                      </p>

                      <p>
                        <span>
                          <strong> Date de Naissance: </strong>
                          {format(candidate.dateOfBirth, "d MMMM, YYYY ")}
                        </span>
                      </p>
                      <p>
                        <span>
                          <strong> Lieu de Naissance: </strong> {candidate.placeOfBirth}
                        </span>
                      </p>
                    </SecInfo>
                  </ResultsHeader>

                </fieldset>
              </Form>
            </StyledPage>
          );
        }}
      </Query>
    );
  }
}

export default EachCandResults;
