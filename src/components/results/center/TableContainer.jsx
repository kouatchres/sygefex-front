import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { StyledButton, StyledForm } from "../../utils/FormInputs";
import { Filters, DefaultColumnFilter } from "../../utils/Filters";
import styled from "styled-components";

const TableStyled = styled.table`
  margin: 1rem auto;
  justify-items: center;
  position: sticky;
  border-radius: 0.6rem;
  align-self: center;
  border: 0.1rem solid ${(props) => props.theme.pureWhite};
  box-shadow: ${(props) => props.theme.formBS2};
`;

const TableHeadStyled = styled.thead`
  color: ${(props) => props.theme.pureWhite};
  background-color: ${(props) => props.theme.darkRed};
  input {
    border-radius: 0.5rem;
    width: 8rem;
    background: ${(props) => props.theme.warna};
  }
  select {
    border-radius: 0.5rem;
    width: auto;
    max-width: 20rem;
    background: ${(props) => props.theme.warna};
  }
  tr:first-child {
    th {
      :last-child {
        border-top-right-radius: 0.6rem;
      }
      :first-child {
        border-top-left-radius: 0.6rem;
        }
    }
  }
  tr:last-child {
    th {
      border-top: 0.01rem solid ${(props) => props.theme.pureWhite};
      border-right: 0.01rem solid ${(props) => props.theme.pureWhite};
  }
  }
  tr {
    th {
      /* border-top: 0.02rem solid ${(props) => props.theme.pureWhite}; */
      border-right: 0.02rem solid ${(props) => props.theme.pureWhite};
    }
  }
`;

const THeadStyled = styled.th`
  font-size: 1.5rem;
  position: sticky;
  top: 5rem;
`;

const TBodyStyled = styled.tbody`
  tr {
    font-size: 1.4rem;
  }

  tr:nth-child(even) {
    background: ${(props) => props.theme.warna};
    border-bottom-left-radius: 2rem;
  }
  tr:nth-child(odd) {
    background: ${(props) => props.theme.tableLightBlue};
    border-bottom-left-radius: 2rem;
  }
  tr :last-child {
    border-bottom: 0.02rem solid ${(props) => props.theme.pureWhite};
  }
  tr {
    td {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: left;
      border-top: 0.02rem solid ${(props) => props.theme.pureWhite};
      border-right: 0.02rem solid ${(props) => props.theme.pureWhite};
    }
  }
  tr {
    td:first-child {
      border-left: 0.02rem solid ${(props) => props.theme.pureWhite};
    }
  }
`;

const TDStyled = styled.td`
  /* border-radius: 01rem; */
`;

const RecordStyled = styled.tr`
  :last-child {
    td:first-child {
      border-bottom-left-radius: 0.6rem;
    }
    td:last-child {
      border-bottom-right-radius: 0.6rem;
    }
  }
`;

const PageNumbersStyled = styled.div`
  font-size: 1.3rem;
  justify-items: center;
  align-items: center;
`;

const LeftButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const PaginationSection = styled.div`
  justify-content: center;
  display: flex;
  margin: 1rem 0;
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 0.5rem;
`;

const PaginationComponents = styled.div`
  display: grid;
  width: 50vw;
  border: 0.2rem solid ${(props) => props.theme.pureWhite};
  box-shadow: ${(props) => props.theme.formBS2};
  font-size: 1.3rem;
  grid-gap: 0.5rem;
  padding: 0.4rem;
  align-self: center;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.pureWhite};
  grid-template-columns: 0.5fr 1.5fr 0.5fr;
  background-color: ${(props) => props.theme.darkRed};
  button {
    border: solid 0.1rem ${(props) => props.theme.gray};
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.tableLightBlue};
  }
  input,
  select {
    border-radius: 0.5rem;
    width: 10rem;
    background: ${(props) => props.theme.warna};
  }
`;

const Styles = styled.div`
/* background: ${(props) => props.theme.tableBackgrd}; */
  display: flex;
  justify-content: center;
  /* background-color: ${(props) => props.theme.goldenYellow}; */
`;

const TableContainer = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  return (
    <>
      <Styles>
        <TableStyled bordered hover {...getTableProps()}>
          <TableHeadStyled>
            {headerGroups.map((headerGroup) => (
              <RecordStyled {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <THeadStyled {...column.getHeaderProps()}>
                    <div {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div>
                    <Filters column={column} />
                  </THeadStyled>
                ))}
              </RecordStyled>
            ))}
          </TableHeadStyled>

          <TBodyStyled {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <RecordStyled key={row.getRowProps().key}>
                  {row.cells.map((cell) => {
                    return (
                      <TDStyled {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TDStyled>
                    );
                  })}
                </RecordStyled>
              );
            })}
          </TBodyStyled>
        </TableStyled>
      </Styles>

      <PaginationSection>
        <PaginationComponents>
          <LeftButtons>
            <StyledButton
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </StyledButton>

            <StyledButton onClick={previousPage} disabled={!canPreviousPage}>
              {"<"}
            </StyledButton>
          </LeftButtons>
          <Controls>
            <PageNumbersStyled>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </PageNumbersStyled>
            <input
              type="number"
              min={1}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Controls>
          <LeftButtons>
            <StyledButton onClick={nextPage} disabled={!canNextPage}>
              {">"}
            </StyledButton>

            <StyledButton
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </StyledButton>
          </LeftButtons>
        </PaginationComponents>
      </PaginationSection>
    </>
  );
};

export default TableContainer;
