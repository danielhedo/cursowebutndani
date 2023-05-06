var express = require('express');
var router = express.Router();
var blogModel = require('./../models/blogModel');
var cloudinary = require('cloudinary').v2;


router.get('/blog', async function (req, res, next) {
    let blog = await blogModel.getapiEntradasBlog();

    blog = blog.map(blog => {

        if (blog.img_id) {
            const imagen = cloudinary.url(blog.img_id,
                {
                    //width: 960,
                    //height: 200,
                    crop: 'fill'
                });
            return {
                ...blog,
                imagen,
                fec_alta: new Date(blog.fec_alta).toLocaleDateString('es-ES')
            }
        } else {
            return {
                ...blog,
                imagen: '',
                fec_alta: new Date(blog.fec_alta).toLocaleDateString('es-ES'),
            }
        }
    });
    res.json(blog);
});
module.exports = router;