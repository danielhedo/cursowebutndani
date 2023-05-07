var pool = require('./db');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'SELECT * from usuarios where usuario = ? and password = ? and fec_baja is null limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    }
    catch (error) {
        console.log(error);
    }
}


async function getUsuarios() {
    var query = 'SELECT u.id, u.usuario, tu.des_tipo_usuario, u.fec_baja from usuarios u inner join tipousuario tu on u.cod_tipo_usuario = tu.cod_tipo_usuario ';
    var rows = await pool.query(query);
    return rows;

}


async function insertUser(obj) {
    try {
        obj.password = md5(obj.password);
        var query = "insert into usuarios set ?";
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getTiposUsuario() {
    var query = 'SELECT * FROM tipousuario ';
    var rows = await pool.query(query);
    return rows;
}

async function deleteUser(obj) {
    try {
        var query = 'UPDATE usuarios SET fec_baja = ?, usuario_baja = ? WHERE id = ?';
        var values = [obj.fec_baja, obj.usuario_baja, obj.id];
        var rows = await pool.query(query, values);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;  
    }
}

async function activateUser(id)
{
    var query= 'UPDATE usuarios SET fec_baja = NULL, usuario_baja = NULL WHERE id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}


async function getUserByID (id)
{    
        var query = 'SELECT * from usuarios where id = ?';
        var rows = await pool.query(query, [id]);

        return rows[0];   
}

async function editarUserById (obj, id)
  {
    try
        {
            var query = 'UPDATE usuarios set ? where id = ?';
            var rows = await pool.query (query, [obj, id]);
            return rows;
        }
        catch (error)
        {
            throw error;
        }
  }  


module.exports = { getUserByUsernameAndPassword, getUsuarios, insertUser, getTiposUsuario, deleteUser, activateUser,getUserByID, editarUserById }