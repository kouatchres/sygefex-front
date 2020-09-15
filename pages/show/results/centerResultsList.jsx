import React from "react";
import CenterCompleteResultsList from "../../../src/components/results/center/CenterCompleteResultsList";
import GatedSignin from "../../../src/components/user/GatedSignin";

function centerResults({ query }) {
  return (
    <GatedSignin>
      <CenterCompleteResultsList id={query.id} />
    </GatedSignin>
  );
}
export default centerResults;
