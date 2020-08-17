import React from "react";
import CreateNewEducationTypeHook from "../../src/components/educationType/CreateNewEducationTypeHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewEducationType = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewEducationTypeHook />
      </GatedSignin>
    </div>
  );
};
export default NewEducationType;
