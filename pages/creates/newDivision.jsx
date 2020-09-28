import React from "react";
import NewDivision from "../../src/components/division/NewDivision";
import GatedSignin from "../../src/components/user/GatedSignin";

const newDivision = (props) => {
  return (
    <div>
      <GatedSignin>
        <NewDivision />
      </GatedSignin>
    </div>
  );
};
export default newDivision;
