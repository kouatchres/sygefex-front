import React from "react";
import SubjectSpecialtyList from "../../src/components/subjectSpecialty/SubjectSpecialtyList";

const centerResults = ({ query }) => {
  return (
    <div>
      <SubjectSpecialtyList id={query.id} />
    </div>
  );
};
export default centerResults;
