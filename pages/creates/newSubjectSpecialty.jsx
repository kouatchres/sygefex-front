import React from "react";
import NewRegSubjectToSpecialty from "../../src/components/subjectSpecialty/NewRegSubjectToSpecialty";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewSubjectSpecialty = () => {
  return (
    <div>
      <GatedSignin>
        <NewRegSubjectToSpecialty />
      </GatedSignin>
    </div>
  );
};
export default NewSubjectSpecialty;
