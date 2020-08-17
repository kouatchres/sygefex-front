import React from "react";
import UpdateExaminer from "../../src/components/examiner/UpdateExaminer";

const updateExam = ({ query }) => {
  return (
    <div>
      <UpdateExaminer id={query.id} />
    </div>
  );
};
export default updateExam;
