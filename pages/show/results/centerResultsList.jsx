import React from "react";
import CenterCompleteResultsList from "../../../src/components/results/center/CenterCompleteResultsList";

function centerResults({ query }) {
  return (
    <div>
      <CenterCompleteResultsList id={query.id} />
    </div>
  );
}
export default centerResults;
