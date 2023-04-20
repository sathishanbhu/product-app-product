import React, { useState } from "react";
import TableComponent from "./TableComponent";
import FormComponent from "./FormComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const initialFormData = { id: null, name: "", email: "" };

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com" },
  ]);
  const [editFormData, setEditFormData] = useState(initialFormData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = (item) => {
    setData(data.filter((dataItem) => dataItem.id !== item.id));
  };

  const handleAddFormShow = () => {
    setShowAddForm(true);
  };

  const handleAddFormClose = () => {
    setShowAddForm(false);
  };

  const handleEditFormShow = (item) => {
    setEditFormData(item);
    setShowEditForm(true);
  };

  const handleEditFormClose = () => {
    setEditFormData(initialFormData);
    setShowEditForm(false);
  };

  const handleAddSubmit = (formData) => {
    const newId = data.length + 1;
    setData([...data, { ...formData, id: newId }]);
    setShowAddForm(false);
  };

  const handleEditSubmit = (formData) => {
    setData(
      data.map((dataItem) =>
        dataItem.id === formData.id ? formData : dataItem
      )
    );
    setShowEditForm(false);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>React Bootstrap Table with CRUD</h1>
          <TableComponent
            data={data}
            onDelete={handleDelete}
            onUpdate={handleEditFormShow}
          />
          <button className="btn btn-primary" onClick={handleAddFormShow}>
            Add Item
          </button>
          {showAddForm && (
            <FormComponent
              data={initialFormData}
              onSubmit={handleAddSubmit}
              onClose={handleAddFormClose}
            />
          )}
          {showEditForm && (
            <FormComponent
              data={editFormData}
              onSubmit={handleEditSubmit}
              onClose={handleEditFormClose}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
