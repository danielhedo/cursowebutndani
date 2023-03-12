import { Link } from "react-router-dom";

import '../../css/estilomenu.css';

const Nav = (props) => {
  return (
    <nav>
      <div>
    <ul className='menu'>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/promociones">Promociones</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>    
    </ul>
    </div>
    </nav>
  )
}

export default Nav;