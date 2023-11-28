import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";

export const SelectedProduct = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();
    const [slot, setSlot] = useState([]);
    const url = `http://localhost:7890/api/admin/oneproduct/${id}`;
    const urlDelete = `http://localhost:7890/api/admin/dltproduct/${id}`;
    const token = sessionStorage.getItem('token');
  
    const getSingleData = async () => {
      try {
        const response = await axios(url);
        console.log(response);
        const data = response.data.data;
        setSlot(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getSingleData();
    }, []);
  
    const handleItem = async(id)=>{
      const response = await axios(urlDelete,{
        headers: {
          Authorization:`Bearer ${token}`
        }
      });
      console.log(response);
      navigate("/slots")
  }
    return (
      <div className="w-4/5 mx-auto my-3">
      <Card style={{ width: "22rem" }} className="mx-auto">
      <Card.Img variant="top" src={`/imagesProduct/${slot.image}`} />
        <ListGroup variant="flush">
          <ListGroup.Item>Product :{slot.product_name}</ListGroup.Item>
          <ListGroup.Item>Type :{slot.type}</ListGroup.Item>
          <ListGroup.Item>Details :{slot.details}</ListGroup.Item>
          <ListGroup.Item>Price :{slot.price}</ListGroup.Item>
          {/* <ListGroup.Item>Phone :{item._id}</ListGroup.Item> */}
        </ListGroup>
        <div className="flex flex-row justify-around">
          <Button
            className="w-2/5 my-1"
            variant="outline-success"
            as={Link}
            to="/"
          >
            Add to wish list
          </Button>
  
          <Button
            className="w-2/5 my-1"
            variant="outline-danger"
            onClick={() => handleItem(id)}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
}
