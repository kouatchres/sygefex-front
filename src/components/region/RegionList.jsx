import React, { useState, useEffect } from "react";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import SygefexText from "../utils/table/ui/SygefexText";
import DataTable from "../utils/table/DataTable";
import Tr from "../utils/table/tr";
import styled from "styled-components";
import { useApolloClient } from "@apollo/react-hooks";

const HeaderStyled = styled.tr`
  display: grid;
  grid-template-columns: 3.8fr 2.5fr 2fr;
  td:nth-child(1) {
    min-width: 20rem;
  }

  td:nth-child(2) {
    min-width: 6rem;
  }
  td:nth-child(3) {
    min-width: 5rem;
  }
`;

const RowStyled = styled.tr`
  td:nth-child(3) {
    min-width: 5rem;
  }
  td:nth-child(1) {
    min-width: 20rem;
  }

  td:nth-child(2) {
    min-width: 6rem;
  }
  display: grid;
  grid-template-columns: 3.8fr 2.5fr 2fr;
`;

const TablePresentation = styled.div`
  margin: 0 auto;
  display: grid;
  min-width: 80rem;
  grid-auto-flow: row;
`;

function pageData({ data, per = 2, page = 1 }) {
  return data.slice(per * (page - 1), per * page);
}

const searchableColumns = ["regName", "regCode", "id"];

const RegionList = ({}) => {
  const client = useApolloClient();
  const [regions, setRegions] = useState([]);

  const [state, setState] = useState({
    data: pageData({ data: regions }),
    loading: false,
    page: 1,
    sortedBy: null,
  });
  const [query, setQuery] = useState("");
  const [additionalData, setAdditionalData] = useState([]);

  const loadRegionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    });
    {
      error && <Error error={error} />;
    }
    const { regions } = { ...data };
    console.log(regions);
    setRegions(regions);
    console.log(regions);
    return regions;
  };

  console.log(regions);

  useEffect(() => {
    loadRegionData();
  }, []);

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
      data: search(regions),
    }));
  }, [query]);

  const search = (data) => {
    return (
      data &&
      data.filter((row) =>
        searchableColumns.some(
          (column) =>
            row[column].toString().toLowerCase().indexOf(query.toLowerCase()) >
            -1
        )
      )
    );
  };

  const loadMore = () => {
    if (state.loading) return;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    setState((prev) => ({
      data: [...prev.data, ...pageData({ data: regions, page: prev.page + 1 })],
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

  return (
    <TablePresentation>
      <SygefexText
        placeholder="Type here to filter results"
        value={query}
        onChange={(val) => setQuery(val)}
      />
      <DataTable
        loadMore={loadMore}
        items={state.data}
        renderHead={() => (
          <RowStyled>
            <Tr
              label="ID"
              sortedBy={state.sortedBy}
              sort={{ key: "id", changer: setState }}
            />
            <Tr
              label="Nom Region"
              sortedBy={state.sortedBy}
              sort={{ key: "regName", changer: setState }}
            />
            <Tr
              label="Code Region"
              sortedBy={state.sortedBy}
              sort={{ key: "regCode", changer: setState }}
            />
          </RowStyled>
        )}
        renderRow={(row) => (
          <HeaderStyled>
            <td onClick={() => toggleAdditionalData(row)}>{row.id}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.regName}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.regCode}</td>
          </HeaderStyled>
        )}
      />
    </TablePresentation>
  );
};
export default RegionList;
