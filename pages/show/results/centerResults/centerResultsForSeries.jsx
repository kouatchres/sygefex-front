import React from "react";
import CenterAllDetailedResultsPerSeries from "../../../../src/components/results/center/CenterAllDetailedResultsPerSeries";

function centerResultsForSeries({ query }) {
    return (
        <div>
            <CenterAllDetailedResultsPerSeries id={query.id} />
        </div>
    );
}
export default centerResultsForSeries;
