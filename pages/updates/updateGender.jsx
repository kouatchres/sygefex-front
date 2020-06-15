import React from "react";
import UpdateGender from "../../src/components/gender/UpdateGender";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateGender = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateGender id={query.id} />
    </CenteredStyles>
  );
};
export default updateGender;
