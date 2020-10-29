import React from "react";
import styled from "styled-components";
import AscIcon from "../Icons/sort/ascending";
import DesIcon from "../Icons/sort/descending";

const TitleStyled = styled.th`
  display: grid;
  /* grid-template-columns: 3fr 1fr;
  grid-gap: 1rem; */
  justify-items: center;
`;

const Tr = ({ label, sort, sortedBy, sortField }) => {
  const changeSortDirection = (direction) => {
    sort.changer((prev) => ({
      ...prev,
      sortedBy: {
        [sort.key]: direction,
      },
    }));
  };

  const ColumnHeader = styled.div`
    text-align: right;
  `;
  const LabelHeader = styled.div`
    text-align: left;
  `;

  return (
    <TitleStyled>
      <LabelHeader>{label} </LabelHeader>
      {sort ? (
        <ColumnHeader>
          {sortedBy && sortedBy[sort.key] === "ascending" ? (
            <AscIcon
              active={sortedBy && sortedBy[sort.key] === "ascending"}
              onClick={() => changeSortDirection("descending")}
            />
          ) : (
            <DesIcon
              active={sortedBy && sortedBy[sort.key] === "descending"}
              onClick={() => changeSortDirection("ascending")}
            />
          )}
        </ColumnHeader>
      ) : null}
    </TitleStyled>
  );
};

export default Tr;
