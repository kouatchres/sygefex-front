import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import { roundFloatNumber } from "../../queries&Mutations&Functions/Functions";

const SubjectRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
  background-color: ${(props) => props.theme.lightGrey};
  align-items: left;
  justify-items: left;
  border-bottom: 0.1rem solid black;
  padding-left: 1.1rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const CellBlock = styled.div`
  align-content: left;
  text-align: left;
`;

const ResultDetails = ({ score }) => {
  // static propTypes = {
  // 	data: PropTypes.object.isRequired
  // };

  const { subjectAve, coeff, subjectSpecialty } = { ...score };
  const { subject, specialty } = { ...subjectSpecialty };

  return (
    <SubjectRow>
      <CellBlock>
        <span>{subject.subjectName}</span>
      </CellBlock>
      <CellBlock>
        <span>{coeff}</span>
      </CellBlock>
      <CellBlock>
        <span>{subjectAve}</span>
      </CellBlock>
      <CellBlock>
        <span>{roundFloatNumber(coeff * subjectAve, 4)}</span>
      </CellBlock>
    </SubjectRow>
  );
};
export default ResultDetails;
