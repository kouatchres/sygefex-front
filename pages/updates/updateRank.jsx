import React from "react";
import UpdateRank from "../../src/components/rank/UpdateRank";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateRank = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateRank id={query.id} />
    </CenteredStyles>
  );
};
export default updateRank;
