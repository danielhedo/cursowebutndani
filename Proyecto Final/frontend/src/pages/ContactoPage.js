import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../css/estiloContacto.css";

const ContactoPage = (props) => {
  return (
    <div className="paginageneral contentText">
      <h2>Contacto</h2>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelf">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="telf" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAsunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control placeholder="Información sobre un servicio" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridConsulta">
          <Form.Label>Consulta</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      <div className="text-center diviconos">
        <ul className="listaiconos list-unstyled">
          <li>
            <a
              className="enlacesindecoracion"
              href="https://goo.gl/maps/rrLXbygveGzqHykt8"
              target="_blank" rel='noopener noreferrer'>
              <i className="fas fa-map-marker-alt mt-3 fa-2x"></i>
              <p>Calle Gran Vía,1 Madrid</p>
            </a>
          </li>

          <li>
            <a className="enlacesindecoracion" href="tel:+34915554422">
              <i className="fas fa-phone mt-3 fa-2x"></i>
              <p>91 555 44 22</p>
            </a>
          </li>

          <li>
            <a
              className="enlacesindecoracion"
              href="mailto:vethuellitas@vet.com">            
              <i className="fas fa-envelope mt-3 fa-2x"></i>
              <p>vethuellitas@vet.com</p>
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default ContactoPage;
