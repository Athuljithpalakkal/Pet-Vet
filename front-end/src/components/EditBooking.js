import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";


function EditBooking() {
  const { id } = useParams();
  const url = `http://localhost:7890/api/pet-vet/onepet/${id}`;
  const urlEdit = `http://localhost:7890/api/pet-vet/editpet/${id}`;
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const [slot, setSlot] = useState({
    owner: "",
    petName: "",
    email: "",
    phone: "",
  });
  const getEditData = async () => {
    try {
      const response = await axios(url);
      const data = response.data.data;
      setSlot(data);
      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEditData();
  }, []);

  function atChange(events) {
    const { name, value } = events.target;
    setSlot({ ...slot, [name]: value });
    console.log(slot);
  }

  // var index = slots.map((e)=> e.id).indexOf(id);

  const atSubmit = async (events) => {
    events.preventDefault();
    await axios.post(urlEdit, slot, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    navigate("/slots");
  };

  return (
    <div>
      <Form onSubmit={atSubmit} className="w-3/5 mx-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name of owner</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={slot.owner}
            name="owner"
            onChange={atChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPetName">
          <Form.Label>Enter pet's name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pet's name"
            value={slot.petname}
            name="petname"
            onChange={atChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={slot.email}
            name="email"
            onChange={atChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Choose type of pet</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Dogs</option>
            <option>Cats</option>
            <option>Birds</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone number"
            value={slot.phone}
            name="phone"
            onChange={atChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EditBooking;
