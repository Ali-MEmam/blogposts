import React, { FC } from "react";
import { Container, Navbar } from "react-bootstrap";

const NavbarBlack: FC = () => (
  <Navbar bg="light">
    <Container fluid>
      <Navbar.Brand>Blog Posts</Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavbarBlack;
