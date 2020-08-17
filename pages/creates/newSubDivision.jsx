import React from "react";
import SubDivHooks from "../../src/components/subDivision/SubDivHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubDivision = (props) => {
  return (
    <div>
      <GatedSignin>
        <SubDivHooks />
      </GatedSignin>
    </div>
  );
};
export default newSubDivision;
