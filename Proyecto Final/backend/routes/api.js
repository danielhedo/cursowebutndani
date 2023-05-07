var express = require('express');
var router = express.Router();
var blogModel = require('./../models/blogModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');



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


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'daniel.veterinario@gmail.com',
        subject: 'Contacto vía web',
        html: `<head>
        <meta charset="UTF-8">
        <title>Información de contacto</title>
      </head>
      <body>
        <h2>Información de contacto:</h2>
        <p><strong>Nombre:</strong> ${req.body.nombre}</p>
        <p><strong>Apellidos:</strong> ${req.body.apellidos}</p>
        <p><strong>Email:</strong> ${req.body.email}</p>
        <p><strong>Teléfono:</strong> ${req.body.telefono}</p>
        <p><strong>Asunto:</strong> ${req.body.asunto}</p>
        <p><strong>Mensaje:</strong> ${req.body.mensaje}</p>
      </body>`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado... En breve nos pondremos en contacto con usted.'
    });

});





module.exports = router;