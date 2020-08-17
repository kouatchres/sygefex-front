import React from "react";
import NewRegistrationHook from "../../src/components/registration/NewRegistrationHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newRegister = () => {
  return (
    <div>
      <GatedSignin>
        <NewRegistrationHook />
      </GatedSignin>
    </div>
  );
};
export default newRegister;
