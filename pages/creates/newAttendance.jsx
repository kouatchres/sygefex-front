import React from "react";
import CreateAttendance from "../../src/components/attendance/CreateAttendance";
import GatedSignin from "../../src/components/user/GatedSignin";

const newAttendance = () => {
  return (
    <GatedSignin>
      <CreateAttendance />
    </GatedSignin>
  );
};
export default newAttendance;
