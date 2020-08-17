import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import { StyledButton } from "../utils/FormInputs";
import { Filters, DefaultColumnFilter, SelectColumnFilter } from "./Filters";
import styled from "styled-components";

const TableStyled = styled.table`
  /* border: solid 0.1rem ${(props) => props.theme.tableBlack}; */
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.formBS2};
`;

const TableHeadStyled = styled.thead`
  font-size: 1.4rem;
  color: ${(props) => props.theme.pureWhite};
  background-color: ${(props) => props.theme.darkRed};
`;

const THeadStyled = styled.th`
  font-size: 1.5rem;
  :last-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const TBodyStyled = styled.tbody`
  font-size: 1.5rem;
  tr:nth-child(even) {
    background: ${(props) => props.theme.pureWhite};
  }
  tr:nth-child(odd) {
    background: ${(props) => props.theme.tableLightBlue};
  }
`;

const TDStyled = styled.td``;

const RecordStyled = styled.tr`
  font-size: 1.2rem;
`;

const PageNumbersStyled = styled.div`
  font-size: 1.3rem;
  justify-items: left;
`;

const LeftButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;
`;

const PaginationSection = styled.div`
  justify-content: center;
  margin: 0 auto;
  padding: 0 30rem;
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 0.5rem;
`;

const PaginationComponents = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 0.5rem;
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
  }
`;

const Styles = styled.div`
  padding: 1rem;
  table {
    /* padding: 0.5rem; */
tr{

      border-radius: 01rem;
}
    thead {
      input {
        border-radius: 0.5rem;
      }
    }
    margin: 0 auto;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          /* border-bottom: 0; */
          /* border-bottom: 0.1rem solid ${(props) =>
            props.theme.tableBlack}; */
        }
      }
    }

    th,
    td {
      padding: 0.1rem 0.2rem;
      border-bottom: 0.1rem solid ${(props) => props.theme.grey};
      /* border-right: 0.1rem solid ${(props) => props.theme.tableBlack}; */

      :last-child {
        /* border-right: 0.1rem solid ${(props) => props.theme.tableBlack}; */
        /* border-right: 0; */
      }
      :first-child {
        /* border-left: 0.1rem solid ${(props) => props.theme.tableBlack}; */
      }
    }
    th{
      :last-child  {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

    }
  }
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
    <form>
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
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
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
    </form>
  );
};

export default TableContainer;
