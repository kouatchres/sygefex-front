import React from "react";
import Permissions from "../src/components/user/Permissions";
import GatedSignin from "../src/components/user/GatedSignin";

const permissions = () => {
  return (
    <GatedSignin>
      <Permissions />
    </GatedSignin>
  );
};
export default permissions;
