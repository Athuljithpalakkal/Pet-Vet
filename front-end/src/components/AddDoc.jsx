import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDoc = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const url = "http://localhost:7890/api/admin/adddoc";
  const [slot, setSlot] = useState({
    // doctor_name: "",
    // education:"",
    // location: "",
    // about: "",
    // phone: "",
    // image:"",
  });

  function atChange(events) {
    const { name, value } = events.target;
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
    formData.append("image", slot.image);
    formData.append("doctor_name", slot.doctor_name);
    formData.append("education", slot.education);
    formData.append("location", slot.location);
    formData.append("about", slot.about);
    formData.append("phone", slot.phone);

    await axios
      .post(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
          <Form.Label>Qualifications</Form.Label>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddDoc;
