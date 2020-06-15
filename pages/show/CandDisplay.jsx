import React, { Component } from "react";
import Error from "../../src/components/ErrorMessage";
import { Query } from "react-apollo";
import CandLine from "../../src/components/candidate/Candidate";
import styled from "styled-components";
import { getAllCandidatesQuery } from "../../src/components/queries&Mutations&Functions/Queries";

const CandPageTitle = styled.div`
  width: 100%;
  min-height: 90vh;
`;
const CandHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: left;
  border-bottom: 2px solid black;
  background: lightgray;
`;

const TitleItem = styled.div`
  margin: 0 10px;
  border-right: 1px solid black;
  text-transform: capitalize;
  width: 13%;
  text-align: left;
`;

const CandidateList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

class CandDisplay extends Component {
  render() {
    return (
      <CandPageTitle>
        <CandHeader>
          <TitleItem className="candidate-block">
            <span>Pic</span>
          </TitleItem>
          <TitleItem>
            <span>1st Name</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Last Name</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Other Name</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Email</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Code</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Phone</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Birth Place</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Edit</span>
          </TitleItem>
          <TitleItem className="candidate-block">
            <span>Delete</span>
          </TitleItem>
        </CandHeader>

        <Query query={getAllCandidatesQuery}>
          {({ loading, error, data }) => {
            const { candidates } = { data };
            console.log(candidates);
            {
              loading && <p>Loading...</p>;
            }
            {
              error && <Error error={error} />;
            }
            return (
              <CandidateList>
                {candidates.map(candidate => (
                  <CandLine eachCandidate={candidate} key={candidate.id} />
                ))}
              </CandidateList>
            );
          }}
        </Query>
      </CandPageTitle>
    );
  }
}

export default CandDisplay;
