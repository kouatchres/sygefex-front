import React from "react";
import CreateNewRankHook from "../../src/components/rank/CreateNewRankHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRank = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewRankHook />
      </GatedSignin>
    </div>
  );
};
export default newRank;
