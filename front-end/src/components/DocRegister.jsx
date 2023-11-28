import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DocRegister = () => {
  const navigate = useNavigate();
  const url = "http://localhost:7890/api/doc-reg";
  const [slot, setSlot] = useState({
    doctor_name: "",
    location: "",
    about: "",
    phone: "",
    education: "",
    username: "",
    password: "",
    role: 3,
  });

  function atChange(events) {
    const { name, value } = events.target;
    // const  name = events.target.name
    // const  value = events.target.value
    setSlot({ ...slot, [name]: value });
    console.log(slot);
  }
  function atChangeImg(events) {
    setSlot({ ...slot, image: events.target.files[0] });
    console.log(slot.image);
  }

  async function atSubmit(events) {
    events.preventDefault();
    const formData = new FormData();
    formData.append("doctor_name", slot.doctor_name);
    formData.append("location", slot.loaction);
    formData.append("about", slot.about);
    formData.append("phone", slot.phone);
    formData.append("education", slot.education);
    formData.append("username", slot.username);
    formData.append("password", slot.password);
    formData.append("image", slot.image);

    await axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div>
      <Form
        className="w-3/5 mx-auto my-5"
        onSubmit={atSubmit}
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name of Doctor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={atChange}
            name="doctor_name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicQuali">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter qualifications"
            onChange={atChange}
            name="education"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location"
            onChange={atChange}
            name="location"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAbout">
          <Form.Label>About</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter About"
            onChange={atChange}
            name="about"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNum">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone number"
            onChange={atChange}
            name="phone"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Add photo</Form.Label>
          <Form.Control
            type="file"
            accept=".png,.jpg,.jpeg"
            name="image"
            onChange={atChangeImg}
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DocRegister;
