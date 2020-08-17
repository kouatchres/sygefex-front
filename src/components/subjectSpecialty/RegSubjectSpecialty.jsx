import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import { MiniStyledPage } from "../styles/StyledPage";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { registerNewSubjectSpecialtyMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
  getAllEducationTypesQuery,
  getAllSubjectsOfAnEducTypeQuery,
  getAllSpecialtyOfAnEducationTypeQuery,
} from "../queries&Mutations&Functions/Queries";

const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 0 auto;
  /* min-width: 52rem; */
`;

class RegSubjectSpecialty extends Component {
  state = {
    specialtyID: "12",
    educTypeID: "12",
    subjectID: "12",
    coeff: "",
  };

  handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };
  resetForm = () => {
    this.setState({ coeff: "", subjectID: "" });
  };

  render() {
    const { coeff, educTypeID, subjectID, specialtyID } = this.state;
    return (
      <Query query={getAllEducationTypesQuery}>
        {({ data, loading, error }) => {
          {
            loading && <p>loading...</p>;
          }
          {
            error && <Error error={error} />;
          }
          console.log(data);

          const { educationTypes } = data;
          console.log(educationTypes);
          const educTypeOptions =
            educationTypes &&
            educationTypes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.educationTypeName}
              </option>
            ));

          return (
            <Query
              query={getAllSpecialtyOfAnEducationTypeQuery}
              variables={
                educationTypes && getSelectedObject(educationTypes, educTypeID)
              }
            >
              {({ data, loading, error }) => {
                {
                  loading && <p>loading...</p>;
                }
                {
                  error && <Error error={error} />;
                }
                console.log(data);

                const { educationType } = data;

                const specialtyEducType = { ...educationType };
                const { specialty } = specialtyEducType;
                console.log(specialty);

                const refinedSpecialty =
                  specialty &&
                  specialty.map(
                    ({ __typename, specialtyName, ...others }) => others
                  );
                const specialtyOptions =
                  specialty &&
                  specialty.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.specialtyName}
                    </option>
                  ));
                return (
                  <Query
                    query={getAllSubjectsOfAnEducTypeQuery}
                    variables={
                      educationTypes &&
                      getSelectedObject(educationTypes, educTypeID)
                    }
                  >
                    {({ data, loading, error }) => {
                      {
                        loading && <p>loading...</p>;
                      }
                      {
                        error && <Error error={error} />;
                      }

                      console.log(data);
                      const { educationType } = data;
                      const allEducTypes = { ...educationType };
                      const { subject } = allEducTypes;
                      console.log(subject);
                      const refinedSubject =
                        subject &&
                        subject.map(({ __typename, ...others }) => others);
                      const subjectOptions =
                        subject &&
                        subject.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.subjectName}
                          </option>
                        ));

                      return (
                        <Mutation
                          mutation={registerNewSubjectSpecialtyMutation}
                          variables={{
                            ...this.state,
                            specialty:
                              refinedSpecialty &&
                              getSelectedObject(refinedSpecialty, specialtyID),
                            //spread out the the subject object from which we can extract the subjectName and subjCode
                            subjectName:
                              refinedSubject &&
                              {
                                ...getSelectedObject(refinedSubject, subjectID),
                              }.subjectName,
                            subjectCode:
                              refinedSubject &&
                              {
                                ...getSelectedObject(refinedSubject, subjectID),
                              }.subjectCode,
                          }}
                        >
                          {(createSubjectSpecialty, { loading, error }) => (
                            <MiniStyledPage>
                              <Form
                                method="POST"
                                onSubmit={async (e) => {
                                  e.preventDefault();
                                  const res = await createSubjectSpecialty();
                                  console.log(res);
                                  this.resetForm();
                                }}
                              >
                                <h4>Donner les matières aux Séries</h4>
                                <Error error={error} />
                                <fieldset
                                  disabled={loading}
                                  aria-busy={loading}
                                >
                                  <StyledDivision>
                                    <select
                                      type="select"
                                      id="educTypeID"
                                      name="educTypeID"
                                      value={educTypeID}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      <option>
                                        Choisir un Type d'enseignement
                                      </option>
                                      {educTypeOptions}
                                    </select>
                                    <select
                                      type="select"
                                      id="specialtyID"
                                      name="specialtyID"
                                      value={specialtyID}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      <option>Choisir une série</option>
                                      {specialtyOptions}
                                    </select>
                                    <select
                                      type="select"
                                      id="subjectID"
                                      name="subjectID"
                                      value={subjectID}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      <option>Choisir la matière</option>
                                      {subjectOptions}
                                    </select>
                                    <input
                                      type="number"
                                      placeholder="Coefficient de la matière"
                                      id="coeff"
                                      name="coeff"
                                      value={coeff}
                                      onChange={this.handleChange}
                                      required
                                    />
                                    <div className="submitButton">
                                      <button type="submit">
                                        Valid{loading ? "ation en cours" : "er"}
                                      </button>
                                    </div>
                                  </StyledDivision>
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
}

export default RegSubjectSpecialty;
