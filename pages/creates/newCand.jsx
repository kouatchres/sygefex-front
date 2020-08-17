import React from "react";
import CreateNewCandidate from "../../src/components/candidate/CreateNewCandidate";
import GatedSignin from "../../src/components/user/GatedSignin";

const newCand = () => {
  return (
    <GatedSignin>
      <CreateNewCandidate />
    </GatedSignin>
  );
};
export default newCand;
