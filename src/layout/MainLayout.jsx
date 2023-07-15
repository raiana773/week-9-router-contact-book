import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
