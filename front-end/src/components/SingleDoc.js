import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SingleDoc = () => {
    const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [slot, setSlot] = useState([]);
  const url = `http://localhost:7890/api/admin/onedoc/${id}`;
  const urlDelete = `http://localhost:7890/api/admin/dltdoc/${id}`;
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
    const response = await axios.delete(urlDelete,{
      headers: {
        Authorization:`Bearer ${token}`
      }
    });
    console.log(response);
    navigate("/alldocs")
}
  return (
    <div className="w-4/5 mx-auto my-3">
      <Card style={{ width: "22rem" }} className="mx-auto">
        <ListGroup variant="flush">
          <ListGroup.Item>Name :{slot.doctor_name}</ListGroup.Item>
          <ListGroup.Item>Qualification :{slot.education}</ListGroup.Item>
          <ListGroup.Item>Location :{slot.location}</ListGroup.Item>
          <ListGroup.Item>About :{slot.about}</ListGroup.Item>
          <ListGroup.Item>Phone :{slot.phone}</ListGroup.Item>
          {/* <ListGroup.Item>Phone :{item._id}</ListGroup.Item> */}
        </ListGroup>
        <div className="flex flex-row justify-around">
          <Button
            className="w-2/5 my-1"
            variant="outline-success"
            as={Link}
            to={`/editdoc/${slot._id}`}
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
  );
}

export default SingleDoc