import { FC } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/NavBar";
const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
