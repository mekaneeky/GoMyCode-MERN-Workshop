import React from "react";
import { ListGroup, Container } from "react-bootstrap";

import CustomModal from "./CustomModal";
const ContactList = () => {
  const contactArr = [
    {
      name: "Ibrahim",
      phone: "010101",
      email: "email@em.com",
    },
    {
      name: "ahmed",
      phone: "010101",
      email: "email@em.com",
    },
  ];
  const renderList = (list) => {
    return list.map((contact) => {
      return (
        <ListGroup.Item>
          {contact.name}
          <CustomModal
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        </ListGroup.Item>
      );
    });
  };
  return (
    <Container>
      <ListGroup>{renderList(contactArr)}</ListGroup>
    </Container>
  );
};

export default ContactList;
