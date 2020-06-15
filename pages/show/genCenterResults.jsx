import React from "react";
import GenCenterResultsHook from "../../src/components/score/center/GenCenterResultsHook"

function genCenterResults({ query }) {
    return (
        <div>
            <GenCenterResultsHook id={query.id} />
        </div>
    );
}
export default genCenterResults;
