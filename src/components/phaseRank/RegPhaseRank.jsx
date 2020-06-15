import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Form from '../styles/Form';
import { MiniStyledPage } from '../styles/StyledPage';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import { createPhaseRankMutation } from '../queries&Mutations&Functions/Mutations';
import { getSelectedObject } from '../queries&Mutations&Functions/Functions';
import {
  getAllPhasesQuery,
  getAllRanksQuery
} from '../queries&Mutations&Functions/Queries';

const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 0 auto;
  /* min-width: 52rem; */
`;

class RegPhaseRank extends Component {
  state = {
    phaseID: '12',
    rankID: '',
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === 'number' ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    const { phaseID, rankID } = this.state;
    return (
      <Query query={getAllPhasesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          console.log(data);

          const { phases } = data;
          console.log(phases);
          const refinedPhase =
            phases &&
            phases.map(({ __typename, phaseName, phaseCode, ...others }) => others);

          const phaseOptions =
            phases &&
            phases.map(item => (
              <option key={item.id} value={item.id}>
                {item.phaseName}
              </option>
            ));

          return (
            <Query query={getAllRanksQuery}>
              {({ data, loading, error }) => {
                {
                  loading && <p>loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);

                const { ranks } = data;

                const refinedRank =
                  ranks &&
                  ranks.map(({ __typename, rankName, rankCode, ...others }) => others);
                const rankOptions =
                  ranks &&
                  ranks.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.rankName}
                    </option>
                  ));
                return (
                  <Mutation
                    mutation={createPhaseRankMutation}
                    variables={{
                      ...this.state,
                      rank: refinedRank &&
                        getSelectedObject(refinedRank, rankID),
                      phase: refinedPhase &&
                        getSelectedObject(refinedPhase, phaseID),
                    }}
                  >
                    {(createPhaseRank, { loading, error }) => (
                      <MiniStyledPage>
                        <Form
                          method="POST"
                          onSubmit={async e => {
                            e.preventDefault();
                            const res = await createPhaseRank();
                            console.log(res);
                          }}
                        >
                          <h4>Les Postes des Phases de l'Examen</h4>
                          <Error error={error} />
                          <fieldset disabled={loading} aria-busy={loading}>
                            <StyledDivision>
                              <select
                                type="select"
                                id="phaseID"
                                name="phaseID"
                                value={phaseID}
                                onChange={this.handleChange}
                                required
                              >
                                <option>Choisir la Phase de l'Examen </option>
                                {phaseOptions}
                              </select>

                              <select
                                type="select"
                                id="rankID"
                                name="rankID"
                                value={rankID}
                                onChange={this.handleChange}
                                required
                              >
                                <option>Choisir le Poste </option>
                                {rankOptions}
                              </select>

                              <div className="submitButton">
                                <button type="submit">
                                  Valid{loading ? 'ation en cours' : 'er'}
                                </button>
                              </div>
                            </StyledDivision>
                          </fieldset>
                        </Form>
                      </MiniStyledPage>
                    )}
                  </Mutation>
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default RegPhaseRank;
