import React from "react";
import CenterRegistrationList from "../../src/components/score/center/CenterRegistrationList";

function registrationList({ query }) {
  return (
    <div>
      <CenterRegistrationList id={query.id} />
    </div>
  );
}
export default registrationList;
