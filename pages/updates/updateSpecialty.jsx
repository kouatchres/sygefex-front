import React from "react";
import UpdateSpecialty from "../../src/components/specialty/UpdateSpecialty";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateSpecialty = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateSpecialty id={query.id} />
    </CenteredStyles>
  );
};
export default updateSpecialty;
