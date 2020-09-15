import React, { useState, useEffect, useMemo } from "react";
import TableContainer from "./TableContainer";
import useForm from "../../utils/useForm";
import { Formik, Form } from "formik";
import { BiggestStyledPage } from "../../styles/StyledPage";
import { StyledForm } from "../../utils/FormInputs";
import Moment from "moment";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "../../utils/Filters";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";

const CenterCompleteResultsList = ({ id }) => {
  const [data, setData] = useForm([]);
  const client = useApolloClient();

  const [title, setTitle] = useState({});

  const loadTitleData = async () => {
    const { error, data } = await client.query({
      query: centerExamSessionForResultsQuery,
      variables: { id },
    });
    console.log(data);
    const { centerExamSession } = { ...data };

    setTitle({ centerExamSession });
  };

  const loadCandScoreData = async () => {
    const { error, data } = await client.query({
      query: centerExamSessionForResultsQuery,
      variables: { id },
    });
    console.log(data);
    const { centerExamSession } = { ...data };
    const { registration } = { ...centerExamSession };
    const getCand =
      registration &&
      registration.map((item) => ({
        candRegistrationNumber: item.candRegistrationNumber,
        specialty: item.specialty.specialtyName,
        specialtyCode: item.specialty.specialtyCode,
        aptitude: item.aptitude,
        EPF1: item.EPF1,
        EPF2: item.EPF2,
        ...item.candidate,
      }));
    console.log({ registration });
    console.log({ getCand });
    setData(getCand);
  };

  useEffect(() => {
    loadCandScoreData();
    loadTitleData();
  }, []);

  const initialValues = {
    HeaderNames: "",
    beaderNames: "",
  };

  console.log(data);
  console.log(title);
  const { center, examSession } = { ...title.centerExamSession };
  const { exam, session } = { ...examSession };
  const { examName } = { ...exam };
  const { sessionName } = { ...session };
  const { centerName } = { ...center };
  const columns = useMemo(
    () => [
      {
        Header: "Inscription",
        columns: [
          {
            Header: "No",
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
        Header: "Noms",
        columns: [
          {
            Header: "Nom",
            accessor: "cand1stName",
          },
          {
            Header: "Prenom",
            accessor: "cand2ndName",
          },
          {
            Header: "Autres",
            accessor: "cand3rdName",
          },
        ],
      },
      {
        Header: "EPF",
        columns: [
          {
            Header: "EPF1",
            accessor: "EPF1",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
          {
            Header: "EPF2",
            accessor: "EPF2",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
      {
        Header: "Aptitude",
        columns: [
          {
            Header: "aptitude",
            accessor: "aptitude",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
          },
        ],
      },
      {
        Header: "Naissaince",
        columns: [
          {
            Header: "Date",
            accessor: (d) => {
              d.dateOfBirth;
              return Moment(d.dateOfBirth).local().format("DD-MM-YYYY");
            },
          },
          {
            Header: "Lieu",
            accessor: "placeOfBirth",
          },
          {
            Header: "Sexe",
            accessor: "gender",
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
            Candidats inscrits a l'Examen: {examName}, Session:{sessionName} ,
            Centre: {centerName}
          </h4>
          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <TableContainer columns={columns} data={data} />
            </Form>
          </StyledForm>
        </BiggestStyledPage>
      )}
    </Formik>
  );
};

export default CenterCompleteResultsList;
