import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../utils/TableContainer";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { MiniStyledPage } from "../styles/StyledPage";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "../utils/Filters";
import { getAllRegionsDivisionsAndTownsQuery } from "../queries&Mutations&Functions/Queries";

const CenterCompleteResultsList = () => {
  const [data, setData] = useForm([]);
  const client = useApolloClient();

  const loadTownData = async () => {
    const { error, data } = await client.query({
      query: getAllRegionsDivisionsAndTownsQuery,
    });
    console.log(data);
    const { regions } = { ...data };

    const getTowns = regions.map((item) => {
      const divList = item.division.map((division) => ({
        ...division,
        regName: item.regName,
        regCode: item.regCode,
        // const townlist =
        //   getSubDiv &&
        //   getSubDiv.town.map((aTown) => ({
        //     ...aTown,
        //   }));

        // return townList;
      }));

      return divList;
    });

    console.log(getTowns.flat(1));

    setData(getTowns.flat(1));
  };

  useEffect(() => {
    loadTownData();
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
            Header: "Nom Départ",
            accessor: "divName",
          },
          {
            Header: "Code Départ",
            accessor: "divCode",
          },
        ],
      },
      {
        Header: "Ville",
        columns: [
          {
            Header: "Nom Ville",
            accessor: "townName",
          },
          {
            Header: "Code Ville",
            accessor: "townCode",
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
