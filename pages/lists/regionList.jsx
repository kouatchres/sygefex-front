import React from "react";
import RegionsList from "../../src/components/region/RegionsList";
import GatedSignin from "../../src/components/user/GatedSignin";

const getAllRegions = () => {
  return (
    <GatedSignin>
      <RegionsList />
    </GatedSignin>
  );
};
export default getAllRegions;
