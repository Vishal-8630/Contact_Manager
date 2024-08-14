import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm: FC = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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
    console.log(contact);
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
        <Button variant="primary" className="submit-btn" type="submit">
          Add Contact
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
