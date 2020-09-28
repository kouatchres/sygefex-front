import React from "react";
import CreateExaminer from "../../src/components/examiner/CreateExaminer";
import GatedSignin from "../../src/components/user/GatedSignin";

const newExaminer = (props) => {
  return (
    <div>
      <GatedSignin>
        <CreateExaminer />
      </GatedSignin>
    </div>
  );
};
export default newExaminer;
