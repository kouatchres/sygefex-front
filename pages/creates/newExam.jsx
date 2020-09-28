import React from "react";
import CreateExam from "../../src/components/exam/CreateExam";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewExam = () => {
  return (
    <div>
      <GatedSignin>
        <CreateExam />
      </GatedSignin>
    </div>
  );
};
export default NewExam;
