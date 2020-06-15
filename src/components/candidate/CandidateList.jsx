import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Candidate from './Candidate';
import styled from 'styled-components';
import Pagination from '../Pagination';
import { getAllCandidatesQuery } from '../queries&Mutations&Functions/Queries';

const CenteredStyled = styled.div`
	text-align: center;
	display: block;
	margin: 0 auto;
`;

const CandidateList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
	grid-row-gap: 20px;
	cursor: pointer;
`;
class Candidates extends Component {
	render() {
		return (
			<CenteredStyled>
				<Pagination />
				<Query query={getAllCandidatesQuery}>
					{({ data, loading, error }) => {
						console.log(data.candidates);
						{
							loading && <p>Loading...</p>;
						}
						{
							error && <p> Error: {error.message}</p>;
						}
						return (
							<CandidateList>
								{data.candidates.map((candidate) => (
									<Candidate eachCandidate={candidate} key={candidate.id} data={data} />
								))}
							</CandidateList>
						);
					}}
				</Query>
				<Pagination />
			</CenteredStyled>
		);
	}
}
export default Candidates;
