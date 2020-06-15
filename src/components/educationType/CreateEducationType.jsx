import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createEducationTypeMutation } from "../queries&Mutations&Functions/Mutations";

class CreateEducationType extends Component {
  state = {
    educationTypeName: "",
    educationTypeCode: ""
  };
  resetForm() {
    this.setState({ educationTypeName: "", educationTypeCode: "" });
  }
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation
        mutation={createEducationTypeMutation}
        variables={{
          ...this.state
        }}
      >
        {(createEducationType, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createEducationType();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouveau Type d'Enseignement</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="educationTypeName"
                  name="educationTypeName"
                  placeholder="Type D'Enseignement"
                  value={this.state.educationTypeName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="educationTypeCode"
                  name="educationTypeCode"
                  placeholder="Code du Type d'Enseignement"
                  value={this.state.educationTypeCode}
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
export default CreateEducationType;
