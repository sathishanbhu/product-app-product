import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TableComponent = ({ data, onDelete, onUpdate }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <Button variant="primary" onClick={() => onUpdate(item)}>
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => onDelete(item)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
