import React, { useEffect, useMemo } from "react";
import TableContainer from "./TableContainer";
import useForm from "../../utils/useForm";
import { Formik, Form } from "formik";
import { TableStyledPage } from "../../styles/StyledPage";
import { StyledForm } from "../../utils/FormInputs";
import Moment from "moment";
import { useApolloClient } from "@apollo/react-hooks";
import { SelectColumnFilter } from "../../utils/Filters";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";

const CenterCompleteResultsList = ({ id }) => {
  const [data, setData] = useForm([]);
  const client = useApolloClient();

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
        centerExamSession: item.centerExamSession,
        exam: item.centerExamSession.examSession.exam,
        session: item.centerExamSession.examSession.session,
        center: item.centerExamSession.center.centerName,
        candRegistrationNumber: item.candRegistrationNumber,
        specialty: item.specialty.specialtyName,
        specialtyCode: item.specialty.specialtyCode,
        aptitude: item.aptitude.aptitudeName,
        ...item.candidate,
      }));
    console.log({ registration });
    console.log({ getCand });
    setData(getCand);
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
        Header: "Inscription",
        columns: [
          {
            Header: "No",
            accessor: "candRegistrationNumber",
          },
          {
            Header: "Nom Series",
            accessor: "specialty",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
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
            accessor: "gender.genderName",
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
        <TableStyledPage>
          <h4>Reçu d'inscription de:</h4>

          <StyledForm disabled={isSubmitting} aria-busy={isSubmitting}>
            <Form>
              <TableContainer columns={columns} data={data} />;
            </Form>
          </StyledForm>
        </TableStyledPage>
      )}
    </Formik>
  );
};

export default CenterCompleteResultsList;
