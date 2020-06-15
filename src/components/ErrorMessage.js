import styled from "styled-components";
import React from "react";

import PropTypes from "prop-types";

const ErrorStyles = styled.div`
  padding: 0.5rem;
  background: ${props => props.theme.grey[2]};
  margin:0 1.1rem ;
  border-radius: 0.5rem;
  border: 0.01rem solid rgba(0, 0, 0, 0.05);
  /* border-right: 0.08rem solid red; */
  border-left: 0.05rem solid red;
  p {
    margin: 0;
    font-size:1.2rem;
    font-weight: bold;
  }
  strong {
    margin-right: 0.15rem;
  }
`;

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Probleme Reseaux!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles >
      <p data-test="graphql-error">
        <strong>Erreure!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: PropTypes.object
};

export default DisplayError;
