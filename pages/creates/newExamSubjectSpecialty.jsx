import React from "react";
import ExamSubjSpecialty from "../../src/components/examSubjSpecialty/ExamSubjSpecialty";
import GatedSignin from "../../src/components/user/GatedSignin";

const newSubjectSeries = () => {
  return (
    <div>
      <GatedSignin>
        <ExamSubjSpecialty />
      </GatedSignin>
    </div>
  );
};

export default newSubjectSeries;
