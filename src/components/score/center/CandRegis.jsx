import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'
import { format } from 'date-fns'

const RegionRow = styled.div`

text-align:left;
	display: grid;
	grid-template-columns:2fr repeat(7, 1fr);
	grid-gap: 0.5rem;
    font-size:1.2rem;
	border-bottom: 1px solid black;
	padding-left: 15px;
`;


const CellBlock = styled.div`
/* min-width: 7vw; */
align-items: left;
justify-items: left;
	align-content: left;
`;

class CandRegis extends Component {

    static propTypes = {
        regisInfo: PropTypes.object.isRequired
    };
    openModal = (id) => {
    }
    render() {
        const { candRegistrationNumber, candidate, id, candExamSecretCode } = { ...this.props.regisInfo };
        return (
            <>
                <RegionRow>
                    <CellBlock>
                        <Link
                            href={{
                                pathname: "/show/results/candResults",
                                query: { id }
                            }}
                        >
                            <a target="_blank">{candRegistrationNumber} </a>
                        </Link>
                        <span></span>
                    </CellBlock>
                    <CellBlock>
                        <span>{candidate.cand1stName}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{candidate.cand2ndName}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{candidate.cand3rdName}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{format(candidate.dateOfBirth, 'MMM d, YYYY')}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{candidate.placeOfBirth}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{candidate.gender.genderName}</span>
                    </CellBlock>

                    <CellBlock>
                        <span>{candExamSecretCode}</span>
                    </CellBlock>
                </RegionRow>

            </>
        );
    }
}
export default CandRegis;
