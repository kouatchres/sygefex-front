import React from 'react'
import NewUpdateCandidate from '../../src/components/candidate/NewUpdateCandidate';

import GatedSignin from "../../src/components/user/GatedSignin";

const updateCandidate=({ query }) =>{
	return (
		<GatedSignin>
			<NewUpdateCandidate id={query.id} />
      </GatedSignin>
	);
}

export default updateCandidate;
