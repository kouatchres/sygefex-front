import React from "react";
import TownsList from "../../src/components/town/TownsList";
import GatedSignin from "../../src/components/user/GatedSignin";

const divisionList = () => {
  return (
    <GatedSignin>
      <TownsList />
    </GatedSignin>
  );
};
export default divisionList;
