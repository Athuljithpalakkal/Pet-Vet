import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();
    const url = `http://localhost:7890/api/admin/oneproduct/${id}`;
    const urlEdit = `http://localhost:7890/api/admin/editproduct/${id}`;
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
  
    const [slot, setSlot] = useState({
      product_name: "",
      type: "",
      details: "",
      price: "",
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
      navigate("/allproducts");
    };
  
    return (
      <div>
        <Form onSubmit={atSubmit} className="w-3/5 mx-auto my-5" encType="multipart/form-data">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={slot.product_name}
              name="product_name"
              onChange={atChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProductType">
            <Form.Label>Type of product</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product type"
              value={slot.type}
              name="type"
              onChange={atChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              type="text"
              value={slot.details}
              name="details"
              onChange={atChange}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              value={slot.price}
              name="price"
              onChange={atChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicimage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Price"
              value={slot.image}
              name="image"
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

export default EditProduct