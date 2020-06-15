import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import Form from "../styles/Form";
import Error from "../ErrorMessage.js";
import Link from "next/link";
import styled from "styled-components";
import { getACenterAdminQuery } from "../queries&Mutations&Functions/Queries";

const DataFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateBtn = styled.button`
  background-color: #379;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  height: 30px;
  border: none;
  outline: none;
  a {
    color: white;
  }
`;


class authCodeEntry extends Component {
  state = { authCode: "" };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  resetForm() {
    this.setState({ examCode: "", examName: "" });
  }
  getIDFromCode = () => {
    console.log("getting CA ID!!");
    const res = candidateSignIn({
      variables: {
        authCode: this.state.authCode
      }
    });
    console.log(res);
    return res;
  };

  findTheCenterAdmin = async  findCenterAdminQuery => {
    console.log("Looking for CA!!");
    const res = await findCenterAdminQuery({
      variables: {
        authCode: this.state.authCode
      }
    });
    console.log(res);
    return res;
  };

  render() {
    return (
      <Form >
        <h5>Modification d'un Examen</h5>
        <fieldset>
          <DataFrame>
            <input
              type="text"
              id="authCode"
              name="authCode"
              placeholder="Code Examen"
              value={this.state.authCode}
              onChange={this.handleChange}
              required
            />
            <UpdateBtn>
              <Link
                href={{
                  pathname: "../updates/updateCand",
                  query: {
                    authCode: this.findTheCenterAdmin( getACenterAdminQuery)
                  }
                }}
              >
                <a>Update </a>
              </Link>
            </UpdateBtn>
          </DataFrame>
        </fieldset>
      </Form>
    );
  }
}

export default authCodeEntry;
