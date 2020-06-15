import CandidateCodeEntry from '../../src/components/candidate/CandidateCodeEntry';
import styled from 'styled-components';

const CenterPage = styled.div`
	margin: 0 auto;
	width: 50vw;
	h5 {
		text-align: center;
		font-size: 2.5rem;
	}
`;

function updateCandViaCode({ query }) {
	return (
		<CenterPage>
			<CandidateCodeEntry />
		</CenterPage>
	);
}

export default updateCandViaCode;
