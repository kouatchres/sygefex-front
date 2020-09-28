import React from "react";
import CenterRegistrationList from "../../src/components/results/center/CenterRegistrationList";

const centerResults = ({ query }) => {
  return (
    <div>
      <CenterRegistrationList id={query.id} />
    </div>
  );
};
export default centerResults;
