import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import RegionList from '../../src/components/region/RegionList';
import styled from 'styled-components';

const ALL_REGIONS_QUERY = gql`
	query ALL_REGIONS_QUERY {
		regions {
			regName
			regCode
			id
		}
	}
`;

const RegionPageTitle = styled.div`
	width: 50vw;
	margin: 0 auto;
	border-radius: 12px;
	min-height: 90vh;
`;
const RegionHeader = styled.div`
	padding: 10px 0;
	display: flex;
	justify-content: left;
	border-bottom: 2px solid black;
	background: lightgray;
	border-radius: 12px;
`;

const TitleItem = styled.div`
	margin: 0 20px;
	border-right: 1px solid black;
	text-transform: capitalize;
	width: 25%;
	text-align: left;
`;

const AllRegStyles = styled.div`
	line-height: 5px;
	display: grid;
	grid-template-columns: 1fr;
`;

class RegionDisplay extends Component {
	render() {
		return (
			<RegionPageTitle>
				<RegionHeader>
					<TitleItem>
						<span>Region Name</span>
					</TitleItem>
					<TitleItem>
						<span>Region Code</span>
					</TitleItem>
				</RegionHeader>

				<Query query={ALL_REGIONS_QUERY}>
					{({ loading, error, data }) => {
						console.log(data.regions);
						const { regions } = data;
						{
							loading && <p>Loading...</p>;
						}
						{
							error && <p>Error: {error.message}</p>;
						}
						return (
							<AllRegStyles>
								{regions.map((item) => <RegionList eachRegion={item} key={item.id} />)}
							</AllRegStyles>
						);
					}}
				</Query>
			</RegionPageTitle>
		);
	}
}

export default RegionDisplay;
