import React from "react";
import CreateSubjectGroup from "../../src/components/subjectGroup/CreateSubjectGroup";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubject = () => {
  return (
    <div>
      <GatedSignin>
        <CreateSubjectGroup />
      </GatedSignin>
    </div>
  );
};
export default newSubject;
