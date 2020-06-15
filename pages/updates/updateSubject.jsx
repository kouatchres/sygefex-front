import React from "react";
import UpdateSubject from "../../src/components/subject/UpdateSubject";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateSubject = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateSubject id={query.id} />
    </CenteredStyles>
  );
};
export default updateSubject;
