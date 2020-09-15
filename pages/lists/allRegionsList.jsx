import React from "react";
import RegionsList from "../../src/components/region/RegionsList";

function allCentersPerTown({ query }) {
  return (
    <div>
      <RegionsList id={query.id} />
    </div>
  );
}
export default allCentersPerTown;
