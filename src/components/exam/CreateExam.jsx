import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createExamMutation } from "../queries&Mutations&Functions/Mutations";

class CreateExam extends Component {
  state = {
    examName: "",
    examCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ examName: "", examCode: "" });
  }
  render() {
    return (
      <Mutation mutation={createExamMutation} variables={this.state}>
        {(createExam, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createExam();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouvel Examen</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="examName"
                  name="examName"
                  placeholder="Libellé Examen "
                  value={this.state.examName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="examCode"
                  name="examCode"
                  placeholder="Code Examen "
                  value={this.state.examCode}
                  onChange={this.handleChange}
                  required
                />
                <div className="submitButton">
                  <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                </div>
              </fieldset>
            </Form>
          </StyledPage>
        )}
      </Mutation>
    );
  }
}
export default CreateExam;
