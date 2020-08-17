import React from "react";
import CreateNewPhase from "../../src/components/phase/CreateNewPhase";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewRegion = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewPhase />
      </GatedSignin>
    </div>
  );
};
export default NewRegion;
