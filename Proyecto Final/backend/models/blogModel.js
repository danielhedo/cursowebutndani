var pool = require('./db');

async function getEntradasBlog ()
{    
        var query = 'SELECT id, titulo from blog';
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



module.exports = {getEntradasBlog, insertPost}

