import React from "react";
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";
import "./schedule-table.css";
import makeData from "./makeData";

const Styles = styled.div`
  flex-shrink: 0;
  border-collapse: separate;
  border-spacing: 0 15px;
  table {
    padding: 1.5rem;
    text-align: center;
    width: 100%;
    tr {
    }
    th,
    td {
      padding: 1rem;
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
      :first-child {
        border-left: 1px solid black;
      }
      :last-child {
        border-right: 1px solid black;
      }
    }
  }
`;

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
}

export default function ScheduleTable() {
  const columns = React.useMemo(() => [
    {
      Header: "Agent Name",
      accessor: "agentName",
    },
    {
      Header: "Group(s)",
      accessor: "groups",
    },

    {
      Header: "MONITORING CAPACITY",
      accessor: "monitor_capacity",
    },
    {
      Header: "CHECKIN CAPACITY",
      accessor: "checkin_capacity",
    },
    {
      Header: "SUPPORT CAPACITY",
      accessor: "support_capacity",
    },
    {
      Header: "IDV",
      accessor: "status",
    },
    {
      Header: "WEEKLY START DAY AND END DAY",
      accessor: "start_date",
    },
    {
      Header: "START TIME AND END TIME",
      accessor: "start_time",
    },
  ]);

  const data = React.useMemo(() => makeData(2000), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
