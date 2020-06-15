import React from "react";
import SingleExaminer from "../../src/components/examiner/SingleExaminer";

function singleExaminer({ query }) {
    return (
        <div>
            <SingleExaminer id={query.id} />
        </div>
    );
}
export default singleExaminer;
