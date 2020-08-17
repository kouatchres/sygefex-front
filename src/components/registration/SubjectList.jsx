import React, { Component } from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

const RegionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.2rem;
  background-color: ${(props) => props.theme.pureWhite};
  align-items: left;
  justify-items: left;
  border-bottom: 1px solid black;
  padding-left: 15px;
  font-size: 1.3rem;
  font-weight: bold;
`;

const CellBlock = styled.div`
  align-content: left;
  text-align: left;
`;

const SubjectList = ({ subjSpec }) => {
  const { coeff, subject } = { ...subjSpec };
  const { subjectName } = { ...subject };
  return (
    <RegionRow>
      <CellBlock>
        <span>{subjectName}</span>
      </CellBlock>
    </RegionRow>
  );
};
export default SubjectList;
