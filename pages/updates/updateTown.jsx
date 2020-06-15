import React from "react";
import UpdateTown from "../../src/components/town/UpdateTown";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 70vw;
  h5 {
    text-align: center;
  }
`;
const updateTown = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateTown id={query.id} />
    </CenteredStyles>
  );
};
export default updateTown;
