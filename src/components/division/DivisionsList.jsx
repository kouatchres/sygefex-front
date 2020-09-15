import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../utils/TableContainer";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { MiniStyledPage } from "../styles/StyledPage";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "../utils/Filters";
import { getAllRegionsAndDivisionsQuery } from "../queries&Mutations&Functions/Queries";

const CenterCompleteResultsList = () => {
  const [data, setData] = useForm([]);
  const client = useApolloClient();

  const loadDivisionData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsAndDivisionsQuery,
    });
    console.log(data);
    const { regions } = { ...data };

    const getDivisions = regions.map((item) => {
      const divList = item.division.map((division) => ({
        regName: item.regName,
        regCode: item.regCode,
        ...division,
      }));

      return divList;
    });

    console.log(getDivisions.flat(1));

    setData(getDivisions.flat(1));
  };

  useEffect(() => {
    loadDivisionData();
  }, []);

  const initialValues = {
    HeaderNames: "",
    beaderNames: "",
  };

  console.log(data);
  const columns = useMemo(
    () => [
      {
        Header: " Région",
        columns: [
          {
            Header: "Nom Région",
            accessor: "regName",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "Code Région",
            accessor: "regCode",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
      {
        Header: "Département",
        columns: [
          {
            Header: "Nom",
            accessor: "divName",
          },
          {
            Header: "Code",
            accessor: "divCode",
          },
        ],
      },
    ],
    []
  );

  return (
    <Formik initialValues={initialValues}>
      {({ isSubmitting, values }) => (
        <MiniStyledPage>
          <h4>Reçu d'inscription de:</h4>

          <Form>
            <TableContainer columns={columns} data={data} />;
          </Form>
        </MiniStyledPage>
      )}
    </Formik>
  );
};

export default CenterCompleteResultsList;
