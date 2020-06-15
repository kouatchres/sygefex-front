import React from "react";
import CodeEntry from "../../src/components/centerAdmin/CodeEntry";
import styled from "styled-components";

import { getAllCenterAdminsQuery } from "../../src/components/queries&Mutations&Functions/Queries";
import { objectFromCode } from "../../src/components/queries&Mutations&Functions/Functions";
// import { getAllCenterAdminsQuery } from "../../src/components/queries&Mutations&Functions/Mutations";
const CenteredStyles = styled.div`
  margin: 0 auto;
  width: 40vw;
  h5 {
    text-align: center;
  }
`;
const updateCenterAdmin = ({ query }) => {
  return (
    <CenteredStyles>
      <CodeEntry id={query.id} />
    </CenteredStyles>
  );
};
export default updateCenterAdmin;
