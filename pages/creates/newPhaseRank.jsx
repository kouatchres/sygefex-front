import React from "react";
import NewRegPhaseRank from "../../src/components/phaseRank/NewRegPhaseRank";
import GatedSignin from "../../src/components/user/GatedSignin";

const newPhaseRank = () => {
  return (
    <div>
      <GatedSignin>
        <NewRegPhaseRank />
      </GatedSignin>
    </div>
  );
};
export default newPhaseRank;
