import React from "react";
import { Container } from "react-bootstrap";
import './Header.scss';
const Header = () => {
  return (
    <header className=" ">
      <Container >
        <h1 className="text-center py-5  ">
          Random Users with accordion and pagination
        </h1>
      </Container>
    </header>
  );
};

export default Header;
