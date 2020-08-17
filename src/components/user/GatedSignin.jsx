import React from "react";
import Error from "../ErrorMessage";
import { Query } from "react-apollo";
import Login from "./Login";
import { currentUserQuery } from "../queries&Mutations&Functions/Queries";

const GatedSignin = (props) => (
  <Query query={currentUserQuery}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <Error error={error} />
            <p>Veuillez vous connecter</p>
            <Login />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default GatedSignin;
