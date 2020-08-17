

import styled from "styled-components";
import React from "react";
import { onError } from "apollo-link-error";

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


    const link = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path, i }) =>
                (<ErrorStyles key={i}>
                    <p data-test="graphQLErrors">
                        <strong>Erreure Graphql !</strong>
                        {`message: ${message}, location: ${locations}, Path: ${path}`}
                    </p>
                </ErrorStyles>)
            );

        if (networkError) {
            <ErrorStyles key={i}>
                <p data-test="networkError">
                    <strong>Probleme Reseaux!</strong>
                    {`[Network error]: ${networkError}`}
                </p>
            </ErrorStyles>
        }
    });

}

export default DisplayError;
