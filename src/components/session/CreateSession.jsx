import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createNewSessionMutation } from "../queries&Mutations&Functions/Mutations";

class CreateSession extends Component {
  state = {
    sessionName: "",
    sessionCode: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ sessionName: "", sessionCode: "" });
  }
  render() {
    this.state
    const { sessionName, sessionCode } = this.state
    return (
      <Mutation mutation={createNewSessionMutation} variables={this.state}>
        {(createSession, { loading, error }) => (
          <StyledPage>
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createSession();
                console.log(res);
                this.resetForm();
              }}
            >
              <h4>Nouvelle Session</h4>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="sessionName"
                  name="sessionName"
                  placeholder="Nom Session"
                  value={sessionName}
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="text"
                  id="sessionCode"
                  name="sessionCode"
                  placeholder="Code Session "
                  value={sessionCode}
                  onChange={this.handleChange}
                  required
                />
                <div className="submitButton">
                  <button type="submit">Valid{loading ? "ation en cours" : "er"} </button>
                </div>
              </fieldset>
            </Form>
          </StyledPage>
        )}
      </Mutation>
    );
  }
}
export default CreateSession;
