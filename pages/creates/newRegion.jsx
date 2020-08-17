import React from "react";
import NewRegionHooks from "../../src/components/region/NewRegionHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRegion = () => {
  return (
    <GatedSignin>
      <NewRegionHooks />
    </GatedSignin>
  );
};
export default newRegion;
