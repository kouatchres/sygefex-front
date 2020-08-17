import React from "react";
import CreateNewExaminer from "../../src/components/examiner/CreateNewExaminer";
import GatedSignin from "../../src/components/user/GatedSignin";

const newExaminer = (props) => {
  return (
    <div>
      <GatedSignin>
        <CreateNewExaminer />
      </GatedSignin>
    </div>
  );
};
export default newExaminer;
