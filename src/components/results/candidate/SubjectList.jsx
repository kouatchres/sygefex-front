import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const RegionRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0.2rem;
	background-color: ${(props) => props.theme.pureWhite};
	align-items: left;
	justify-items: left;
	border-bottom: 1px solid black;
	padding-left: 15px;
	font-size:1.3rem;
	font-weight: bold;

`;

const CellBlock = styled.div`
	align-content: left;
	text-align: left;
`;

class SubjectList extends Component {
    // static propTypes = {
    // 	data: PropTypes.object.isRequired
    // };

    render() {
        const { subjectSeries } = { ...this.props.score };
        return (
            <RegionRow>
                <CellBlock>
                    <span>{subjectSeries.subjectName}</span>
                </CellBlock>

            </RegionRow>
        );
    }
}
export default SubjectList;
