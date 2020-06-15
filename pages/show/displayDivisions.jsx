import React, {Component} from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import styled from 'styled-components';

const ALL_DIVISIONS_QUERY = gql `
 query ALL_DIVISIONS_QUERY{
   divisions{
   divName  
   divCode  
   id
  }}
`;

const DivisionPageTitle = styled.div `
  width: 50vw;
  margin: 0 auto;
  border-radius:12px;
  min-height: 90vh;
`;
const DivisionHeader = styled.div `
    padding: 10px 0;
    display: flex;
    justify-content: left;
    border-bottom: 2px solid black;
    background: lightgray;
    border-radius:12px;
    `;

const TitleItem = styled.div `
    margin:0 20px;
    border-right: 1px solid black;
      text-transform: capitalize;
      width: 25%;
      text-align:left;
      `;

const AllRegStyles = styled.div `
    line-height:5px;
    display: grid;
    grid-template-columns: 1fr ;
    
 `;

class DisplayDivision extends Component {
    render() {
        return (
            <DivisionPageTitle>
                <DivisionHeader>
                    <TitleItem >
                        <span>Division Name</span>
                    </TitleItem>
                    <TitleItem >
                        <span>Division Code</span>
                    </TitleItem>
                </DivisionHeader>

                <Query query={ALL_DIVISIONS_QUERY}>
                    {({loading, error, data}) => {
                        console.log(data.Divisions)
  {loading && <p>Loading...</p>}
  {error && <p>Error: {error.message}</p>}
                        return (
                            <AllRegStyles>
{data.Divisions.map(item => <DivisionList eachDivision={item} key={item.id}/>)}
                            </AllRegStyles>
                        );
                    }}
                </Query>

            </DivisionPageTitle>

        );
    }
}

export default DisplayDivision;
