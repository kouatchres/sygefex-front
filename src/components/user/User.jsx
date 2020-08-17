import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { currentUserQuery } from "../queries&Mutations&Functions/Queries";

const User = (props) => (
  <Query {...props} query={currentUserQuery}>
    {(payload) => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};
export default User;
