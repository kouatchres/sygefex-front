import UpdateCandidate from "../../src/components/candidate/UpdateCandidate";
import styled from "styled-components";


function UpdatePage({ query }) {
  return (
    <div>
      <UpdateCandidate id={query.id} />
    </div>
  );
}

export default UpdatePage;
