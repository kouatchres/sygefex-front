import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import { currentUserQuery } from "../queries&Mutations&Functions/Queries";
import { signoutMutation } from "../queries&Mutations&Functions/Mutations";

const SingoutButton = styled.div`
  color: white;
  background: ${(props) => props.theme.blues[2]};

  padding-left: 5rem;
  padding-right: 2rem;

  cursor: pointer;
`;

const Signout = (props) => (
  <Mutation
    mutation={signoutMutation}
    refetchQueries={[{ query: currentUserQuery }]}
  >
    {(signout) => <SingoutButton onClick={signout}> Sign Out </SingoutButton>}
  </Mutation>
);

export default Signout;
