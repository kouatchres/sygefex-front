import NewUpdateCandidate from '../../src/components/candidate/NewUpdateCandidate';


function updateCandidate({ query }) {
	return (
		<div>
			<NewUpdateCandidate id={query.id} />
		</div>
	);
}

export default updateCandidate;
