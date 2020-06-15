import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage";
import styled from "styled-components";
import { MiniStyledPage } from "../styles/StyledPage";
import { updateScoreMutation } from "../queries&Mutations&Functions/Mutations";
import { getSelectedObject } from "../queries&Mutations&Functions/Functions";
import {
    getAllEducationTypesQuery,
    getAllSubjectsOfASeriesQuery,
    getAllSeriesOfAnEducationTypeQuery
} from "../queries&Mutations&Functions/Queries";

const CenterSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 40rem;
`;

const OtherSelect = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  min-width: 40rem;
`;

class SubjectsPerSeries extends Component {
    state = {
        subjectAve: "",
        seriesID: "12",
        examID: "12",
        educTypeID: "12",
        sessionID: "",
        candExamSecretCode: "",
        subjectSeriesID: "",


    };

    handleChange = e => {
        const { name, value, type } = e.target;
        const val = type === "number" ? parseFloat(value) : value;
        this.setState({ [name]: val });
    };
    resetForm = () => {
        this.setState({ candExamSecretCode: "", subjectAve: "" });
    };

    makeCandVariableObject = candCodeValue => {
        const storedCandidate = {
            candExamSecretCode: `${candCodeValue}`
        };
        return storedCandidate;
    };

    updateItemMutation = async (e, updateMutation) => {
        e.preventDefault();
        console.log("Entering Marks!!");
        const res = await updateMutation({
            variables: {
                ...this.state
            }
        });
        console.log("Marks entered!!");
    };

    render() {
        const { candExamSecretCode, subjectAve, seriesID, educTypeID, subjectSeriesID } = this.state;
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
                        educationTypes.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.educationTypeName}
                            </option>
                        ));

                    return (
                        <Query
                            query={getAllSeriesOfAnEducationTypeQuery}
                            variables={educationTypes && getSelectedObject(educationTypes, educTypeID)}
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

                                const seriesEducType = { ...educationType };
                                const { series } = seriesEducType;
                                console.log(series);

                                const refinedSeries = series && series.map(({ __typename, seriesName, ...others }) => others);
                                const seriesOptions =
                                    refinedSeries &&
                                    series.map(item => (
                                        <option key={item.id} value={item.id}>
                                            {item.seriesName}
                                        </option>
                                    ));
                                return (
                                    <Query
                                        query={getAllSubjectsOfASeriesQuery}
                                        variables={refinedSeries && getSelectedObject(refinedSeries, seriesID)}
                                    >
                                        {({ data, loading, error }) => {
                                            {
                                                loading && <p>loading...</p>;
                                            }
                                            {
                                                error && <Error error={error} />;
                                            }

                                            console.log(data);
                                            const { series } = data;
                                            const allEducTypes = { ...series };
                                            const { subjectSeries } = allEducTypes;
                                            console.log(subjectSeries);

                                            const refinedSubjectSeries =
                                                subjectSeries && subjectSeries.map(({ __typename, subjectName, subjectCode, ...others }) => others);
                                            const subjectOptions =
                                                subjectSeries &&
                                                subjectSeries.map(item => (
                                                    <option key={item.id} value={item.id}>
                                                        {item.subjectName}
                                                    </option>
                                                ));

                                            return (

                                                <MiniStyledPage>
                                                    <Form
                                                        method="POST"
                                                        onSubmit={async e => {
                                                            e.preventDefault();

                                                        }}
                                                    >
                                                        <h4>Notes aux candidats</h4>
                                                        <Error error={error} />
                                                        <fieldset disabled={loading} aria-busy={loading}>
                                                            <select
                                                                type="select"
                                                                id="educTypeID"
                                                                name="educTypeID"
                                                                value={educTypeID}
                                                                onChange={this.handleChange}
                                                                required
                                                            >
                                                                <option>Type d'Enseignement</option>
                                                                {educTypeOptions}
                                                            </select>
                                                            <select
                                                                type="select"
                                                                id="seriesID"
                                                                name="seriesID"
                                                                value={seriesID}
                                                                onChange={this.handleChange}
                                                                required
                                                            >
                                                                <option>La Série</option>
                                                                {seriesOptions}
                                                            </select>
                                                            <select
                                                                type="select"
                                                                id="subjectSeriesID"
                                                                name="subjectSeriesID"
                                                                value={subjectSeriesID}
                                                                onChange={this.handleChange}
                                                                required
                                                            >
                                                                <option>Choisir La matière </option>
                                                                {subjectOptions}
                                                            </select>
                                                            <input
                                                                type="text"
                                                                id="candExamSecretCode"
                                                                name="candExamSecretCode"
                                                                placeholder="Code secret du candidat"
                                                                value={candExamSecretCode}
                                                                onChange={this.handleChange}
                                                                required
                                                            />
                                                            <input
                                                                type="number"
                                                                step="0.001"
                                                                min="0.0"
                                                                max="20.0"
                                                                id="subjectAve"
                                                                name="subjectAve"
                                                                placeholder="Note du candidat en la matière "
                                                                value={subjectAve}
                                                                onChange={this.handleChange}
                                                                required
                                                            />

                                                            <div className="submitButton">
                                                                <button type="submit">Valid{loading ? "ation en cours" : "er"}</button>
                                                            </div>
                                                        </fieldset>
                                                    </Form>
                                                </MiniStyledPage>
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

export default SubjectsPerSeries;
