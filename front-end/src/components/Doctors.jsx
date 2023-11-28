import React,{useState,useEffect} from 'react';
import axios from "axios";
import Badge from "react-bootstrap/Badge";
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
  MDBCol
} from 'mdb-react-ui-kit';

export const Doctors = () => {
  const [slots,setSlots] = useState([]);
    const url = 'http://localhost:7890/api/admin/alldocs';

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
      <MDBCard className='bgBlue creamText'>
    <MDBCardImage position='top' alt='sorry bruh' src={`/images/${item.image}`} />
    <MDBCardBody>
      <MDBCardTitle>{item.doctor_name}</MDBCardTitle>
      <MDBCardText>
        {item.about}
      </MDBCardText>
    </MDBCardBody>
    <MDBListGroup flush>
      <MDBListGroupItem className='bgCream blueText'>Qualification:{item.education}</MDBListGroupItem>
      <MDBListGroupItem className='bgCream blueText'>Location:{item.location}</MDBListGroupItem>
      <MDBListGroupItem className='bgCream blueText'>Phone:{item.phone}</MDBListGroupItem>
    </MDBListGroup>
    <MDBCardBody>
      <Badge className='brCream'>
      <MDBCardLink href={`/book/${item.doctor_name}`}  className='creamText mx-auto'>Book appointment</MDBCardLink>
      </Badge>
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
