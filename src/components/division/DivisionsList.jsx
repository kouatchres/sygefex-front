import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "./TableContainer";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { MiniStyledPage } from "../styles/StyledPage";
import { StyledForm } from "../utils/FormInputs";
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
    const { divisions } = { ...data };

    // const divisions =
    //   divisions &&
    //   divisions.map((item) => ({
    //     item,
    //   });
    console.log({ divisions });
    // console.log({ region });

    setData(divisions);
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
            accessor: "regionName",
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
            Header: "Nom Département",
            accessor: "divName",
          },
          {
            Header: "Code Département",
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

          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <TableContainer columns={columns} data={data} />;
            </Form>
          </StyledForm>
        </MiniStyledPage>
      )}
    </Formik>
  );
};

export default CenterCompleteResultsList;
