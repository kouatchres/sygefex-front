import React from "react";
import CandidateResultByRegistrationNo from "../../../../src/components/results/candidate/CandidateResultByRegistrationNo";

function getCandidateResultsFromRegNo({ query }) {
    return (
        <div>
            <CandidateResultByRegistrationNo id={query.id} />
        </div>
    );
}
export default getCandidateResultsFromRegNo;
