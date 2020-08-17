import React from "react";
import CreateAptitude from "../../src/components/aptitude/CreateAptitude";
import GatedSignin from "../../src/components/user/GatedSignin";

const newAptitude = () => {
  return (
    <div>
      <GatedSignin>
        <CreateAptitude />
      </GatedSignin>
    </div>
  );
};
export default newAptitude;
