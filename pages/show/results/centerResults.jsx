import React from "react";
import CompleteResultsList from "../../../src/components/results/center/CompleteResultsList";

const centerResults = ({ query }) => {
  return (
    <div>
      <CompleteResultsList id={query.id} />
    </div>
  );
};
export default centerResults;
