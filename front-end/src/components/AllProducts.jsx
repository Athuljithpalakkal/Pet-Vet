import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBBtn,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

{/* <Card.Img variant="top" src={`/imagesProduct/${item.image}`} />
          <ListGroup variant="flush">
            <ListGroup.Item>{item.product_name}</ListGroup.Item>
            <ListGroup.Item>Type :{item.type}</ListGroup.Item>
            <ListGroup.Item>Details :{item.details}</ListGroup.Item>
            <ListGroup.Item>Price :{item.price}</ListGroup.Item>
          </ListGroup>
          <div className="flex flex-row justify-around">
          <Button className="w-3/5 my-1" variant="outline-primary" as={Link} to={`/oneproduct/${item._id}`}>view</Button>
          </div> */}

const AllProducts = () => {
    const [slots,setSlots] = useState([]);
    const url = 'http://localhost:7890/api/admin/allproducts';

    const getData = async()=>{
      try {
        const response = await axios.get(url);
        // console.log(response);
        const data = response.data.data;
        // console.log(data);
        setSlots(data)
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
      getData();
    },[])

    return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
    {slots && slots.length > 0 ? (
            slots.map((item) => {
              return (
    <MDBCol>
      <MDBCard>
    <MDBCardImage position='top' alt='sorry bruh' src={`/imagesProduct/${item.image}`} />
    <MDBCardBody>
      <MDBCardTitle>{item.product_name}</MDBCardTitle>
      <MDBCardText>
      Type :{item.type}
      </MDBCardText>
    <MDBCardText>
    Details :{item.details}
      </MDBCardText>
      <MDBCardText>
      Price :{item.price}
      </MDBCardText>
      <MDBCardText>
        {item.about}
      </MDBCardText>
    </MDBCardBody>
    <MDBCardBody className='mx-auto'>
      <MDBBtn href={`/oneproduct/${item._id}`}>View</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  

      
      </MDBCol>
        );
      })
    ) : (
      <h1>No Bookings</h1>
    )}
      </MDBRow>

    );
}

export default AllProducts