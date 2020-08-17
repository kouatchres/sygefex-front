import React from "react";
import UpdateMarksHook from "../../src/components/score/UpdateMarksHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newMarks = () => {
  return (
    <div>
      <GatedSignin>
        <UpdateMarksHook />
      </GatedSignin>
    </div>
  );
};
export default newMarks;
