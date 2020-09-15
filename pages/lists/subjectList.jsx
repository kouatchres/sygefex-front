import React from "react";
import SubjectList from "../../src/components/subject/SubjectList";

const centerResults = ({ query }) => {
  return (
    <div>
      <SubjectList id={query.id} />
    </div>
  );
};
export default centerResults;
