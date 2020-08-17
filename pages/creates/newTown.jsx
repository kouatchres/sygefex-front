import React from "react";
import CreateTownHook from "../../src/components/town/CreateTownHook";
import GatedSignin from "../../src/components/user/GatedSignin";
const newTown = (props) => {
  return (
    <div>
      <GatedSignin>
        <CreateTownHook />
      </GatedSignin>
    </div>
  );
};
export default newTown;
