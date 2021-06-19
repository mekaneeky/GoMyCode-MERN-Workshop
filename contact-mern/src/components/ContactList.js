import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Container } from "react-bootstrap";
import CustomModal from "./CustomModal";

const ContactList = () => {
  const [contacts, setContact] = useState([]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/${id}`)
      .then(() => getList())
      .catch((err) => console.error(err));
  };
  const getList = async () => {
    const response = await axios.get("http://localhost:4000/");
    setContact(response.data);
  };

  useEffect(() => {
    getList();
  }, []);

  const renderList = contacts.map((contact) => {
    return (
      <ListGroup.Item key={contact._id}>
        {contact.name}
        <CustomModal
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          id={contact._id}
          handleDelete={handleDelete}
        />
      </ListGroup.Item>
    );
  });

  return (
    <Container>
      <ListGroup>{renderList}</ListGroup>
    </Container>
  );
};

export default ContactList;
