import React from "react";
import SelectSubjectToModify from "../../src/components/subject/SelectSubjectToModify";
import GatedSignin from "../../src/components/user/GatedSignin";
const modifySession = (props) => {
  return (
    <GatedSignin>
      <SelectSubjectToModify />
    </GatedSignin>
  );
};
export default modifySession;
