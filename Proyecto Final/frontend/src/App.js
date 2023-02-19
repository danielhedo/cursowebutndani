import "./App.css";
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f3f3f3" }}>
      <div
        style={{
          paddingLeft: "17%",
          paddingRight: "17%",
          paddingTop: "1%",
          paddingBottom: "1%",
        }}>
      <Container>
      <Header></Header>
      </Container>
        <Nav></Nav>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
