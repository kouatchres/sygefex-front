import React, {  useMemo } from "react";
import TableContainer from './TableContainer'


const columns = useMemo(
    () => [
        {
            Header: () => null,
            id: "expander", // 'id' is required
            Cell: ({ row }) => (
                <span {...row.getToggleRowExpandedProps()}>
                    {row.isExpanded ? "👇" : "👉"}
                </span>
            ),
        },
        {
            Header: "Region Name",
            accessor: "regName",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
        },
        {
            Header: "Region Code",
            accessor: "regCode",
            disableSortBy: true,
            Filter: SelectColumnFilter,
            filter: "equals",
        },
        {
            Header: "Region ID",
            accessor: "name",
        },
    ],
    []
);

return (
    <Container style={{ marginTop: 100 }}>
        <TableContainer
            columns={columns}
            data={data}
            renderRowSubComponent={renderRowSubComponent}
        />
    </Container>
);
};
