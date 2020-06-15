import React from "react";
import styled from "styled-components";
import NewCandidateToModify from "../../src/components/candidate/NewCandidateToModify";

const DivStyled = styled.div`
  display: block;
  margin: 0 auto;
  justify-items: center;
  align-content: center;
`;
const modifyCandidate = props => {
    return (
        <DivStyled>
            <NewCandidateToModify />
        </DivStyled>
    );
};
export default modifyCandidate;
