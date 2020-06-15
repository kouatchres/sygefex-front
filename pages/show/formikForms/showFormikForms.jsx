import React from "react";
import BestFormikForm from "../../../src/components/formikForms/BestFormikForm"

function showFormikForms({ query }) {
  return (
    <div>
      <BestFormikForm id={query.id} />
    </div>
  );
}
export default showFormikForms;
