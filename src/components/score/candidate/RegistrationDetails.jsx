import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const RegionRow = styled.div`
	display: grid;
	grid-template-columns:4fr 1fr 1fr 1fr;
	grid-gap: 15px;
	background-color: ${(props) => props.theme.lightGrey};
	align-items: left;
	justify-items: left;
	border-bottom: 0.05rem solid black;
	padding-left: 0.3rem;
`;

const CellBlock = styled.div`
	align-content: left;
	text-align: left;
    font-size:1.5rem;
`;

export class RegistrationDetails extends Component {

    render() {
        const { centerExamSessionSeries, id } = { ...this.props.registrationInfo };
        const { centerExamSession } = { ...centerExamSessionSeries }
        const { examSession, center } = { ...centerExamSession }
        const { exam, session } = { ...examSession }
        return (
            <RegionRow>
                <CellBlock>
                    <span>{center.centerName}</span>
                </CellBlock>
                <CellBlock>
                    <span>{session.sessionName}</span>
                </CellBlock>
                <CellBlock>
                    <span>{exam.examName}</span>
                </CellBlock>
                <CellBlock>
                    <Link
                        href={{
                            pathname: "/show/results/candResults",
                            query: { id }
                        }}
                    >

                        <a target="_blank">Resultats </a>
                    </Link>
                </CellBlock>
            </RegionRow>
        );
    }
}

export default RegistrationDetails
