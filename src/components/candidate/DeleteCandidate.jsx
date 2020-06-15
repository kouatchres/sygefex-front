import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import { getAllCandidatesQuery } from "../queries&Mutations&Functions/Queries";

const deleteCandidateMutation = gql`
  mutation deleteCandidateMutation($id: ID!) {
    deleteCandidate(id: $id) {
      id
    }
  }
`;

const DelBtn = styled.button`
  color: white;
  font-weight: bold;
  background-color: #375;
  border-radius: 10px;
  font-size: 1.1rem;
  height: 30px;
`;

class DeleteCandidate extends Component {
  updateCache = (cache, payload) => {
    // manually update the cache so that the data are all the same
    // 1. read the cache for the data we want
    const data = cache.readQuery({ query: getAllCandidatesQuery });
    // filter out the deleted candidate from the data in the cache
    data.candidates = data.candidates.filter(candidate => candidate.id !== payload.data.deleteCandidate.id);
    //  3. write the new data back to the cache
    console.log("getting payload");
    console.log(payload);
    cache.writeQuery({ query: getAllCandidatesQuery, data });
  };

  render() {
    return (
      <div>
        <Mutation mutation={deleteCandidateMutation} variables={{ id: this.props.id }} update={this.updateCache}>
          {(deleteCandidate, { error }) => (
            <DelBtn
              onClick={() => {
                if (confirm("Sure to delete this candidate ?")) {
                  deleteCandidate();
                }
              }}
            >
              {this.props.children}
            </DelBtn>
          )}
        </Mutation>
      </div>
    );
  }
}

export default DeleteCandidate;
