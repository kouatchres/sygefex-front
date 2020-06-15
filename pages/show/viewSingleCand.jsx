import React from "react";
import ViewSingleCand from "../../src/components/candidate/ViewSingleCand";

function viewSingleCand({ query }) {
  return (
    <div>
      <ViewSingleCand id={query.id} />
    </div>
  );
}
export default viewSingleCand;
