import React from "react";
import RegistrationReceipt from "../../../src/components/registration/RegistrationReceipt"

function candResults({ query }) {
    return (
        <div>
            <RegistrationReceipt id={query.id} />
        </div>
    );
}
export default candResults;
