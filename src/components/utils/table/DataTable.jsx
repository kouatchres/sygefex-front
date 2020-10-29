import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const TableStyled = styled.table`
  margin: 0 auto;
  width: 60%;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.formBS2};
  justify-items: center;
  border-radius: 0.9rem;
  align-self: center;
  border: 0;
  margin-bottom: 2rem;
  border-collapse: collapse;
`;

const TBodyStyled = styled.tbody`
  :hover {
    cursor: pointer;
  }
  border-left: 0.1rem solid ${(props) => props.theme.pureWhite};
  tr {
    font-size: 1.4rem;

    :nth-child(even) {
      background: ${(props) => props.theme.warna};
    }
    :nth-child(odd) {
      background: ${(props) => props.theme.tableLightBlue};
    }

    :last-child {
      border-bottom-right-radius: 0.9rem;
      border-bottom: 0.1rem solid ${(props) => props.theme.pureWhite};
      border-bottom-left-radius: 0.9rem;
    }

    td {
      border-collapse: collapse;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: left;
      border-top: 0.1rem solid ${(props) => props.theme.pureWhite};
      :not(:last-child) {
        border-right: 0.1rem solid ${(props) => props.theme.pureWhite};
      }
    }
  }
`;

const THeadStyled = styled.thead`
  padding: 1rem 0;
  color: ${(props) => props.theme.pureWhite};
  width: 100%;
  font-size: 1.3rem;
  th {
    border-collapse:collapse;
    border-top: 0.1rem solid ${(props) => props.theme.pureWhite};
    border-right: 0.1rem solid ${(props) => props.theme.pureWhite};
    text-align: left;
    background: ${(props) => props.theme.darkRed};
    padding: 0.5rem;
     :not(:last-child) {
        border-right: 0.1rem solid ${(props) => props.theme.pureWhite};
      }
    :last-child {
      /* border-left: 0.1rem solid ${(props) => props.theme.pureWhite}; */
      border-top-right-radius: 0.9rem;
    }
    :first-child {
      border-left: 0.1rem solid ${(props) => props.theme.pureWhite};
      border-top-left-radius: 0.9rem;
    }
  }
`;

const RecordStyled = styled.tr`
  border-collapse: collapse;
  :last-child {
    td:first-child {
      border-bottom-left-radius: 0.9rem;
    }
    td:last-child {
      border-bottom-right-radius: 0.9rem;
    }
  }
`;
const FigureTable = styled.figure`
  max-width: 98%;
  overflow-x: scroll;
`;

// @media (max-width: 25rem) {
//   table, caption, tbody, tr, th, td {
//     display: block;
//     text-align: left;
//   }
//   thead, th:empty, td:empty {
//     display: none;
//     visibility: hidden;
//   }
//   th[data-title]:before, td[data-title]:before {
//     content: attr(data-title) ": ";
//     display: inline-block;
//     width: 3.5em;
//   }
// }

const DataTable = ({ items, renderHead, renderRow, loadMore }) => {
  const ref = useRef(null);

  const handleScroll = (e) => {
    const cY = window.scrollY;
    const tbh = ref.current.offsetHeight;
    const thresh = 1000;
    if (tbh - cY - thresh < 0) loadMore();
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FigureTable>
      <TableStyled cellPadding={0} cellSpacing={0}>
        <THeadStyled>
          <RecordStyled>{renderHead()}</RecordStyled>
        </THeadStyled>

        <TBodyStyled ref={ref}>
          {items.map((row) => renderRow(row))}
        </TBodyStyled>
      </TableStyled>
    </FigureTable>
  );
};

export default DataTable;
