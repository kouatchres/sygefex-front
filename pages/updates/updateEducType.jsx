import React from "react";
import UpdateEducationType from "../../src/components/educationType/UpdateEducationType";
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
      <UpdateEducationType id={query.id} />
    </CenteredStyles>
  );
};
export default updateExam;
