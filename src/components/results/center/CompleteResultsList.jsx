import React, { useState, useEffect } from "react";
import Link from "next/link";
import SygefexText from "../../utils/table/ui/SygefexText";
import DataTable from "../../utils/table/DataTable";
import Tr from "../../utils/table/tr";
import styled from "styled-components";
import { useApolloClient } from "@apollo/react-hooks";
import { centerExamSessionForResultsQuery } from "../../queries&Mutations&Functions/Queries";

const HeaderStyled = styled.tr`
  display: grid;
  grid-template-columns: 2fr 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
  td:nth-child(1) {
    min-width: 8rem;
  }

  td:nth-child(2) {
    min-width: 2rem;
  }
  td:nth-child(3) {
    min-width: 5rem;
  }
  td:nth-child(4) {
    min-width: 5rem;
  }
  td:nth-child(5) {
    min-width: 5rem;
  }
  td:nth-child(6) {
    min-width: 4rem;
  }
  td:nth-child(7) {
    min-width: 2rem;
  }
`;

const RowStyled = styled.tr`
  td:nth-child(1) {
    min-width: 8rem;
  }

  td:nth-child(2) {
    min-width: 2rem;
  }
  td:nth-child(3) {
    min-width: 5rem;
  }
  td:nth-child(4) {
    min-width: 5rem;
  }
  td:nth-child(5) {
    min-width: 5rem;
  }
  td:nth-child(6) {
    min-width: 4rem;
  }
  td:nth-child(7) {
    min-width: 2rem;
  }
  display: grid;
  grid-template-columns: 2fr 0.5fr 1fr 1fr 1fr 1fr 0.5fr;
`;

const TablePresentation = styled.div`
  margin: 0 auto;
  display: grid;
  min-width: 80rem;
  grid-auto-flow: row;
`;

function pageData({ data, per = 2, page = 1 }) {
  return data.slice(per * (page - 1), per * page);
}

const searchableColumns = [
  "cand1stName",
  "cand2ndName",
  "cand3rdName",
  "gender",
  "specialtyCode",
  "candRegistrationNumber",
];

const DivisionList = ({ id }) => {
  const client = useApolloClient();

  const [cand, setCand] = useState([]);
  const [state, setState] = useState({
    data: pageData({ data: cand && cand }),
    loading: false,
    page: 1,
    sortedBy: null,
  });
  const [query, setQuery] = useState("");
  const [additionalData, setAdditionalData] = useState([]);

  // const loadTitleData = async () => {
  //   const { error, data } = await client.query({
  //     query: centerExamSessionForResultsQuery,
  //     variables: { id },
  //   });
  //   console.log(data);
  //   const { centerExamSession } = { ...data };

  //   setTitle({ centerExamSession });
  // };

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
    setState((prev) => ({ ...prev, data: getCand }));
  };

  useEffect(() => {
    loadCandScoreData();
    // loadTitleData();
  }, []);

  useEffect(() => {
    if (!state.sortedBy) return;
    const sortKey = Object.keys(state.sortedBy)[0];
    const direction = state.sortedBy[sortKey];
    setState((prev) => ({
      ...prev,
      data: prev.data.sort((a, b) => {
        return direction === "ascending"
          ? a[sortKey].localeCompare(b[sortKey])
          : b[sortKey].localeCompare(a[sortKey]);
      }),
    }));
  }, [state.sortedBy]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: search(state.data),
    }));
  }, [query]);

  const search = (data) => {
    return (
      data &&
      data.filter((row) =>
        searchableColumns.some(
          (column) =>
            row[column].toString().toLowerCase().indexOf(query.toLowerCase()) >
            -1
        )
      )
    );
  };

  const loadMore = () => {
    if (state.loading) return;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    setState((prev) => ({
      data: [...prev.data, ...pageData({ data: data, page: prev.page + 1 })],
      loading: false,
      page: prev.page + 1,
    }));
  };

  const toggleAdditionalData = (row) => {
    setAdditionalData((prev) =>
      additionalData.includes(row.id)
        ? prev.filter((id) => row.id !== id)
        : [...prev, row.id]
    );
  };

  return (
    <TablePresentation>
      <SygefexText
        placeholder="Type here to filter results"
        value={query}
        onChange={(val) => setQuery(val)}
      />
      <DataTable
        loadMore={loadMore}
        items={state.data}
        renderHead={() => (
          <RowStyled>
            <Tr
              label="No Inscription"
              sortedBy={state.sortedBy}
              sort={{ key: "candRegistrationNumber", changer: setState }}
            />
            <Tr
              label="Serie"
              sortedBy={state.sortedBy}
              sort={{ key: "specialtyCode", changer: setState }}
            />

            <Tr
              label="Prenom "
              sortedBy={state.sortedBy}
              sort={{ key: "cand1stName", changer: setState }}
            />
            <Tr
              label="Nom "
              sortedBy={state.sortedBy}
              sort={{ key: "cand2ndName", changer: setState }}
            />
            <Tr
              label="Autres Noms "
              sortedBy={state.sortedBy}
              sort={{ key: "cand3rdName", changer: setState }}
            />
            <Tr
              label="Sexe"
              sortedBy={state.sortedBy}
              sort={{ key: "gender", changer: setState }}
            />
            <Tr
              label="A/I"
              sortedBy={state.sortedBy}
              sort={{ key: "aptitude", changer: setState }}
            />
          </RowStyled>
        )}
        renderRow={(row) => (
          <HeaderStyled>
            <td onClick={() => toggleAdditionalData(row)}>
              <Link
                href={{
                  pathname: "/show/results/candResults",
                  query: {id:row.id },
                }}
              >
                <a target="_blank">{row.candRegistrationNumber.substring(6)}</a>
              </Link>
            </td>
            <td onClick={() => toggleAdditionalData(row)}>
              {row.specialtyCode}
            </td>
            <td onClick={() => toggleAdditionalData(row)}>{row.cand1stName}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.cand2ndName}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.cand3rdName}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.gender}</td>
            <td onClick={() => toggleAdditionalData(row)}>{row.aptitude}</td>
          </HeaderStyled>
        )}
      />
    </TablePresentation>
  );
};
export default DivisionList;
