import React from "react";
import EnterMarks from "../../src/components/score/EnterMarks";
import GatedSignin from "../../src/components/user/GatedSignin";

const newMarks = () => {
  return (
    <div>
      <GatedSignin>
        <EnterMarks />
      </GatedSignin>
    </div>
  );
};
export default newMarks;
