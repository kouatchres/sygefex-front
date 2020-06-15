import React from "react";
import CandidateResultByRegisID from "../../../src/components/score/candidate/CandidateResultByRegisID";

function allCandResults({ query }) {
    return (
        <div>
            <CandidateResultByRegisID id={query.id} />
        </div>
    );
}
export default allCandResults;
