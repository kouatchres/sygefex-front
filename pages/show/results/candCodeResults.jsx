import React from "react";
import CandidateResultByCandCode from "../../../src/components/score/candidate/CandidateResultByCandCode";

function candCodeResults({ query }) {
    return (
        <div>
            <CandidateResultByCandCode id={query.id} />
        </div>
    );
}
export default candCodeResults;
