import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const url = "http://localhost:7890/api/admin/addproduct";
  console.log(token);
  const [slot, setSlot] = useState({
    // product_name: "",
    // type: "",
    // details: "",
    // price: "",
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

  const atSubmit = (events) => {
    events.preventDefault();
    const formData = new FormData();
    formData.append("image", slot.image);
    formData.append("product_name", slot.product_name);
    formData.append("type", slot.type);
    formData.append("details", slot.details);
    formData.append("price", slot.price);
    console.log(formData);

    axios
      .post("http://localhost:7890/api/admin/addproduct", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("clicked");
  };

  return (
    <div>
      <Form
        className="w-3/5 mx-auto my-5"
        onSubmit={atSubmit}
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name of product</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            onChange={atChange}
            name="product_name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictype">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product type"
            onChange={atChange}
            name="type"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAbout">
          <Form.Label>Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Details"
            onChange={atChange}
            name="details"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            onChange={atChange}
            name="price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPicture">
          <Form.Label>Photos</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter price"
            onChange={atChangeImg}
            name="image"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
