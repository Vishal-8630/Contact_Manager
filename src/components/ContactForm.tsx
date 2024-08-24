import React, { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Action, Contact } from "../contactsReducer";

interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
  toggleModal?: () => void;
  dataToEdit?: Contact | undefined;
}

const ContactForm: FC<ContactFormProps> = ({
  dispatch,
  dataToEdit,
  toggleModal,
}) => {
  const [contact, setContact] = useState({
    firstName: dataToEdit?.firstName ? dataToEdit.firstName : "",
    lastName: dataToEdit?.lastName ? dataToEdit.lastName : "",
    phone: dataToEdit?.phone ? dataToEdit.phone : "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const hanldeOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dataToEdit) {
      dispatch({
        type: "ADD_CONTACT",
        payload: {
          id: Date.now(),
          ...contact,
        },
      });
      setContact({
        firstName: '',
        lastName: '',
        phone: ''
      })
    } else {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: {
          id: dataToEdit.id,
          updates: {
            id: Date.now(),
            ...contact
          }
        }
      })
      if (toggleModal) {
        toggleModal();
      }
    }
  };

  return (
    <Form onSubmit={hanldeOnSubmit} className="contact-form">
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          className="firstName"
          name="firstName"
          value={contact.firstName}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          className="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          className="phone"
          name="phone"
          value={contact.phone}
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Button variant="primary" type="submit" className="submit-btn">
          {dataToEdit ? "Update Contact" : "Add Contact"}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
