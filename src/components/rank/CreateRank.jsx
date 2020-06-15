import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createNewRankMutation } from "../queries&Mutations&Functions/Mutations";

class CreateRank extends Component {
  state = {
    rankName: "",
    rankCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ rankName: "", rankCode: "" });
  }
  render() {
    return (
      <Mutation mutation={createNewRankMutation} variables={this.state}>
        {(createRank, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createRank();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouveau Poste</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="rankName"
                  name="rankName"
                  placeholder="Nom Poste"
                  value={this.state.rankName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="rankCode"
                  name="rankCode"
                  placeholder="Code Poste"
                  value={this.state.rankCode}
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
export default CreateRank;
