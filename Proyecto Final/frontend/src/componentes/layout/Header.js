import { Container } from "react-bootstrap";

const Header = (props) => {
  return (
    <Container
      style={{
        paddingTop: "0%",
        paddingLeft: "0%",
        backgroundColor: "#ffffff",
        alignItems: "left"
      }}
    >
      <a href="index.html">
        <img src={"img/logo.png"} alt="Huellitas"></img>
      </a>
    </Container>
  );
};

export default Header;
