import React from "react";
import DivisionsList from "../../src/components/division/DivisionsList";
import GatedSignin from "../../src/components/user/GatedSignin";

const divisionList = () => {
  return (
    <GatedSignin>
      <DivisionsList />
    </GatedSignin>
  );
};
export default divisionList;
