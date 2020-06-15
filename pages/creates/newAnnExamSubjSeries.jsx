import React from 'react';
import CreateAnnExamSubjSeries from '../../src/components/annExamSubjSeries/CreateAnnExamSubjSeries';
import styled from 'styled-components';

const StyledCandidate = styled.div`
	margin: 0 auto;
	min-width: 220px;
	width: 50vw;
	h4 {
		margin: 10px auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;

const newCand = () => {
	return (
		<StyledCandidate>
			<CreateAnnExamSubjSeries />
		</StyledCandidate>
	);
};
export default newCand;
