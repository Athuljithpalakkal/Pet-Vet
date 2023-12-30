import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BookDoc() {
  const { doctor_name } = useParams();
  console.log(doctor_name);
  const token = sessionStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();
  // const url = "http://localhost:7890/api/pet-vet/addpet";
  const url = "https://pet-vet.onrender.com/api/pet-vet/addpet";
  const options = ["Dogs", "Cats", "Birds", "Others"];
  // const [pet, setPet] = useState(options[0]);
  const [slot, setSlot] = useState({
    owner: "",
    petName: "",
    email: "",
    pet: "",
    phone: "",
    doctor_name: doctor_name,
  });

  function atChange(events) {
    const { name, value } = events.target;
    setSlot({ ...slot, [name]: value });
    console.log(slot);
    // setPet(events.target.value);
    // console.log(pet);
  }

  async function atSubmit(events) {
    events.preventDefault();
    await axios
      .post(url, {}, slot, {
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
      <Form className="w-3/5 mx-auto my-5" onSubmit={atSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name of owner</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            onChange={atChange}
            name="owner"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPetName">
          <Form.Label>Enter pet's name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pet's name"
            onChange={atChange}
            name="petname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={atChange}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Choose type of pet</Form.Label>
          {/* <Form.Select id="disabledSelect" name="pet" onChange={atChange}>
            {options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </Form.Select> */}
          <Form.Select
            aria-label="Default select example"
            name="pet"
            onChange={atChange}
          >
            <option>Select pet</option>
            <option value="Dogs">Dog</option>
            <option value="Cats">Cat</option>
            <option value="Birds">Bird</option>
            <option value="Others">Other</option>
          </Form.Select>
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
        <Form.Group className="mb-3" controlId="formBasicdoc">
          <Form.Label>Name of doctor</Form.Label>
          <Form.Control
            type="text"
            onChange={atChange}
            name="doctor_name"
            value={doctor_name}
            disabled
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BookDoc;
