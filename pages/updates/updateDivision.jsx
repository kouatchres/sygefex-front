import React from "react";
import UpdateDivision from "../../src/components/division/UpdateDivision";
import GatedSignin from "../../src/components/user/GatedSignin";

const updateDivision = ({ query }) => {
  return (
    <GatedSignin>
      <UpdateDivision id={query.id} />
    </GatedSignin>
  );
};
export default updateDivision;
