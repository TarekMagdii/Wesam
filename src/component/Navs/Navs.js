import React from "react";
import "./Navs.css";
import Logo from "../../Images/Logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbarr() {
  return (
    <Navbar fixed="top" expand="lg">
      <Container>
        <div className="logo" href="#home">
          <img src={Logo} alt="" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> الرئيسية</Nav.Link>
            <Nav.Link> من نحن </Nav.Link>
            <Nav.Link> خدماتنا </Nav.Link>
            <Nav.Link> تخصصاتنا</Nav.Link>
            <Nav.Link> اطلب خدمه</Nav.Link>
            <Nav.Link> اتصل بنا</Nav.Link>

            <div className="nav-btn">
              <button> العربيه</button>{" "}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
