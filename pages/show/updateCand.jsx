import UpdateCandidate from "../../src/components/candidate/UpdateCandidate";

function UpdatePage({ query }) {
  return (
    <div>
      <UpdateCandidate id={query.id} />
    </div>
  );
}

export default UpdatePage;
