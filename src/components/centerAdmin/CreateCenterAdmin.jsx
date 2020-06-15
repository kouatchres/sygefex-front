import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { MinimStyledPage } from "../styles/StyledPage";
import { createCenterAdminMutation } from "../queries&Mutations&Functions/Mutations";
import { uniqueCodeGen, getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
  getAllRanksQuery,
  getSingleCenterQuery,
  getSingleCenterExamSessionQuery,
  getExamSessionQuery,
  getAllExamsQuery,
  getAllSessionsQuery
} from "../queries&Mutations&Functions/Queries";

const StyledDivision = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  text-align: center;
  margin: 0 auto;
  .submitButton{
    padding-top:0.3rem;
    /* font-size:1.6rem; */

  }
`;


const OtherSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
`;

class createCenterAdmin extends Component {
  state = {
    centerNumber: "",
    rankID: "12",
    examID: "12",
    sessionID: "12",
    authName: "",
    authMatricule: "",
    authCNI: "",
    authPhone: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  getSessionRank = () => {
    const sessionRank = `${this.state.sessionID}-${this.state.rankID}`;
    return sessionRank;
  };

  getCenterNumber = (object, centerCode) => {
    if (this.state.centerNumber === object) {
      return object.centerCode
    }
    return null;
  }

  resetForm = () => {
    this.setState({ centerNumber: "", centerName: "", authMatricule: "", authCNI: "", authName: "", authPhone: "" });
  };

  render() {
    const { centerNumber, examID, sessionID, rankID, authCNI, authMatricule, authPhone, authName } = this.state;
    return (
      <Query query={getAllSessionsQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>loading...</p>;
          }
          {
            error && <Error error={error} />;
          }

          const { sessions } = data;
          const refinedSessions =
            sessions && sessions.map(({ __typename, sessionName, ...others }) => others);

          return (
            <Query query={getAllRanksQuery}>
              {({ data, loading, error }) => {
                {
                  loading && <p>loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }

                const { ranks } = data;
                console.log(ranks);
                const refinedRanks =
                  ranks && ranks.map(({ __typename, rankName, rankCode, ...others }) => others);

                return (
                  <Query query={getAllExamsQuery}>
                    {({ data, loading, error }) => {
                      {
                        loading && <p>loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }

                      const { exams } = data;
                      const refinedExams =
                        exams && exams.map(({ __typename, examName, ...others }) => others);
                      return (
                        <Query query={getExamSessionQuery}
                          variables={{

                            exam: refinedExams && getSelectedObject(refinedExams, examID),
                            session: refinedSessions && getSelectedObject(refinedSessions, sessionID)
                          }}  >
                          {({ data, error, loading }) => {
                            {
                              error && <Error error={error} />
                            }
                            console.log(data)
                            const { examSessions } = { ...data }
                            const refinedES = examSessions && examSessions.map(({ __typename, ...others }) => others)
                            const reducedES = refinedES && refinedES.reduce((item) => item)
                            console.log(reducedES)

                            return (
                              <Query query={getSingleCenterQuery}
                                variables={{ centerNumber: centerNumber, }}  >
                                {({ data, error, loading }) => {
                                  {
                                    error && <Error error={error} />
                                  }
                                  const { centerByNumber } = { ...data }
                                  const { centerCode: showCenterCode, centerNumber: showNumber } = { ...centerByNumber }
                                  centerByNumber && delete centerByNumber.__typename
                                  console.log(showCenterCode)
                                  console.log(showNumber)
                                  console.log(centerByNumber)
                                  return (
                                    < Query
                                      query={getSingleCenterExamSessionQuery}
                                      variables={{
                                        examSession: reducedES && reducedES,
                                        center: centerByNumber && centerByNumber
                                      }}>
                                      {({ data, error, loading }) => {
                                        {
                                          error && <Error error={error} />
                                        }
                                        console.log(data);
                                        const { centerExamSessions } = {
                                          ...data
                                        };
                                        console.log(centerExamSessions);
                                        // remove typename from the object
                                        const refinedCenterExamSessions = centerExamSessions && centerExamSessions.map(({
                                          __typename,
                                          ...others
                                        }) => others);
                                        // transform the array into a single object
                                        const getObj = refinedCenterExamSessions && refinedCenterExamSessions.reduce((item) => item);
                                        console.log(getObj);
                                        return (
                                          <Mutation
                                            mutation={createCenterAdminMutation}
                                            variables={{
                                              ...this.state,
                                              rank: refinedRanks && getSelectedObject(refinedRanks, rankID),
                                              centerExamSession: getObj && getObj,
                                              authCode: uniqueCodeGen(8)
                                            }}
                                          >
                                            {(createCenterAdmin, { loading, error }) => (
                                              <MinimStyledPage>
                                                <Form
                                                  method="POST"
                                                  onSubmit={async e => {
                                                    e.preventDefault();
                                                    const res = await createCenterAdmin();
                                                    console.log(res);
                                                    this.resetForm();
                                                  }}
                                                >
                                                  <h4>Authorités de centre</h4>
                                                  <Error error={error} />
                                                  <fieldset disabled={loading} aria-busy={loading}>
                                                    <StyledDivision>
                                                      <OtherSelect>
                                                        <input
                                                          type="textarea"
                                                          id="centerName"
                                                          name="centerName"
                                                          placeholder="Nom du centre"
                                                          value={showNumber && showCenterCode}
                                                          rows="3"
                                                          disabled
                                                          wrap="soft"
                                                          readonly
                                                        />
                                                        <input
                                                          type="number"
                                                          id="centerNumber"
                                                          name="centerNumber"
                                                          placeholder="Numéro du centre"
                                                          value={centerNumber}
                                                          onChange={this.handleChange}
                                                          required />


                                                        <select
                                                          type="select"
                                                          id="sessionID"
                                                          name="sessionID"
                                                          value={sessionID}
                                                          onChange={this.handleChange}
                                                          required
                                                        >
                                                          <option>La Session</option>
                                                          {sessions &&
                                                            sessions.map(item => (
                                                              <option key={item.id} value={item.id}>
                                                                {item.sessionName}
                                                              </option>
                                                            ))}
                                                        </select>
                                                        <select
                                                          type="select"
                                                          id="examID"
                                                          name="examID"
                                                          value={examID}
                                                          onChange={this.handleChange}
                                                          required
                                                        >
                                                          <option>Le Examen</option>
                                                          {exams &&
                                                            exams.map(item => (
                                                              <option key={item.id} value={item.id}>
                                                                {item.examName}
                                                              </option>
                                                            ))}
                                                        </select>


                                                        <select
                                                          type="select"
                                                          id="rankID"
                                                          name="rankID"
                                                          value={rankID}
                                                          onChange={this.handleChange}
                                                          required
                                                        >
                                                          <option>Le Rang occupé au Centre</option>
                                                          {ranks &&
                                                            ranks.map(item => (
                                                              <option key={item.id} value={item.id}>
                                                                {item.rankName}
                                                              </option>
                                                            ))}
                                                        </select>

                                                        <input
                                                          type="text"
                                                          id="authName"
                                                          name="authName"
                                                          placeholder="Noms de l'authorite"
                                                          value={authName}
                                                          onChange={this.handleChange}
                                                          required
                                                        />
                                                        <input
                                                          type="text"
                                                          id="authPhone"
                                                          name="authPhone"
                                                          placeholder="No Tel:"
                                                          value={authPhone}
                                                          onChange={this.handleChange}
                                                          required
                                                        />
                                                        <input
                                                          type="text"
                                                          id="authMatricule"
                                                          name="authMatricule"
                                                          placeholder="Matricule"
                                                          value={authMatricule}
                                                          onChange={this.handleChange}
                                                          required
                                                        />
                                                        <input
                                                          type="text"
                                                          id="authCNI"
                                                          name="authCNI"
                                                          placeholder="No CNI"
                                                          value={authCNI}
                                                          onChange={this.handleChange}
                                                          required
                                                        />

                                                        <div className="submitButton">
                                                          <button type="submit">
                                                            Valid{loading ? "ation en cours" : "er"}
                                                          </button>
                                                        </div>
                                                      </OtherSelect>
                                                    </StyledDivision>
                                                  </fieldset>
                                                </Form>
                                              </MinimStyledPage>
                                            )}
                                          </Mutation>
                                        );
                                      }}
                                    </Query>
                                  );
                                }}
                              </Query>
                            );
                          }}
                        </Query>
                      );
                    }
                    }
                  </Query>
                );
              }}
            </Query>
          );
        }
        }
      </Query >


    );
  }
}

export default createCenterAdmin;
