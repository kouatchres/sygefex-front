import React, { useState, useEffect } from "react";

import SygefexText from "../utils/table/ui/SygefexText";
import DataTable from "../utils/table/DataTable";
import json from "./people.json";
import Tr from "../utils/table/tr";
import styled from "styled-components";

const HeaderStyled = styled.tr`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 2.5fr 4fr 1fr;
`;

const RowStyled = styled.tr`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 2.5fr 4fr 1fr;
`;

const TablePresentation = styled.div`
  margin: 0 auto;
  display: grid;
  grid-auto-flow: row;
`;

function pageData({ data, per = 10, page = 1 }) {
  return data.slice(per * (page - 1), per * page);
}

const searchableColumns = ["first_name", "last_name", "email"];

const RegionListTable = ({}) => {
  const [state, setState] = useState({
    data: pageData({ data: json }),
    loading: false,
    page: 1,
    sortedBy: null,
  });
  const [query, setQuery] = useState("");
  const [additionalData, setAdditionalData] = useState([]);

  useEffect(() => {
    if (!state.sortedBy) return;
    const sortKey = Object.keys(state.sortedBy)[0];
    const direction = state.sortedBy[sortKey];
    setState((prev) => ({
      ...prev,
      data: prev.data.sort((a, b) => {
        return direction === "ascending"
          ? a[sortKey].localeCompare(b[sortKey])
          : b[sortKey].localeCompare(a[sortKey]);
      }),
    }));
  }, [state.sortedBy]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: search(json),
    }));
  }, [query]);

  function search(data) {
    return data.filter((row) =>
      searchableColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
      )
    );
  }

  const loadMore = () => {
    if (state.loading) return;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    setState((prev) => ({
      data: [...prev.data, ...pageData({ data: json, page: prev.page + 1 })],
      loading: false,
      page: prev.page + 1,
    }));
  };

  const toggleAdditionalData = (row) => {
    setAdditionalData((prev) =>
      additionalData.includes(row.id)
        ? prev.filter((id) => row.id !== id)
        : [...prev, row.id]
    );
  };
  // console.log(state.data, json);
  return (
    <TablePresentation>
      <SygefexText
        placeholder="Type your search strings  here"
        value={query}
        onChange={(val) => setQuery(val)}
      />
      <DataTable
        loadMore={loadMore}
        items={state.data}
        renderHead={() => (
          <RowStyled>
            <Tr label="ID" />
            <Tr
              label="First name"
              sortedBy={state.sortedBy}
              sort={{ key: "first_name", changer: setState }}
            />
            <Tr
              label="Last name"
              sortedBy={state.sortedBy}
              sort={{ key: "last_name", changer: setState }}
            />
            <Tr
              label="Email"
              sortedBy={state.sortedBy}
              sort={{ key: "email", changer: setState }}
            />
            <Tr label="Gender" />
          </RowStyled>
        )}
        renderRow={(row) => (
          <HeaderStyled>
            <td onClick={() => toggleAdditionalData(row)}>{row.id}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.first_name}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.last_name}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.email}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.gender}</td>
          </HeaderStyled>
        )}
      />
    </TablePresentation>
  );
};
export default RegionListTable;
