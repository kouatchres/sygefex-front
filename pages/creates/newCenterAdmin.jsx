import React from "react";
import CreateCenterAdmin from "../../src/components/centerAdmin/CreateCenterAdmin";
import styled from "styled-components";

// const StyledRegion = styled.div`
//   display: block;
//   text-align: center;
//   margin: 0 auto;
//   width: 80vw;
//   h4 {
//     margin: 0 auto;
//     text-align: center;
//     font-size: 3rem;
//     font-weight: normal;
//   }
// `;

const ceterAdmin = () => {
  return (
    <StyledRegion>
      <CreateCenterAdmin />
    </StyledRegion>
  );
};
export default ceterAdmin;
