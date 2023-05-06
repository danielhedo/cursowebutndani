import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from '../componentes/blog/blogItem';
import "../css/estiloBlog.css";

const BlogPage = (props) => {

  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);


  useEffect(() => {
    const cargarBlog = async () => {
      setLoading(true);
      //const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
      const response = await axios.get('http://localhost:3000/api/blog');
      setBlog(response.data);
      setLoading(false);
    };

    cargarBlog();

  }, []);
  return (

    <div className="paginageneral contentText">
      <h2>Blog</h2>
      {
        loading ? (
          <p>Cargando...</p>
        ) : (
              blog.map(item => <BlogItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo}
                fec_alta={item.fec_alta} usuario_alta={item.usuario_alta} />)

        )
      }
    </div>
  )

};

export default BlogPage;