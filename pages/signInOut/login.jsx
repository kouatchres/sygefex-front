import React from "react";
import styled from "styled-components";
import Login from "../../src/components/signUp/Login";

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
      <Login />
    </DivStyled>
  );
};
export default modifyCenter;
