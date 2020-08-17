import React from "react";
import CreatePresence from "../../src/components/presence/CreatePresence";
import GatedSignin from "../../src/components/user/GatedSignin";

const NewPresence = () => {
  return (
    <div>
      <GatedSignin>
        <CreatePresence />
      </GatedSignin>
    </div>
  );
};
export default NewPresence;
