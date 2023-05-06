import React, { useState } from 'react';

const BlogItem = (props) => {
  const { title, subtitle, imagen, body, url_imagen, fec_alta, usuario_alta } = props;
  const [showMore, setShowMore] = useState(false);
  const displayBody = showMore ? body : body.length > 250 ? body.slice(0, 250) + '...' : body;
  const showMoreText = showMore ? 'Ver menos' : 'Ver más';

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="row" style={{ marginBottom: '20px' }}>
      {imagen && (
        <div className="col-2">
          <img src={imagen} className="imagen-blog" />
        </div>
      )}
      <div className={imagen ? "col-9 tituloBlog" : "col-12 tituloBlog"}>
        <h4>{title}</h4>
        <h6>{subtitle}</h6>
      </div>
      <div className="row contentblog" style={{ marginBottom: '20px' }} dangerouslySetInnerHTML={{ __html: displayBody }} />
      {body.length > 250 && (
        <a className='boton-ver' style={{ marginTop: '10px' }} onClick={handleShowMore}>
          {showMoreText}
        </a>
      )}
      <div>
        <p className='espacio-sup'><strong>Fecha de subida:</strong> {fec_alta}</p>
        <p className='espacio-sup'><strong>Creado por:</strong> {usuario_alta}</p>
        <hr />
      </div>
    </div>
  );
};

export default BlogItem;