import React from 'react';
import ExamSubjSeries from '../../src/components/examSubjSeries/ExamSubjSeries';
import styled from 'styled-components';

const StyledRegion = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	width: 80vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;
function newSubjectSeries() {
	return (
		<StyledRegion>
			<ExamSubjSeries />
		</StyledRegion>
	);
}

export default newSubjectSeries;
