import React from "react";
import styled from "styled-components";
import SelectSubjectToModify from "../../src/components/subject/SelectSubjectToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifySession = props => {
  return (
    <DivStyled>
      <SelectSubjectToModify />
    </DivStyled>
  );
};
export default modifySession;
