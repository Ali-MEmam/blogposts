import { FC } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, Outlet } from "react-router-dom";
const Layout: FC = () => {
  return <Outlet />;
};

export default Layout;
