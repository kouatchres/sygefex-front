import React from "react";
import SingleCandidate from "../../src/components/candidate/SingleCandidate";

function singleCand({ query }) {
  return (
    <div>
      <SingleCandidate id={query.id} />
    </div>
  );
}
export default singleCand;
