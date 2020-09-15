import React, { useState, useEffect, useMemo } from "react";
import TableContainer from "../utils/TableContainer";
import useForm from "../utils/useForm";
import { Formik, Form } from "formik";
import { BiggestStyledPage } from "../styles/StyledPage";
import Moment from "moment";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "../utils/Filters";
import { getAllSubjectsWithEducTypesQuery } from "../queries&Mutations&Functions/Queries";

const CenterCompleteResultsList = () => {
  const [data, setData] = useForm([]);
  const client = useApolloClient();

  const [title, setTitle] = useState({});

  // const loadTitleData = async () => {
  //   const { error, data } = await client.query({
  //     query: getAllSubjectsWithEducTypesQuery,
  //   });
  //   console.log(data);
  //   const { centerExamSession } = { ...data };

  //   setTitle({ centerExamSession });
  // };

  const loadCandScoreData = async () => {
    const { error, data } = await client.query({
      query: getAllSubjectsWithEducTypesQuery,
    });
    console.log(data);
    const { subjects } = { ...data };
    const { subjectSpecialty } = { ...subjects };
    const getSubjs =
      subjects &&
      subjects.map((item) => ({
        subjectName: item.subjectName,
        subjectGroup: item.subjectGroup,
        subjectType: item.subjectType,
        subjectCode: item.subjectCode,
      }));
    console.log({ getSubjs });
    setData(getSubjs);
  };

  useEffect(() => {
    loadCandScoreData();
  }, []);

  const initialValues = {
    HeaderNames: "",
    beaderNames: "",
  };

  console.log(data);

  const columns = useMemo(
    () => [
      {
        Header: "Type D'Enseignement",
        columns: [
          {
            Header: "Nom",
            accessor: "candRegistrationNumber",
          },

          {
            Header: "Code",
            accessor: "specialtyCode",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
      {
        Header: "Matieres",
        columns: [
          {
            Header: "Nom",
            accessor: "subjectName",
          },
          {
            Header: "Code",
            accessor: "subjectCode",
          },
          {
            Header: "Type",
            accessor: "subjectType",
          },
          {
            Header: "Groupe",
            accessor: "subjectGroup",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
    ],
    []
  );

  return (
    <Formik initialValues={initialValues}>
      {({ isSubmitting, values }) => (
        <BiggestStyledPage>
          <h4>
            Candidats inscrits a l'Examen: {}, Session:{} , Centre: {}
          </h4>
          <Form>
            <TableContainer columns={columns} data={data} />
          </Form>
        </BiggestStyledPage>
      )}
    </Formik>
  );
};

export default CenterCompleteResultsList;
