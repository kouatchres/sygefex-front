import React from "react";
import CreateNewReportHook from "../../src/components/report/CreateNewReportHook";
import GatedSignin from "../../src/components/user/GatedSignin";

const newReport = () => {
  return (
    <div>
      <GatedSignin>
        <CreateNewReportHook />
      </GatedSignin>
    </div>
  );
};
export default newReport;
