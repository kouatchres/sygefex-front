import React from "react";
import UpdateSubjectType from "../../src/components/subjectType/UpdateSubjectType";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateSubjectType = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateSubjectType id={query.id} />
    </CenteredStyles>
  );
};
export default updateSubjectType;
