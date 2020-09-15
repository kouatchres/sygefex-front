import React from "react";
import CentersPerTownList from "../../../../src/components/center/CentersPerTownList";

const centerResults = ({ query }) => {
  return (
    <div>
      <CentersPerTownList id={query.id} />
    </div>
  );
};
export default centerResults;
