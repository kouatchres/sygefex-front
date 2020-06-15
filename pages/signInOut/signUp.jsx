import React from "react";
import styled from "styled-components";
import SingUp from "../../src/components/signUp/SignUp";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
  width: 50vw;
`;
const modifyCenter = props => {
  return (
    <DivStyled>
      <SingUp />
    </DivStyled>
  );
};
export default modifyCenter;
