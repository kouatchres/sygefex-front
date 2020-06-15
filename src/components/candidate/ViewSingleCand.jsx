import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import { viewSingleCandidateQuery } from "../queries&Mutations&Functions/Queries";

class ViewSingleCand extends Component {
  state = {
    // candCode: "",
    candCode: "PZseBY(H06v@"
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ candCode: "" });
  }

  render() {
    const { candCode } = this.state
    return (
      <Query query={viewSingleCandidateQuery} variables={candCode}>
        {({ data, loading, error }) => {
          return (
            <Form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                const res = await ViewSingleCand();
                console.log(res);
                this.resetForm();
              }}
            >
              <h5>Candidat </h5>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <input
                  type="text"
                  id="candCode"
                  name="candCode"
                  placeholder="Code candidat"
                  value={candCode}
                  onChange={this.handleChange}
                  required
                />
                <UpdateBlock>
                  <Link href={{ pathname: "../show/singleCand", query: { id } }}>
                    <a>{loading ? "Recherche en cours" : "Chercher"}</a>
                  </Link>
                </UpdateBlock>
              </fieldset>
            </Form>
          );
        }}
      </Query>
    );
  }
}
export default ViewSingleCand;
