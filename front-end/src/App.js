import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar"
import Home from "./components/Home";
import Register from "./components/Register";
import { Login } from "./components/Login";
import BookDoc from "./components/BookDoc";
import { Doctors } from "./components/Doctors";
import Bookings from "./components/Bookings";
import EditBooking from "./components/EditBooking";
import { SingleBooking } from "./components/SinlgeBooking";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import AddDoc from "./components/AddDoc";
import AddProduct from "./components/AddProduct";
import Alldoctors from "./components/Alldoctors";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import SingleDoc from "./components/SingleDoc";
import EditDoc from "./components/EditDoc";
import EditProduct from "./components/EditProduct";
import ProductsUser from "./components/ProductsUser";
import UserProfile from "./components/UserProfile";
import DocRegister from "./components/DocRegister";
import BookingForDocs from "./components/BookingForDocs";
import PreLoginDocs from "./components/PreLoginDocs";
import PreLoginProducts from "./components/PreLoginProducts";
import About from "./components/About";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bgCream">
      <Router>
        <Navbar1 />
        {/* <Nav2/> */}
        {/* <ProductsUser/> */}
        <div className="mx-5 min-h-screen">
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/book/:doctor_name" element={<BookDoc />} />
          <Route path="/doctors/:id" element={<Doctors />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<EditBooking />} />
          <Route path="/view/:id" element={<SingleBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adddoc" element={<AddDoc/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/alldocs" element={<Alldoctors/>} />
          <Route path="/allproducts" element={<AllProducts/>} />
          <Route path="/oneproduct/:id" element={<SingleProduct/>} />
          <Route path="/onedoc/:id" element={<SingleDoc/>} />
          <Route path="/editdoc/:id" element={<EditDoc/>} />
          <Route path="/editproduct/:id" element={<EditProduct/>} />
          <Route path="/userprofile" element={<UserProfile/>} />
          <Route path="/productuser" element={<ProductsUser/>} />
          <Route path="/doc-reg" element={<DocRegister/>} />
          <Route path="/docBookings" element={<BookingForDocs/>} />
          <Route path="/prelogindocs" element={<PreLoginDocs/>} />
          <Route path="/preloginproducts" element={<PreLoginProducts/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          

        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
