import React from "react";
import CenterCompleteResults from "../../../../src/components/results/center/CenterCompleteResults";

function getCompleteCenterResults({ query }) {
    return (
        <div>
            <CenterCompleteResults id={query.id} />
        </div>
    );
}
export default getCompleteCenterResults;
