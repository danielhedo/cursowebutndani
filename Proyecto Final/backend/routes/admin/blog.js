var express = require('express');
var router = express.Router();
var blogModel = require('../../models/blogModel')
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



/* GET home page. */
router.get('/', async function (req, res, next) {
  var persona = req.session.nombre;
  var boolTipoUser = false;
  if(req.session.cod_tipo_usuario === 1)
  {
    boolTipoUser = true
  }

  var tipoUser = req.session.cod_tipo_usuario;
  var blog = await blogModel.getEntradasBlog(persona);
  
  blog = blog.map(nuevopost => {

    if (nuevopost.img_id) {
      const imagen = cloudinary.image(nuevopost.img_id, {
        width: 20,
        height: 20,
        crop: 'fill'
      });
      return {
        ...nuevopost,
        imagen
      }
    } else {
      return {
        ...nuevopost,
        imagen: ''
      }
    }
  });

  res.render('admin/blog', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    boolTipoUser,
    blog
  });
});


router.get('/nuevo', (req, res, next) => {

  res.render('admin/nuevo', {
    layout: 'admin/layout',
    persona: req.session.nombre
  })
});

router.post('/nuevo', async (req, res, next) => {
  try {

    var img_id = '';


    if (req.files && Object.keys(req.files).length > 0) {
      imagen_cloudinary = req.files.imagen_cloudinary;
      img_id = (await uploader(imagen_cloudinary.tempFilePath)).public_id;

    }

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {

      await blogModel.insertPost({
        ...req.body,
        usuario_alta: req.body.usuario_alta.toUpperCase(),
        img_id
      });
      res.redirect('/admin/blog')
    }
    else {
      res.render('admin/nuevo', {
        layout: 'admin/layout',
        error: true,
        message: 'Error, campos requeridos Titulo, subtitulo y cuerpo.',
        persona: req.session.nombre
      })
    }

  } catch (error) {
    console.log(error)
    res.render('admin/nuevo', {
      layout: 'admin/layout',
      error: true,
      message: 'Error. no se subió el post',
      persona: req.session.nombre
    })
  }

})

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let post = await blogModel.getPostById(id);
  if (post.img_original) {
    await (destroy(post.img_original));
  }

  await blogModel.deletePostById(id);
  res.redirect('/admin/blog');
});



/* Vista de modificar */
router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var post = await blogModel.getPostById(id);

  res.render('admin/editar',
    {
      layout: 'admin/layout',
      post,
      persona: req.session.nombre
    })
});


router.post('/editar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen_cloudinary = req.files.imagen_cloudinary;
        img_id = (await uploader(imagen_cloudinary.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }

    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj =
    {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      url_imagen: req.body.url_imagen,
      fec_alta: req.body.fec_alta,
      usuario_alta: req.body.usuario_alta,
      img_id
    }
    await blogModel.editarPostById(obj, req.body.id);
    res.redirect('/admin/blog');
  }
  catch (error) {
    console.log(error);
    res.render('admin/editar',
      {
        layout: 'admin/editar',
        error: true,
        message: 'No se modificó la entrada.'
      })
  }
})








module.exports = router;