import { BrowserRouter, Routes,Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import "./App.css";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import PromocionesPage from './pages/PromocionesPage';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <div className="App" >          
      <Header />      
      <BrowserRouter>
      <Nav />
      <div className="d-block w-100">      
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
src={"img/banners/banner1.webp"} />          
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={"img/banners/banner2.webp"} />           
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={"img/banners/banner3.webp"} />           
        </Carousel.Item>
      </Carousel>
    </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/promociones" element={<PromocionesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
      </BrowserRouter>
      
      
        <Footer />        
    </div>
  );
}

export default App;
