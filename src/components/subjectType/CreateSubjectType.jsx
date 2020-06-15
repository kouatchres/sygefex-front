import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createNewSubjectTypeMutation } from "../queries&Mutations&Functions/Mutations";

class createSubjectType extends Component {
  state = {
    subjectTypeName: "",
    subjectTypeCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ subjectTypeName: "", subjectTypeCode: "" });
  }

  render() {
    return (
      <Mutation mutation={createNewSubjectTypeMutation} variables={this.state}>
        {(createSubjectType, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createSubjectType();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouveau Type de Matière</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="subjectTypeName"
                  name="subjectTypeName"
                  placeholder="Nom Type de Matière"
                  value={this.state.subjectTypeName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="subjectTypeCode"
                  name="subjectTypeCode"
                  placeholder="Code type de Matière"
                  value={this.state.subjectTypeCode}
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
export default createSubjectType;
