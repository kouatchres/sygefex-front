import React from "react";
import UpdateSeries from "../../src/components/series/UpdateSeries";
import styled from "styled-components";

const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateSeries = ({ query }) => {
  return (
    <CenteredStyles>
      <UpdateSeries id={query.id} />
    </CenteredStyles>
  );
};
export default updateSeries;
