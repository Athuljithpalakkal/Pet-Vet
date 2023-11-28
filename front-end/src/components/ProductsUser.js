import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import axios from "axios";

const ProductsUser = () => {
  const [slots, setSlots] = useState([]);
  const token = sessionStorage.getItem("token");

  const url = "http://localhost:7890/api/admin/allproducts";
  const cartUrl = "http://localhost:7890/api/cart/add";

  const getData = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response);
      const data = response.data.data;
      // console.log(data);
      setSlots(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const cart = async (item) => {
    try {
      await axios.post(cartUrl, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row sm={1} md={2} className="g-2 my-5">
      {slots && slots.length > 0 ? (
        slots.map((item) => {
          return (
            // <div className="w-1/2 ml-auto mr-auto">
            <Col>
              <Card
                style={{ width: "18rem" }}
                className="ml-auto mr-auto bgBlue creamText"
              >
                <Card.Img variant="top" src={`/imagesProduct/${item.image}`} />
                <Card.Body>
                  <Card.Title>{item.product_name}</Card.Title>
                  <Card.Text>{item.details}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                  <Button
                    variant="light"
                    className="bgCream blueText"
                    onClick={()=> cart(item)}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h1>No products</h1>
      )}
    </Row>
  );
};

export default ProductsUser;
