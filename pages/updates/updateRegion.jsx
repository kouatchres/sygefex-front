import React from "react";
import UpdateRegion from "../../src/components/region/UpdateRegion";
import styled from "styled-components";

const updateRegion = ({ query }) => {
  return (
    <div>
      <UpdateRegion id={query.id} />
    </div>
  );
};
export default updateRegion;
