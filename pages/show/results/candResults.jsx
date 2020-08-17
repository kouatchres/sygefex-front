import React from "react";
import CandDetailedResultsHook from "../../../src/components/results/candidate/CandDetailedResultsHook";

function candResults({ query }) {
  return (
    <div>
      <CandDetailedResultsHook id={query.id} />
    </div>
  );
}
export default candResults;
