import React, { useEffect, useMemo } from "react";
import TableContainer from "../utils/TableContainer";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { MinimStyledPage } from "../styles/StyledPage";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "../utils/Filters";
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
        Header: "Régions",
        columns: [
          {
            Header: "Nom Région",
            accessor: "regName",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "Code Région ",
            accessor: "regCode",
          },
        ],
      },
    ],
    []
  );

  return (
    <Formik initialValues={initialValues}>
      {({ isSubmitting, values }) => (
        <MinimStyledPage>
          <h4>Liste des Régions</h4>

          <Form>
            <TableContainer columns={columns} data={data} />
          </Form>
        </MinimStyledPage>
      )}
    </Formik>
  );
};

export default RegionsList;
