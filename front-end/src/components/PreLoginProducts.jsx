import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { MDBIcon } from "mdb-react-ui-kit";

const PreLoginProducts = () => {
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();
  // const url = "http://localhost:7890/api/admin/allproducts";
  const url = "https://pet-vet.onrender.com/api/admin/allproducts";

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

  const AtCart = () => {
    console.log("clicked");
    toast("Please login to add to cart");
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
      <Row xs={1} md={2} lg={3} className="g-4">
        {slots && slots.length > 0 ? (
          slots.map((item) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }} className="ml-auto mr-auto">
                  <Card.Img
                    variant="top"
                    src={`/imagesProduct/${item.image}`}
                  />
                  <Card.Body>
                    <Card.Title>{item.product_name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Button variant="primary" onClick={AtCart}>
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1>No products at the moment</h1>
        )}
      </Row>
    </>
  );
};

export default PreLoginProducts;
