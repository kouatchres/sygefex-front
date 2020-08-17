import React from "react";
import NewCenterHooks from "../../src/components/center/NewCenterHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

const newCenter = (props) => {
  return (
    <div>
      <GatedSignin>
        <NewCenterHooks />
      </GatedSignin>
    </div>
  );
};
export default newCenter;
