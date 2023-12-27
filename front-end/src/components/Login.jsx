import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  // const url = "http://localhost:7890/api/login";
  const url = "https://pet-vet.onrender.com/api/login";
  const [slot, setSlot] = useState({
    username: "",
    password: "",
  });

  function atChange(events) {
    const { name, value } = events.target;
    setSlot({ ...slot, [name]: value });
    console.log(slot);
  }

  async function atSubmit(events) {
    events.preventDefault();
    await axios
      .post(url, slot)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.token);
        sessionStorage.setItem("token", res.data.token);
        // localStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.userRole);
        // localStorage.setItem("role", res.data.userRole);
        if (res.status === 200) {
          toast("Login Successful");
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 3000);
        }
      })
      .catch((error) => {
        console.error(error);
        toast("Login failed");
        toast("Verify username and password");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      });
  }

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
      <Form onSubmit={atSubmit} className="w-3/5 mx-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={atChange}
            name="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={atChange}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
