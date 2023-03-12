
import React from "react";

import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <Container
      style={{        
        backgroundColor: "#ffffff",
        alignItems: "left",        
      }}
    >
      <a href="/">
        <img src={"img/logo.png"} alt="Huellitas"></img>
      </a>
    </Container>
  );
};

export default Header;
