import React, { Component } from "react";
import { Query } from "react-apollo";
import Form from "../styles/Form";
import { StyledPage } from "../styles/StyledPage";
import Link from "next/link";
import Error from "../ErrorMessage";
import styled from "styled-components";
import DeleteRegion from "../region/DeleteRegion";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";

const DeleteBlock = styled.div`
  align-content: left;
`;
const UpdateBlock = styled.button`
  font-weight: bold;
  border-radius: 8px;
  font-size: 1.5rem;
  height: 30px;
  border: none;
  padding: 5px;
  align-items: center;
  color: white;
  :hover {
    cursor: pointer;
  }
  a {
    background-color: ${props => props.theme.googleBlue};
    color: white;
  }
`;

const SelectBlock = styled.div`
  display: block;
`;
const StyledDivision = styled.div`
  display: grid;
  grid-template-columns: 7fr auto auto;
  grid-gap: 20px;
  text-align: center;
  margin: 0 auto;
`;

class SelectRegionToModify extends Component {
  state = {
    id: ""
  };

  handleChange = e => {
    const { name, value, type } = e.target;
    const val = type === "number" ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render = () => {
    const { id } = this.state;
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
          //'getting region from the state')

          const getRegions =
            regions &&
            regions.map(item => (
              <option value={item.id} key={item.id}>
                {item.regName} - {item.regCode}
              </option>
            ));

          return (
            <StyledPage>
              <Form
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <h4>Modification de Région</h4>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <StyledDivision>
                    <SelectBlock>
                      <select type="select" id="id" name="id" value={id} onChange={this.handleChange} required>
                        <option> Choisir région a modifier </option>
                        {getRegions}
                      </select>
                    </SelectBlock>

                    <UpdateBlock>
                      <Link href={{ pathname: "../updates/updateRegion", query: { id } }}>
                        <a>Modifier</a>
                      </Link>
                    </UpdateBlock>
                    <DeleteBlock>
                      <DeleteRegion id={id}>Supprimer</DeleteRegion>
                    </DeleteBlock>
                  </StyledDivision>
                </fieldset>
              </Form>
            </StyledPage>
          );
        }}
      </Query>
    );
  };
}

export default SelectRegionToModify;
