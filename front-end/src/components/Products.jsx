import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export const Products = () => {
  const [slots, setSlots] = useState([]);
  const url = "http://localhost:7890/api/admin/allproducts";

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

  return (
    <div className="grid-cols-2">
      {slots && slots.length > 0 ? (
        slots.map((item) => {
          return (
            <div className="w-1/2 mx-auto my-3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={`/imagesProduct/${item.image}`} />
                <ListGroup variant="flush">
                  <ListGroup.Item>{item.product_name}</ListGroup.Item>
                  <ListGroup.Item>Type :{item.type}</ListGroup.Item>
                  <ListGroup.Item>Details :{item.details}</ListGroup.Item>
                  <ListGroup.Item>Price :{item.price}</ListGroup.Item>
                </ListGroup>
                <div className="flex flex-row justify-around">
                  <Button
                    className="w-3/5 my-1"
                    variant="outline-primary"
                    as={Link}
                    to="/"
                  >
                    Home
                  </Button>
                  <Button
                    className="w-3/5 my-1"
                    variant="outline-primary"
                    as={Link}
                    to={`/oneproduct/${item._id}`}
                  >
                    view
                  </Button>
                </div>
              </Card>
            </div>
          );
        })
      ) : (
        <h1>No Bookings</h1>
      )}
    </div>
  );
};
