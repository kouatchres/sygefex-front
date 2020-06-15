import React from "react";
import UpdateExam from "../../src/components/exam/UpdateExam";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateExam = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateExam id={query.id} />
    </CenteredStyles>
  );
};
export default updateExam;
