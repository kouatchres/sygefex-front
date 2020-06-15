import React from "react";
import UpdateCenter from "../../src/components/center/UpdateCenter";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 80vw;
  h5 {
    text-align: center;
  }
`;
const updateCenter = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateCenter id={query.id} />
    </CenteredStyles>
  );
};
export default updateCenter;
