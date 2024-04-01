import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className="bg-info">
      <Container >
        <h1 className="text-center py-5 text-success">
          Frequently Asked Questions
        </h1>
      </Container>
    </header>
  );
};

export default Header;
