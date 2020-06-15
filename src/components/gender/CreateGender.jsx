import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import { createNewGenderMutation } from "../queries&Mutations&Functions/Mutations";
import Error from "../ErrorMessage";

class CreateGender extends Component {
  state = {
    genderName: "",
    genderCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };
  resetForm() {
    this.setState({ genderName: "", genderCode: "" });
  }

  render() {
    return (
      <Mutation mutation={createNewGenderMutation} variables={this.state}>
        {(createGender, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createGender();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouveau Sexe</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="genderName"
                  name="genderName"
                  placeholder="Nom Sexe "
                  value={this.state.genderName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="genderCode"
                  name="genderCode"
                  placeholder="Code Sexe"
                  value={this.state.genderCode}
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
export default CreateGender;
