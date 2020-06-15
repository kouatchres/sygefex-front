import React from "react";
import CenterResultsPerSeries from "../../../../src/components/results/center/CenterResultsPerSeries";

function centerResultsPerSeries({ query }) {
    return (
        <div>
            <CenterResultsPerSeries id={query.id} />
        </div>
    );
}
export default centerResultsPerSeries;
