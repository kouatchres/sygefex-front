import React from "react";
import GatedSignIn from "../../../src/components/user/GatedSignin";
import DivisionList from "../../../src/components/division/DivisionList";

const centerResults = () => {
  return (
    <GatedSignIn>
      <DivisionList />
    </GatedSignIn>
  );
};
export default centerResults;
