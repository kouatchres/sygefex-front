import { useApolloClient } from "@apollo/react-hooks";
import React, { useState, useEffect } from "react";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";
import DataTable from "../utils/table/DataTable";
import styled from "styled-components";
import Tr from "../utils/table/tr";

const HeaderStyled = styled.tr`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
`;

const RowStyled = styled.tr`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
`;

const TablePresentation = styled.div`
  margin: 0 auto;
  /* width: 60%; */
  display: grid;
  grid-auto-flow: row;
`;

const pageData = ({ data, per = 50, page = 1 }) => {
  return data.slice(per * (page - 1), per * page);
};

function NewRegionList() {
  const [state, setState] = useState({
    rawData: [],
    data: [],
    loading: false,
    page: 1,
    sortedBy: { id: "descending" },
  });

  const [searchQuery, setSearchQuery] = useState("take me home");

  const client = useApolloClient();
  const loadingRegionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    });
    // const { regions } = { ...data };

    setState((prev) => ({
      ...prev,
      data: data.regions,
      rawData: data.regions,
    }));
  };
  const { rawData, data, sortedBy, loading } = { ...state };
  console.log(rawData, data, sortedBy);
  useEffect(() => {
    loadingRegionData();
  }, []);

  useEffect(() => {
    console.log("Sorting", sortedBy);
    if (!sortedBy) return;
    const sortKey = Object.keys(sortedBy)[0];
    const direction = sortedBy[sortKey];

    console.log({ sortKey });
    console.log({ direction });

    setState((prev) => ({
      ...prev,
      data: prev.data.sort((a, b) => {
        return direction === "ascending"
          ? a[sortKey] > b[sortKey]
          : a[sortKey] < b[sortKey];
      }),
    }));
    console.log({ state });
  }, []);

  useEffect(() => {
    console.log(rawData[0]);
  }, [state.query]);

  const search = () => {
    setState((prev) => ({
      data: rawData.filter((row) =>
        row[1]
          .toString()
          .toLowerCase()
          .indexOf(query.toLowerCase() > -1)
      ),
    }));
  };

  const loadMore = () => {
    if (loading) return;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    setState((prev) => ({
      data: [...prev.data, ...pageData({ data, page: prev.page + 1 })],
      loading: true,
      page: prev.page + 1,
    }));
  };
  return (
    <TablePresentation>
      <DataTable
        loadMore={loadMore}
        items={data}
        renderHead={() => (
          <RowStyled>
            <Tr
              label="Name"
              sortedBy={sortedBy}
              sort={{ key: "regName", changer: setState }}
            />
            <Tr
              label="Code"
              sortedBy={sortedBy}
              sort={{ key: "regCode", changer: setState }}
            />
            <Tr
              sortedBy={sortedBy}
              label="ID"
              sort={{ key: "id", changer: setState }}
            />
          </RowStyled>
        )}
        renderRow={({ regCode, regName, id }) => (
          <HeaderStyled>
            <td>{regName}</td>
            <td>{regCode}</td>
            <td>{id}</td>
          </HeaderStyled>
        )}
      />
    </TablePresentation>
  );
}

export default NewRegionList;
