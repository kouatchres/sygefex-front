import React from "react";
import CreateNewExamHook from "../../src/components/exam/CreateNewExamHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewExam = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewExamHook />
      </GatedSignin>
    </div>
  );
};
export default NewExam;
