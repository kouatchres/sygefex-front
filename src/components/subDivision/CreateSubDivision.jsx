import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { createSubDivisionMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import { getAllRegionsQuery, getDivisionsOfARegionQuery } from "../queries&Mutations&Functions/Queries";

class CreateSubDivision extends Component {
  state = {
    subDivName: "",
    subDivCode: "",
    divisionID: "12",
    regionID: "12",
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ subDivName: "", subDivCode: "" });
  }
  render() {
    const { regionID, divisionID, subDivName, subDivCode } = this.state;
    return (
      <Query query={getAllRegionsQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { regions } = data;
          const refinedRegion = regions && regions.map(({ __typename, ...others }) => others);
          //prepare data for the region select options
          const regionsOptions =
            refinedRegion &&
            refinedRegion.map(item => (
              <option value={item.id} key={item.id}>
                {item.regName}
              </option>
            ));
          return (
            <Query query={getDivisionsOfARegionQuery} variables={refinedRegion && getSelectedObject(refinedRegion, regionID)}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);
                const { region } = data;
                const allDivs = { ...region };
                const { division } = allDivs;

                const refinedDivision = division && division.map(({ __typename, divName, ...others }) => others);

                const divisionsOptions =
                  division &&
                  division.map(item => (
                    <option value={item.id} key={item.id}>{item.divName}</option>));

                return (
                  <Mutation
                    mutation={createSubDivisionMutation}
                    variables={{
                      ...this.state,
                      division: refinedDivision && getSelectedObject(refinedDivision, divisionID)
                    }}
                  >
                    {(createSubDivision, { loading, error }) => (
                      <StyledPage>
                        <Form
                          method="POST"
                          onSubmit={async e => {
                            e.preventDefault();
                            const res = await createSubDivision();
                            console.log(res);
                            console.log(this.state);
                            this.resetForm();
                          }}
                        >
                          <h4>Nouvel Arrondisement</h4>
                          <Error error={error} />
                          <fieldset disabled={loading} aria-busy={loading}>
                            <select
                              type="select"
                              id="regionID"
                              name="regionID"
                              value={regionID}
                              onChange={this.handleChange}
                              required
                            >
                              <option>La region</option>
                              {regionsOptions}
                            </select>
                            <select
                              type="select"
                              id="divisionID"
                              name="divisionID"
                              value={divisionID}
                              onChange={this.handleChange}
                              required
                            >
                              <option>Le departement</option>
                              {divisionsOptions}
                            </select>
                            <input
                              type="text"
                              id="subDivName"
                              name="subDivName"
                              placeholder="Nom Arrondissement"
                              value={subDivName}
                              onChange={this.handleChange}
                              required
                            />
                            <input
                              type="text"
                              id="subDivCode"
                              name="subDivCode"
                              placeholder="Code Arrondissement"
                              value={subDivCode}
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
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default CreateSubDivision;
