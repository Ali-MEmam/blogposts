import React, { FC } from "react";
import { Container, Navbar } from "react-bootstrap";

const NavbarBlack: FC = () => (
  <Navbar bg="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img
          src="./logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavbarBlack;
