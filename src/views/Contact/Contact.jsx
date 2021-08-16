import React, { useState } from "react";
import {firebase} from "../../services/firebase";
import { Title, ContainerContact, Input, Button, InputMessage } from "./style";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleOnChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const response = firebase
      .firestore()
      .collection("contact")
      .add({
        name,
        email,
        phone,
        message,
      })
      .then(() => setName(""), setEmail(""), setPhone(""), setMessage(""));
  };
  return (
    <form onSubmit={onSubmit}>
      <Title>CONTACT</Title>
      <ContainerContact>
        <h2>PERSONAL INFO</h2>
        <h3>Name</h3>
        <Input
          type="text"
          placeholder="Full name*"
          value={name}
          name="name"
          onChange={handleOnChangeName}
          required
        />
        <h3>Email</h3>
        <Input
          type="text"
          placeholder="Email*"
          value={email}
          name="email"
          onChange={handleOnChangeEmail}
          required
        />
        <h3>Phone</h3>
        <Input
          type="text"
          placeholder="Phone"
          value={phone}
          name="phone"
          onChange={handleOnChangePhone}
          required
        />
        <h3>Message</h3>
        <InputMessage
          type="text"
          value={message}
          name="message"
          onChange={handleOnChangeMessage}
          required
        />
        <Button type="submit">Submit</Button>
      </ContainerContact>
    </form>
  );
}
export default Contact;
