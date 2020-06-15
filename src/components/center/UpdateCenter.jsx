import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage.js";
import { singleCenterQuery } from "../queries&Mutations&Functions/Queries";
import { updateCenterMutation } from "../queries&Mutations&Functions/Mutations";

class UpdateCenter extends Component {
  state = {};

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateSingleCenter = async (e, updateMutation) => {
    e.preventDefault();
    const res = await updateMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
  };

  render() {
    return (
      <Query
        query={singleCenterQuery}
        variables={{ id: this.props.id }}
      >
        {({ data, loading, error }) => {
          console.log(data);
          const { center } = data;
          const { centerName, centerCode, centerNumber } = center;

          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          {
            !center && <p>Pas de Centre pour ce ID {this.props.id}</p>;
          }

          return (
            <Mutation mutation={updateCenterMutation} variables={{ id: this.props.id }}>
              {(updateCenter, { loading, error }) => (

                <StyledPage>
                  <Form onSubmit={e => this.updateSingleCenter(e, updateCenter)}>
                    <h4>Modification d'Info Centre</h4>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <input
                        type="text"
                        id="centerName"
                        name="centerName"
                        placeholder="Nom Centre"
                        defaultValue={centerName}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="centerCode"
                        name="centerCode"
                        placeholder="Code Centre"
                        defaultValue={centerCode}
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        id="centerNumber"
                        name="centerNumber"
                        placeholder="Numero du Centre"
                        defaultValue={centerNumber}
                        onChange={this.handleChange}
                        required
                      />
                      <div className="submitButton">
                        <button type="submit">Modifi{loading ? "cation en cours" : "er"}</button>
                      </div>
                    </fieldset>
                  </Form>
                </StyledPage>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateCenter;
