import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Test() {
  const [slots, setSlots] = useState([]);
  const url = "http://localhost:7890/api/pet-vet/allpets";

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
    <MDBRow className="row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
      {slots && slots.length > 0 ? (
        slots.map((item) => {
          return (
            <MDBCol>
              <MDBCard>
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                  alt="..."
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>{item.owner}</MDBCardTitle>
                  <MDBCardText>{item.pet}</MDBCardText>
                  <MDBCardText>Doctor :{item.doctor_name}</MDBCardText>
                  <MDBCardText>Pet's Name :{item.petname}</MDBCardText>
                  <MDBCardText>Phone number :{item.phone}</MDBCardText>
                  <MDBCardText>Email :{item.email}</MDBCardText>
                  
                  <div className="flex flex-row justify-around">
                    <MDBBtn
                      className="w-3/5 my-1"
                      href={`/view/${item._id}`}
                    >
                      view
                    </MDBBtn>
                  </div>
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
