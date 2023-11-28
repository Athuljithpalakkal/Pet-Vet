import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import docImg from "../assets/alt_doc.jpeg";
import { ToastContainer, toast } from "react-toastify";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const PreLoginDocs = () => {
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();
  // const url = "http://localhost:7890/api/admin/alldocs";
  const url = "https://pet-vet.onrender.com/api/admin/alldocs";

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

  const OnBook = () => {
    toast("Please login to book appointments");
    setTimeout(() => {
      navigate("/register");
      // window.location.reload();
    }, 5000);
  };

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
      <MDBRow className="row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
        {slots && slots.length > 0 ? (
          slots.map((item) => {
            return (
              <MDBCol>
                <MDBCard>
                  <MDBCardImage position="top" src={`/images/${item.image}`} />
                  <MDBCardBody>
                    <MDBCardTitle>{item.doctor_name}</MDBCardTitle>
                    <MDBCardText>{item.about}</MDBCardText>
                  </MDBCardBody>
                  <MDBListGroup flush>
                    <MDBListGroupItem>
                      Designation:{item.education}
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      Location:{item.location}
                    </MDBListGroupItem>
                    <MDBListGroupItem>Phone:{item.phone}</MDBListGroupItem>
                  </MDBListGroup>
                  <MDBCardBody className="mx-auto">
                    <button onClick={OnBook}>Book appointments</button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })
        ) : (
          <h1>No Doctors at the moment</h1>
        )}
      </MDBRow>
    </>
  );
};

export default PreLoginDocs;
