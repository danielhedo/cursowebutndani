import React from "react";
import '../../css/estilofooter.css';

const Footer = (props) => {
    return (
    <div className="footerlinks">   
    <ul className='listabaja'>
      <li><a href="#" title="Aviso legal">Aviso legal</a></li>
      <li><a href="#" title="Política de privacidad">Política de privacidad</a></li>
      <li><a href="#" title="Condiciones Generales">Condiciones Generales</a></li>
      <li><a href="#" title="Política de Cookies">Política de Cookies</a></li>
    </ul>
    </div>
      )  ;
  };
  
  export default Footer;