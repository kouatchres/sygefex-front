import React from "react";
import UpdateSession from "../../src/components/session/UpdateSession";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateSession = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateSession id={query.id} />
    </CenteredStyles>
  );
};
export default updateSession;
