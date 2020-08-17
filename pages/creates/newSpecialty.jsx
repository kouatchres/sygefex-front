import React from "react";
import CreateNewSpecialtyHook from "../../src/components/specialty/CreateNewSpecialtyHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSeries = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewSpecialtyHook />
      </GatedSignin>
    </div>
  );
};
export default newSeries;
