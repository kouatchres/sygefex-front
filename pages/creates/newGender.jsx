import React from "react";
import CreateNewGender from "../../src/components/gender/CreateNewGender";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewRegion = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewGender />
      </GatedSignin>
    </div>
  );
};
export default NewRegion;
