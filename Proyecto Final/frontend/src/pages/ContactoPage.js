import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";
import "../css/estiloContacto.css";
import axios from "axios";

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm)
    }

  }

  return (
    <div className="paginageneral contentText">
      <h2>Contacto</h2>

      <Form action="/contacto" method="post" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelf">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="number" name="telefono" value={formData.telefono} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAsunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control placeholder="Información sobre un servicio" type="text" name="asunto" value={formData.asunto} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridConsulta">
          <Form.Label>Consulta</Form.Label>
          <Form.Control as="textarea" rows={3} name="mensaje" value={formData.mensaje} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {sending ? (
        <div className="d-flex align-items-center">
          <span className="me-2">Enviando... </span>
          <Spinner animation="border" variant="primary" size="sm" />
        </div>
      ) : null}
      {msg ? <span className="me-2">{msg}</span> : null}

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
