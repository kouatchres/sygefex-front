import React from "react";
import UpdateSubDivision from "../../src/components/subDivision/UpdateSubDivision";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateSubDivision = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateSubDivision id={query.id} />
    </CenteredStyles>
  );
};
export default updateSubDivision;
