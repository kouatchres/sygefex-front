import React, { useEffect, useState, useMemo } from "react";
import TableContainer from "./TableContainer";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "./Filters";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";

const ReactTable = () => {
  const [data, setData] = useState([]);
  const client = useApolloClient();

  const loadRegionData = async () => {
    const { data, loading, error } = await client.query({
      query: getAllRegionsQuery,
    });
    const { regions } = { ...data };

    console.log({ data });
    console.log({ regions });
    setData(regions);
  };

  useEffect(() => {
    loadRegionData();
  }, []);
  console.log(data);
  const columns = useMemo(
    () => [
      {
        Header: " Regions Information",
        columns: [
          {
            Header: "Region Name",
            accessor: "regName",
            disableSortBy: false,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "Region Code",
            accessor: "regCode",
            disableSortBy: false,
            // Filter: SelectColumnFilter,
            // filter: "equals",
          },
          {
            Header: "Region ID",
            accessor: "id",
          },
        ],
      },
    ],
    []
  );

  return <TableContainer columns={columns} data={data} />;
};

export default ReactTable;
