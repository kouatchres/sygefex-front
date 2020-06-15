import React from "react";
import styled from "styled-components";
import NewCenterToModify from "../../src/components/center/NewCenterToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyCenter = props => {
  return (
    <DivStyled>
      <NewCenterToModify />
    </DivStyled>
  );
};
export default modifyCenter;
