import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";

const EditDoc = () => {
    const { id } = useParams();
    const url = `http://localhost:7890/api/admin/onedoc/${id}`;
    const urlEdit = `http://localhost:7890/api/admin/editdoc/${id}`;
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
  
    const [slot, setSlot] = useState({
      doctor_name: "",
      education: "",
      location: "",
      about: "",
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
      navigate("/alldocs");
    };
  
    return (
      <div>
        <Form onSubmit={atSubmit} className="w-3/5 mx-auto my-5">
          <Form.Group className="mb-3" controlId="formBasicDocName">
            <Form.Label>Enter Doctor's name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet's name"
              value={slot.doctor_name}
              name="doctor_name"
              onChange={atChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDocquali">
            <Form.Label>Enter Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet's name"
              value={slot.education}
              name="education"
              onChange={atChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={slot.location}
              name="location"
              onChange={atChange}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              type="text"
              placeholder="About"
              value={slot.about}
              name="about"
              onChange={atChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
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

export default EditDoc