import React from "react";
import NewDivisionHooks from "../../src/components/division/NewDivisionHooks";
import GatedSignin from "../../src/components/user/GatedSignin";

const newDivision = (props) => {
  return (
    <div>
      <GatedSignin>
        <NewDivisionHooks />
      </GatedSignin>
    </div>
  );
};
export default newDivision;
