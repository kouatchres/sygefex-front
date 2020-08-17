import React from "react";
import styled from "styled-components";
import { getAllReportsQuery } from "../queries&Mutations&Functions/Queries";
import { deleteReportMutation } from "../queries&Mutations&Functions/Mutations";
import { useMutation } from "@apollo/react-hooks";

const DelBtn = styled.button`
  font-weight: bold;
  border-radius:8px;
  font-size:1.5rem;
  height:30px;
  border:none;
  padding-top:5px;
  padding-bottom:5px;
  align-items:center;
  background-color: white;
  color: black;
  width:10vw;
  border: 2px solid #4CAF50; /* Green */
  :hover{
    cursor:pointer;
    background-color: #4CAF50;
  color: white;
}
  }
`;

const DeleteReport = () => {
  const updateCache = (cache, payload) => {
    // manually update the cache so that the data are all the same
    // 1. read the cache for the data we want
    const data = cache.readQuery({ query: getAllReportsQuery });
    // todo select all the other reports except the deleted one from the cache
    data.reports = data.reports.filter(
      (report) => report.id !== payload.data.deleteReport.id
    );
    //  3. write the new data back to the cache
    cache.writeQuery({ query: getAllReportsQuery, data });
  };

  const [deleteReport, { loading, error }] = useMutation(deleteReportMutation, {
    variables: { id: props.id },
    update: { updateCache },
  });

  return (
    <div>
      <DelBtn
        onClick={() => {
          if (confirm("Voulez-vous supprime ce rapport?")) {
            deleteReport();
          }
        }}
      >
        {this.props.children}
      </DelBtn>
    </div>
  );
};

export default DeleteReport;
