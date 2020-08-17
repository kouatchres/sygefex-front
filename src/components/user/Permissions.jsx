import React, { useEffect, useState, useMemo } from "react";
import TableContainer from "../customTable/TableContainer";
import styled from "styled-components";
import Error from "../ErrorMessage";
import { useApolloClient } from "@apollo/react-hooks";
import { getAllUsersQuery } from "../queries&Mutations&Functions/Queries";

const ReactTable = () => {
  const [data, setData] = useState([]);
  const client = useApolloClient();

  const possiblePermissions = [
    "Admin",
    "User",
    "Marks",
    "Sec",
    "Centre Admin",
    "Examiner",
  ];
  const loadUsersData = async () => {
    const { data, loading, error } = await client.query({
      query: getAllUsersQuery,
    });
    const { users } = { ...data };
    console.log({ users });
    setData(users);
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  const permissionColumns = possiblePermissions.map((permission) => {
    return {
      Header: permission,
    };
  });
  console.log(permissionColumns);

  // console.log(columHeaders);
  const columns = useMemo(
    () => [
      {
        Header: " Users Information",
        columns: [
          {
            Header: "Name",
            accessor: "name",
            disableSortBy: false,
            // Filter: SelectColumnFilter,
            // filter: "equals",
          },
          {
            Header: "Email",
            accessor: "email",
            disableSortBy: false,
            // Filter: SelectColumnFilter,
            // filter: "equals",
          },
          ...permissionColumns,
        ],
      },
    ],
    []
  );

  return <TableContainer columns={columns} data={data} />;
};

export default ReactTable;
