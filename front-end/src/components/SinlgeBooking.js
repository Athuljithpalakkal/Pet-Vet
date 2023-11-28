import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


export const SingleBooking = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [slot, setSlot] = useState([]);
  const url = `http://localhost:7890/api/pet-vet/onepet/${id}`;
  const urlDelete = `http://localhost:7890/api/pet-vet/dltpet/${id}`;
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

  const handleDelete = async(id)=>{
    const response = await axios(urlDelete,{
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
    toast("Booking deleted Successfully");
          setTimeout(() => {
            navigate("/bookings")
            window.location.reload();
          }, 1000);
    console.log(response);
    
}

  return (
      <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    <div className="w-4/5 mx-auto my-3">
      <Card style={{ width: "22rem" }} className="mx-auto">
        <ListGroup variant="flush">
          <ListGroup.Item>Owner :{slot.owner}</ListGroup.Item>
          <ListGroup.Item>Pet's Name :{slot.petname}</ListGroup.Item>
          <ListGroup.Item>Email :{slot.email}</ListGroup.Item>
          <ListGroup.Item>Phone :{slot.phone}</ListGroup.Item>
          <ListGroup.Item>{slot.pet}</ListGroup.Item>
          <ListGroup.Item>Doctor :{slot.doctor_name}</ListGroup.Item>
          {/* <ListGroup.Item>Phone :{item._id}</ListGroup.Item> */}
        </ListGroup>
        <div className="flex flex-row justify-around">
          <Button
            className="w-2/5 my-1"
            variant="outline-success"
            as={Link}
            to={`/edit/${slot._id}`}
          >
            Edit
          </Button>

          <Button
            className="w-2/5 my-1"
            variant="outline-danger"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </div>
      </Card>
    </div>
    </>
  );
};
