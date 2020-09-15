import React from "react";
import CenterCompleteResultsList from "../../../src/components/results/center/CenterCompleteResultsList";

const centerResults = ({ query }) => {
  return (
    <div>
      <CenterCompleteResultsList id={query.id} />
    </div>
  );
};
export default centerResults;
