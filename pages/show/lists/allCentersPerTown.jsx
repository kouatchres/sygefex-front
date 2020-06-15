import React from "react";
import CenterList from "../../../src/components/lists/centers/CenterList";

function allCentersPerTown({ query }) {
    return (
        <div>
            <CenterList id={query.id} />
        </div>
    );
}
export default allCentersPerTown;
