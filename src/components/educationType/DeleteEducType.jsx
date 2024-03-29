import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { getAllEducationTypesQuery } from '../queries&Mutations&Functions/Queries';
// import { ALL_REGIONS_QUERY } from "../Regions";

const deleteEducTypeMutation = gql`
	mutation deleteEducTypeMutation($id: ID!) {
		deleteEducType(id: $id) {
			id
		}
	}
`;

const DelBtn = styled.button`
  font-weight: bold;
  border-radius:8px;
  font-size:1.5rem;
  height:30px;
  border:none;
  padding-top:5px;
  padding-bottom:5px;
  align-items:center;
  background-color: white;
  color: black;
  width:10vw;
  border: 2px solid #4CAF50; /* Green */
  :hover{
    cursor:pointer;
    background-color: #4CAF50;
  color: white;
}
  }
`;

class DeleteDivision extends Component {
	updateCache = (cache, payload) => {
		// manually update the cache so that the data are all the same
		// 1. read the cache for the data we want
		const data = cache.readQuery({ query: getAllEducationTypesQuery });
		// the deletedselect all the other regions except the deleted one from the cache
		data.divisions = data.divisions.filter((item) => item.id !== payload.data.deleteDivision.id);
		//  3. write the new data back to the cache
		console.log('getting payload');
		console.log(payload);
		cache.writeQuery({ query: getAllEducationTypesQuery, data });
	};

	render() {
		return (
			<div>
				<Mutation mutation={deleteEducTypeMutation} variables={{ id: this.props.id }} update={this.updateCache}>
					{(deleteDivision, { error }) => (
						<DelBtn
							onClick={() => {
								if (confirm('Do you want to delete this candidate ?')) {
									deleteEducationType();
								}
							}}
						>
							{this.props.children}
						</DelBtn>
					)}
				</Mutation>
			</div>
		);
	}
}

export default DeleteDivision;
