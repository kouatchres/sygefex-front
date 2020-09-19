import React from "react";
import SpecialtyTakesSubjects from "../../src/components/subjectSpecialty/SpecialtyTakesSubjects";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewSubjectSpecialty = () => {
  return (
    <div>
      <GatedSignin>
        <SpecialtyTakesSubjects />
      </GatedSignin>
    </div>
  );
};
export default NewSubjectSpecialty;
