import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Navbar.css';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


const UserProfile = () => {
  const [slots, setSlots] = useState([]);
  const token = sessionStorage.getItem("token");
  const url = "http://localhost:7890/api/user/userprofile";

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      const data = response.data.data[0];
      console.log(data);
      setSlots(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  },[])
  return (
    <MDBCard style={{ maxWidth: '540px' }} className='mx-auto my-5 bgCream blueText'>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          {/* <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid /> */}
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{slots.name}</MDBCardTitle>
            <MDBCardText>User name :{slots.username}</MDBCardText>
            <MDBCardText>
              Address :{slots.address}
            </MDBCardText>
            <MDBCardText>
              <small>Phone number :{slots.phone}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default UserProfile