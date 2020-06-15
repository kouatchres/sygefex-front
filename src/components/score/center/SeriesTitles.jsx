import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CandRegis from './CandRegis'

const Specialties = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
    font-size:1.5rem;
	background-color: ${(props) => props.theme.lightGrey};
	align-items: left;
	justify-items: left;
	border-bottom: 1px solid black;
    padding-left: 20px;
`;

const CellBlock = styled.div`
	align-content: left;
	text-align: left;
`;


const TitleItem = styled.div`
  margin: 0 ;
  text-align: left;
  align-items: left;
justify-items: left;
	align-content: left;
	

`;

const CandidateInfoHeadings = styled.div`
	display: grid;
	grid-template-columns:2fr repeat(7, 1fr);
	grid-gap: 0.5rem;
    font-size:1.4rem;
    color: ${(props) => props.theme.pureWhite};
    background-color: ${(props) => props.theme.goldenBrown};
	border-bottom: 1px solid black;
    padding-left: 15px;
`;

class SeriesTitles extends Component {
    static propTypes = {
        CESS: PropTypes.object.isRequired
    };

    render() {
        const { registration, series } = { ...this.props.CESS };
        return (
            <>

                <Specialties>
                    <CellBlock>
                        <span>{series.seriesName}</span>
                    </CellBlock>
                    <CellBlock>
                        <span>{series.seriesCode}</span>
                    </CellBlock>
                </Specialties>
                <CandidateInfoHeadings>

                    <TitleItem>
                        <strong> <span>No Candidat:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Nom :</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Prenom:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Autres:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Date:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong> <span>Lieu:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong>  <span>Sexe:</span></strong>
                    </TitleItem>
                    <TitleItem>
                        <strong>  <span>Tel:</span></strong>
                    </TitleItem>

                </CandidateInfoHeadings>
                {
                    registration && registration.map((item) => (
                        <CandRegis key={item.id} regisInfo={item} />
                    ))
                }
            </>
        );
    }
}
export default SeriesTitles;
