import React, { useState } from "react";
import "./Styles/userList-styles.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { userRows } from "../Data/dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
  const [rowData, setRowData] = useState(userRows);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src={params.row.avatar}
              className="userListUser-avatar"
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 180,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlined
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setRowData(() => rowData.filter((row) => row.id !== id));
  };
  return (
    <div className="userList">
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
