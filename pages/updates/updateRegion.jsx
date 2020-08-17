import React from "react";
import NewUpdateRegionHook from "../../src/components/region/NewUpdateRegionHook";

const updateRegion = ({ query }) => {
  return (
    <div>
      <NewUpdateRegionHook id={query.id} />
    </div>
  );
};
export default updateRegion;
  