import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const url = "http://localhost:7890/api/register";
  const [slot, setSlot] = useState({
    name: "",
    phone: "",
    address: "",
    username: "",
    password: "",
  });

  function atChange(events) {
    const { name, value } = events.target;
    // const  name = events.target.name
    // const  value = events.target.value
    setSlot({ ...slot, [name]: value });
    console.log(slot);
  }

  async function atSubmit(events) {
    events.preventDefault();
    await axios
      .post(url, slot)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Form onSubmit={atSubmit} className="w-3/5 mx-auto my-5">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={atChange}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>User Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          onChange={atChange}
          name="address"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Phone number"
          onChange={atChange}
          name="phone"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          onChange={atChange}
          name="username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={atChange}
          name="password"
        />
      </Form.Group>
      <div className="flex justify-around">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div>
          <a href="/doc-reg">Register as a doctor?</a>
        </div>
      </div>
    </Form>
  );
}

export default Register;
