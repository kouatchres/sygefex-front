import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import Form from "../styles/Form";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import useForm from '../utils/useForm'
import { createCenterMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject, uniqueCodeGen } from "../queries&Mutations&Functions/Functions";

import {
  getAllRegionsQuery,
  getDivisionsOfARegionQuery,
  getSubDivisionsOfADivisionQuery,
  getTownsOfASubDivisionQuery
} from "../queries&Mutations&Functions/Queries";

const CreateCenter=()=> {
const [state, setState]= useForm({
    centerName: "",
    centerCode: "",
    centerNumber: "",
    townID: "12",
    divisionID: "12",
    subDivisionID: "12",
    regionID: "12",
    region: "",
    division: "",
    subDivision: "",
    town: ""
})

  handleChange = e => {
    const { name, value, type } = e.target;
    const setValue = type === "number" ? parseInt(value) : value;
    setState({ [name]: setValue });
  };
  resetForm() {
    this.setState({ centerName: "", centerCode: "", centerNumber: "" });
  }

    const { regionID, centerNumber, centerCode, centerSecretCode, divisionID, subDivisionID, townID, centerName } = this.state;
    return (
      const { data, loading, error } = useQuery(getAllRegionsQuery)
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

                const { region } = data;
                const allDivs = { ...region };
                const { division } = allDivs;
                console.log(allDivs);
                console.log(division);
                const refinedDivision = division && division.map(({ __typename, ...others }) => others);

                const divisionsOptions =
                  refinedDivision &&
                  refinedDivision.map(item => (
                    <option value={item.id} key={item.id}>
                      {item.divName}
                    </option>
                  ));

                return (
                  <Query
                    query={getSubDivisionsOfADivisionQuery}
                    variables={refinedDivision && getSelectedObject(refinedDivision, divisionID)}
                  >
                    {({ data, loading, error }) => {
                      {
                        loading && <p>Loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }
                      const { division: departement } = data;

                      const allSubDivs = { ...departement };
                      const { subDivision } = allSubDivs;
                      console.log(subDivision);
                      const refinedDepartement = subDivision && subDivision.map(({ __typename, ...others }) => others);

                      const subDivisionsOptions =
                        refinedDepartement &&
                        refinedDepartement.map(item => (
                          <option value={item.id} key={item.id}>
                            {item.subDivName}
                          </option>
                        ));

                      return (
                        <Query
                          query={getTownsOfASubDivisionQuery}
                          variables={refinedDepartement && getSelectedObject(refinedDepartement, subDivisionID)}
                        >
                          {({ data, loading, error }) => {
                            {
                              loading && <p>Loading...</p>;
                            }
                            {
                              error && <Error>error={error}</Error>;
                            }

                            const village = data.subDivision;

                            const allTowns = { ...village };

                            const { town } = allTowns;
                            const refinedTown = town && town.map(({ __typename, townName, townCode, ...others }) => others);
                            return (
                              <Mutation
                                mutation={createCenterMutation}
                                variables={{
                                  ...this.state,
                                  town: town && getSelectedObject(refinedTown, townID),
                                  centerSecretCode: uniqueCodeGen(18)
                                }}
                              >
                                {(createCenter, { loading, error }) => (
                                  <MiniStyledPage>
                                    <Form
                                      method="POST"
                                      onSubmit={async e => {
                                        e.preventDefault();
                                        const res = await createCenter();
                                        console.log(res);
                                        this.resetForm();
                                      }}
                                    >
                                      <h4>Nouveau Centre d'Examen</h4>
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
                                          <option>La région</option>
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
                                          <option>Le département</option>
                                          {divisionsOptions}
                                        </select>
                                        <select
                                          type="select"
                                          id="subDivisionID"
                                          name="subDivisionID"
                                          value={subDivisionID}
                                          onChange={this.handleChange}
                                          required
                                        >
                                          <option>L'arrondissement</option>
                                          {subDivisionsOptions}
                                        </select>
                                        <select
                                          type="select"
                                          id="townID"
                                          name="townID"
                                          value={townID}
                                          onChange={this.handleChange}
                                          required
                                        >
                                          <option>Le ville</option>
                                          {town &&
                                            town.map(item => (
                                              <option value={item.id} key={item.id}>
                                                {item.townName}
                                              </option>
                                            ))}
                                        </select>
                                        <input
                                          type="text"
                                          id="centerName"
                                          name="centerName"
                                          placeholder="Nom du Centre d'examen"
                                          value={centerName}
                                          onChange={this.handleChange}
                                          required
                                        />
                                        <input
                                          type="text"
                                          id="centerCode"
                                          name="centerCode"
                                          placeholder="Code centre d'examen"
                                          value={centerCode}
                                          onChange={this.handleChange}
                                          required
                                        />
                                        <input
                                          type="text"
                                          id="centerNumber"
                                          name="centerNumber"
                                          placeholder="No du Centre"
                                          value={centerNumber}
                                          onChange={this.handleChange}
                                          required
                                        />
                                        <div className="submitButton">
                                          <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                                        </div>
                                      </fieldset>
                                    </Form>
                                  </MiniStyledPage>
                                )}
                              </Mutation>
                            );
                          }}
                        </Query>
                      );
                    }}
                  </Query>
                );
              }}
            </Query>
         
    );
}

export default CreateCenter;
