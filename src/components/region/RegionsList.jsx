import React, { useEffect, useMemo } from "react";
import TableContainer from "./TableContainer";
import useForm from "../utils/useForm";
import { miniStyledPage } from "../styles/StyledPage";
import { StyledForm } from "../utils/FormInputs";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "./Filters";
import { getAllRegionsQuery } from "../queries&Mutations&Functions/Queries";

const RegionsList = () => {
  const [data, setData] = useForm([]);
  const client = useApolloClient();

  const loadRegionsData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsQuery,
    });
    const { regions } = { ...data };
    console.log(data);
    setData(regions);
  };

  useEffect(() => {
    loadRegionsData();
  }, []);

  console.log(data);
  const initialValues = {
    HeaderNames: "",
    beaderNames: "",
  };

  console.log(data);

  const columns = useMemo(
    () => [
      {
        Header: "Regions",
        columns: [
          {
            Header: "Nom Region",
            accessor: "regName",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "Code Region ",
            accessor: "regCode",
          },
        ],
      },
    ],
    []
  );

  return <TableContainer columns={columns} data={data} />;
};

export default RegionsList;
