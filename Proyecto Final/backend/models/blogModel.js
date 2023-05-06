var pool = require('./db');



async function getEntradasBlog ()
{    
        var query = 'SELECT id, titulo,img_id from blog';
        var rows = await pool.query(query);
        return rows;   
}

async function getapiEntradasBlog ()
{    
        var query = 'SELECT * from blog order by fec_alta desc';
        var rows = await pool.query(query);
        return rows;   
}


async function insertPost(obj)
{
    try
    {
        var query = "insert into blog set ?";
        var rows = await pool.query(query, [obj]);
        return rows; 

    } catch (error)
    {
        console.log(error);
        throw error;
    }
}


async function deletePostById(id)
{
    var query= 'delete from blog where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}


/*async function getPostById (id)
{    
        var query = 'SELECT * from blog where id = ?';
        var rows = await pool.query(query, [id]);

        return rows[0];   
}*/


async function getPostById(id) {
    var query = 'SELECT * FROM blog WHERE id = ?';
    var rows = await pool.query(query, [id]);

    
    /*Por el motivo que sea la fecha viene con un día menos de base de datos.
    si la fecha en bbdd es de 22/04/2023 al ver rows[0].fec_alta vemos que viene con 21/04/2023TXXXX
    Por lo que es necesario sumar un día */

    const fechaJS = new Date(rows[0].fec_alta);
    fechaJS.setDate(fechaJS.getDate() + 1);
    const fechaISO = fechaJS.toISOString();

    const [fecha] = fechaISO.split('T'); // Me quedo solo con la fecha.

    var fila = {
      id: rows[0].id,
      titulo: rows[0].titulo,
      subtitulo: rows[0].subtitulo,
      cuerpo: rows[0].cuerpo,
      url_imagen: rows[0].url_imagen,
      fec_alta: fecha,
      usuario_alta: rows[0].usuario_alta,
      img_original: rows[0].img_id,
    };
  
    return fila;
  }


  async function editarPostById (obj, id)
  {
    try
        {
            var query = 'UPDATE blog set ? where id = ?';
            var rows = await pool.query (query, [obj, id]);
            return rows;
        }
        catch (error)
        {
            throw error;
        }
  }




module.exports = {getEntradasBlog, insertPost, deletePostById, getPostById, editarPostById, getapiEntradasBlog}

