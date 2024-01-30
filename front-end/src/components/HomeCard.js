import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

const HomeCard = () => {
  return (
    <div>
      <div className="flex flex-col justify-center">
        <h2 className="mx-auto my-5 blueText">Our Services</h2>

        <div data-aos="fade-up-right">
          <Card className="text-center w-3/5 mx-auto my-3 creamText bgBlue">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Medical Clinic</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="light" className="bgCream blueText">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* card 2 */}
        <Card className="text-center w-3/5 mx-auto my-3 creamText bgBlue">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Pet Grooming</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="light" className="bgCream blueText">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
        {/* card 3 */}
        <Card className="text-center w-3/5 mx-auto my-3 creamText bgBlue">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Pet Essentials</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="light" className="bgCream blueText">
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeCard;
