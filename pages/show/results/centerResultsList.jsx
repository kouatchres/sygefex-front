import React from "react";
import CompleteResultsList from "../../../src/components/results/center/CompleteResultsList";
import GatedSignin from "../../../src/components/user/GatedSignin";

function centerResults({ query }) {
  return (
    <GatedSignin>
      <CompleteResultsList id={query.id} />
    </GatedSignin>
  );
}
export default centerResults;
