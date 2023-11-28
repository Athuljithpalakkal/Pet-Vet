import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../assets/veterinary_3296767.png";
import {FiMenu} from "react-icons/fi";
import "./Navbar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import OffCanvasCart from "./CartOffCanvas";
import OffCanvas from "./OffCanvas";


function Navbar1() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  // const token = localStorage.getItem("token");
  const role = sessionStorage.getItem("role");
  // const role = localStorage.getItem("role");
  console.log(role);
  const logOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };
  const [showNavText, setShowNavText] = useState(false);


  return (


    <MDBNavbar expand="lg" light style={{backgroundColor:"#455979"}} className="px-5">
      <MDBContainer fluid>
      <Link to="/" >
        <MDBNavbarBrand className="subpixel-antialiased"><img src={logo} width={40} height={40}/><span className="creamText">PET-VET</span></MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <FiMenu className="creamText"/>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 creamText ml-5">
            {/* admin section  */}
            {role == 1 ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/bookings" className="creamText">Appoitments</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink>
                  <Link to="/addproduct" className="creamText">Add products</Link>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/adddoc" className="creamText">Add Doctors</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/allproducts" className="creamText">Products</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/alldocs" className="creamText">Doctors</Link></MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                  <MDBNavbarLink href="/productuser">Products</MDBNavbarLink>
                </MDBNavbarItem> */}
              </>
            ) : (
              ""
            )}
            {/* user section */}
            {role == 2 ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/doctors/:id" className="creamText">Doctors</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/productuser" className="creamText">Products</Link></MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              ""
            )}
            {/* doctor section  */}
            {role == 3 ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="docBookings" className="creamText">Appoitments</Link></MDBNavbarLink>
                </MDBNavbarItem>
                {/* <MDBNavbarItem>
                  <MDBNavbarLink href="#">Products</MDBNavbarLink>
                </MDBNavbarItem> */}
              </>
            ) : (
              ""
            )}
            {/* register logout section */}
            {token == null ? (
              <>
              <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/prelogindocs" className="creamText">Doctors</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/preloginproducts" className="creamText">Products</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                <MDBNavbarLink><Link to="/login" className="creamText">Login</Link></MDBNavbarLink>
                  
                </MDBNavbarItem>

                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/register" className="creamText">Register</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/about" className="creamText">About</Link></MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink><Link to="/contact" className="creamText">Contact Us</Link></MDBNavbarLink>
                </MDBNavbarItem>
              </>
            ) : (
              <>
              <MDBNavbarItem>
                <MDBNavbarLink onClick={logOut} className="creamText">Log out</MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
              <MDBNavbarLink><Link to="/userprofile" className="creamText">My profile</Link></MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink className="creamText"><OffCanvas/></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="creamText"><OffCanvasCart/></MDBNavbarLink>
            </MDBNavbarItem>
            </>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar1;
