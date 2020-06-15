import React, { Component } from "react";
import Form from "../styles/Form";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import Link from "next/link";
import { signInCandidate } from "../queries&Mutations&Functions/Mutations";

const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  grid-auto-flow: row;
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

class CandidateCodeEntry extends Component {
  state = {
    candCode: ""
  };
  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  objectFromCode = codeValue => {
    const storedObject = {
      candCode: `${codeValue}`
    };
    return storedObject;
  };

  getIDFromCode = () => {
    console.log("getting Candidate ID!!");
    const res = candidateSignIn({
      variables: {
        candCode: this.state.candCode
      }
    });
    console.log(res);
    return res;
  };

  render() {
    return (
      <Mutation mutation={signInCandidate} variables={this.state}>
        {(getIDFromCode, { error, loading }) => (
          <Form
            method="POST"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <h5> Candidate to Update. Enter Code</h5>
            <fieldset>
              <StyledPage>
                <input
                  type="text"
                  id="candCode"
                  name="candCode"
                  value={this.state.candCode}
                  placeholder="Enter Your Candidate Code"
                  onChange={this.handleChange}
                  required
                />
                <UpdateBtn>
                  <Link
                    href={{
                      pathname: "../updates/updateCand",
                      query: {
                        id: this.getIDFromCode(this.state.candCode)
                      }
                    }}
                  >
                    <a>Update </a>
                  </Link>
                </UpdateBtn>
              </StyledPage>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CandidateCodeEntry;
