import React from "react";
import EnterMarksHook from "../../src/components/score/EnterMarksHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newMarks = () => {
  return (
    <div>
      <GatedSignin>
        <EnterMarksHook />
      </GatedSignin>
    </div>
  );
};
export default newMarks;
