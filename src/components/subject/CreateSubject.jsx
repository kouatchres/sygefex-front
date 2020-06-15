import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import { getAllSubjectTypesQuery, getAllEducationTypesQuery } from "../queries&Mutations&Functions/Queries";
import { createNewSubjectMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";

class CreateSubject extends Component {
  state = {
    subjectName: "",
    subjectCode: "",
    subjectTypeID: "12542",
    educTypeID: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ subjectName: "", subjectCode: "" });
  }
  render() {
    const { subjectTypeID, educTypeID } = this.state;
    return (
      <Query query={getAllEducationTypesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>Loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          const { educationTypes } = data;
          const refinedEducType =
            educationTypes && educationTypes.map(({ __typename, educationTypeName, ...others }) => others);
          console.log(refinedEducType);
          const allEducTypes =
            educationTypes &&
            educationTypes.map(item => (
              <option key={item.id} value={item.id}>
                {item.educationTypeName}
              </option>
            ));
          return (
            <Query query={getAllSubjectTypesQuery}>
              {({ data, loading, error }) => {
                {
                  loading && <p>Loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                const { subjectTypes } = data;
                const refinedSubjectType = subjectTypes && subjectTypes.map(({ __typename, ...others }) => others);
                console.log(refinedSubjectType);
                const allSubjctTypes =
                  subjectTypes &&
                  subjectTypes.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.subjectTypeName}
                    </option>
                  ));
                return (
                  <Mutation
                    mutation={createNewSubjectMutation}
                    variables={{
                      ...this.state,
                      subjectType: refinedSubjectType && getSelectedObject(refinedSubjectType, subjectTypeID),
                      educType: refinedEducType && getSelectedObject(refinedEducType, educTypeID)
                    }}
                  >
                    {(createSubject, { loading, error }) => (
                      <StyledPage>
                        <Form
                          method="POST"
                          onSubmit={async e => {
                            e.preventDefault();
                            const res = await createSubject();
                            console.log(res);
                            this.resetForm();
                          }}
                        >
                          <h4>Nouvelle Matière</h4>
                          <Error error={error} />
                          <fieldset disabled={loading} aria-busy={loading}>
                            <select
                              type="select"
                              id="educTypeID"
                              name="educTypeID"
                              value={this.state.educTypeID}
                              onChange={this.handleChange}
                              required
                            >
                              <option>Choisir un Type d'Enseignement</option>
                              {allEducTypes}
                            </select>
                            <select
                              type="select"
                              id="subjectTypeID"
                              name="subjectTypeID"
                              value={this.state.subjectTypeID}
                              onChange={this.handleChange}
                              required
                            >
                              <option>Choisir un Type de Matière</option>
                              {allSubjctTypes}
                            </select>

                            <input
                              type="text"
                              id="subjectName"
                              name="subjectName"
                              placeholder="Nom de la Matière"
                              value={this.state.subjectName}
                              onChange={this.handleChange}
                              required
                            />
                            <input
                              type="text"
                              id="subjectCode"
                              name="subjectCode"
                              placeholder="Code de la Matière"
                              value={this.state.subjectCode}
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
export default CreateSubject;
