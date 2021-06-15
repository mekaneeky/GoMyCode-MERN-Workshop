import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Container } from "react-bootstrap";
import CustomModal from "./CustomModal";

const ContactList = () => {
  const [contacts, setContact] = useState([]);

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
