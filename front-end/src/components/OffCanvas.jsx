import React from 'react';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import UserProfile from './UserProfile';
import "./Navbar.css";

const OffCanvas = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>
        Profile 
      </button>

      <Offcanvas show={show} onHide={handleClose} className="bgCreamFade" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='blueText'>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <UserProfile/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvas