import React from "react";
import UpdateDivision from "../../src/components/division/UpdateDivision";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateDivision = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateDivision id={query.id} />
    </CenteredStyles>
  );
};
export default updateDivision;
