import React from "react";
import Table from "react-bootstrap/Table";

const PromocionesPage = (props) => {
  return (
    <div className="paginageneral contentText">
      <h2>Promociones</h2>
      <p>
        En Huellitas somos conscientes de las diferentes situaciones económicas
        que existen y por ello hemos creado unas tablas de precios ajustados y
        descuentos especiales, sin renunciar a la calidad del servicio.
      </p>

      <Table className="table">
        <thead>
          <tr>
            <th scope="col">Descuento</th>
            <th scope="col">Máx. descuento</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">10%</th>
            <td class="table-active">30€</td>
            <td>
              Descuento sobre los servicios (excluidos piensos y tratamientos
              medicamentosos no inyectables).
            </td>
          </tr>
          <tr>
            <th scope="row">15%</th>
            <td class="table-active">50€</td>
            <td>Personas con 3 mascotas o más atendidas en nuestro centro.</td>
          </tr>
          <tr>
            <th scope="row">20%</th>
            <td class="table-active">65€</td>
            <td>
              Personas con algún tipo de minusvalía o en riesgo de exclusión
              social que puedan acreditarlo.
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        También disponemos de la posibilidad de fraccionar los pagos. Se puede
        hacer con tarjeta de crédito o débito habitual. No se necesitan nóminas
        ni papeleo y te permite fraccionar pagos entre{" "}
        <span className="textodestacado">59€ y 1000€ hasta en 12 meses</span>.
        Puedes elegir el número de cuotas, la carencia y conocerás el coste
        exacto por recibo ya que recibirás un SMS en tu móvil con todas las
        condiciones.
      </p>
      <p>
        Con esto queremos transmitir que si acudes a nuestra clínica, tenemos
        facilidades de pago para vuestras mascotas. Es un sistema bastante
        sencillo, sólo necesitaríamos tú teléfono móvil, DNI y con el TPV se
        hace el procedimiento, ¡es muy rápido!
      </p>
    </div>
  );
};

export default PromocionesPage;
