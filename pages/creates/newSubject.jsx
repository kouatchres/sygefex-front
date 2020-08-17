import React from "react";
import CreateNewSubjectHook from "../../src/components/subject/CreateNewSubjectHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubject = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewSubjectHook />
      </GatedSignin>
    </div>
  );
};
export default newSubject;
