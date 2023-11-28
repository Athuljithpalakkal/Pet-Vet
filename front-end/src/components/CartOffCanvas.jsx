import React,{useState,useEffect} from 'react';
import axios from "axios";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';
import "./Navbar.css";

const OffCanvasCart = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <button onClick={handleShow}>
        Cart 
      </button>

      <Offcanvas show={show} onHide={handleClose} className="bgCreamFade" placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='blueText'>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvasCart