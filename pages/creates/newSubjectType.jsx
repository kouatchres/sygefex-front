import React from "react";
import CreateNewSubjectType from "../../src/components/subjectType/CreateNewSubjectType";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewSubjectType = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewSubjectType />
      </GatedSignin>
    </div>
  );
};
export default NewSubjectType;
