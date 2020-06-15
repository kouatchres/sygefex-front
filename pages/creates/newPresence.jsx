import React from 'react';
import CreatePresence from '../../src/components/presence/CreatePresence';
import styled from 'styled-components';

const StyledRegion = styled.div`
	display: block;
	text-align: center;
	margin: 0 auto;
	min-width: 350px;
	background: #359;
	width: 40vw;
	h4 {
		margin: 0 auto;
		text-align: center;
		font-size: 3rem;
		font-weight: normal;
	}
`;

const NewPresence = () => {
	return (
		<StyledRegion>
			<CreatePresence />
		</StyledRegion>
	);
};
export default NewPresence;
