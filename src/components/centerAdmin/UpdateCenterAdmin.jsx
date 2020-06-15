import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import { updateExamMutation } from "../queries&Mutations&Functions/Mutations";
import { singleExamQuery } from "../queries&Mutations&Functions/Queries";

import styled from "styled-components";

const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

class UpdateExam extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ examCode: "", examName: "" });
  }

  updateSingleExam = async (e, updateExamMutation) => {
    e.preventDefault();
    console.log("Updating Exam!!");
    const res = await updateExamMutation({
      variables: {
        ...this.state,
        id: this.props.id
      }
    });
    console.log("Exam Updated!!");
  };

  render() {
    return (
      <Query
        query={singleExamQuery}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { exam } = data;
          const { examName, examCode } = exam;
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !data.exam && <p>No Exam Found for ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={updateExamMutation} variables={{ id: this.props.id }}>
              {(updateExam, { loading, error }) => (
                <Form onSubmit={e => this.updateSingleExam(e, updateExam)}>
                  <h5>Modification d'un Examen</h5>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <DataFrame>
                      <input
                        type="text"
                        id="examName"
                        name="examName"
                        placeholder="Nom Examen"
                        defaultValue={examName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="examCode"
                        name="examCode"
                        placeholder="Code Examen"
                        defaultValue={examCode}
                        onChange={this.handleChange}
                        required
                      />
                      <div className="submitButton">
                        <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                      </div>
                    </DataFrame>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateExam;
