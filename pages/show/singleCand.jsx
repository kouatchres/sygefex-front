import React from "react";
import SingleCandidateHooks from "../../src/components/candidate/SingleCandidateHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

function singleCand({ query }) {
  return (
    <div>
      <GatedSignin>
        <SingleCandidateHooks id={query.id} />
      </GatedSignin>
    </div>
  );
}
export default singleCand;
