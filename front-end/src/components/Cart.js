import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/esm/Button";

const Cart = () => {
  const [slots, setSlots] = useState([]);
  const [subtotal, setSubtotal] = useState([]);
  const token = sessionStorage.getItem("token");

  const url = "http://localhost:7890/api/cart/view";
  const incUrl = `http://localhost:7890/api/cart/counterup`;
  var decUrl = `http://localhost:7890/api/cart/counterdown/`;

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response);
      const data = response.data.data;
      // console.log(data);
      setSlots(data);
    } catch (error) {
      console.log(error);
    }
  };

  const increment = async (id) => {
    axios.post(`http://localhost:7890/api/cart/counterup/${id}`);
    window.location.reload();
  };

  const decrement = async (id) => {
    axios.post(decUrl + id);
    window.location.reload();
  };

  const initialValue = 0;
  const total = slots.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    initialValue
  );
  console.log(total);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {slots && slots.length > 0 ? (
        slots.map((item) => {
          const subtotal = item.quantity * item.price;
          return (
            <MDBCard className="w-75 my-2 bgCream">
              <MDBCardBody>
                <MDBCardTitle>{item.product_name}</MDBCardTitle>
                <MDBCardText>Price :{item.price}</MDBCardText>
                <Button onClick={() => increment(item._id)} className="bgBlue">+</Button>
                {item.quantity}
                <Button onClick={() => decrement(item._id)} className="bgBlue">-</Button>
                <MDBCardText>Subtotal :{subtotal}</MDBCardText>

                <MDBBtn href="#" className="bgBlue">Remove from cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          );
        })
      ) : (
        <h1>Cart Empty</h1>
      )}

      <MDBCard className="w-75 bgCream">
        <MDBCardBody>
          <MDBCardTitle>Total items in cart :</MDBCardTitle>
          <MDBCardText>Total Price :{total}</MDBCardText>
          <MDBBtn href="#" className="bgBlue">Checkout</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default Cart;
