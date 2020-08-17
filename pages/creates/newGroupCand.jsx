import React from "react";
import CreateMultipleCandidates from "../../src/components/candidate/CreateMultipleCandidates";
import GatedSignin from "../../src/components/user/GatedSignin";

const newCand = () => {
  return (
    <GatedSignin>
      <CreateMultipleCandidates />
    </GatedSignin>
  );
};
export default newCand;
