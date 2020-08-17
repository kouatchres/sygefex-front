import React from "react";
import CreateNewSessionHook from "../../src/components/session/CreateNewSessionHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewSession = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewSessionHook />
      </GatedSignin>
    </div>
  );
};
export default NewSession;
