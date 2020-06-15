import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link'

const RegionRow = styled.div`
	display: grid;
	grid-template-columns: 3.5fr 1.5fr 0.5fr 1.5fr 0.5fr;
	grid-gap: 1rem;
    font-size:1.3rem;
	border-bottom: 1px solid black;
    justify-content:left;
	padding-left: 0.6rem;
`;


const CellBlock = styled.div`

  text-align: left;
align-items: left;
justify-items: left;
	align-content: left;
`;

class Centers extends Component {



    static propTypes = {
        center: PropTypes.object.isRequired
    };

    render() {
        const {
            centerName,
            centerCode,
            centerNumber,
            centerSecretCode, id } = { ...this.props.center };
        return (
            <>
                <RegionRow>
                    <CellBlock>
                        <span>{centerName}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{centerCode}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{centerNumber}</span>
                    </CellBlock>

                    <CellBlock>
                        <span>{centerSecretCode}</span>
                    </CellBlock>

                    <CellBlock>
                        <Link
                            href={{
                                pathname: "/show/results/centerResults",
                                query: { id }
                            }}
                        >
                            <a>Details</a>
                        </Link>
                    </CellBlock>
                </RegionRow>

            </>
        );
    }
}
export default Centers;
