var express = require('express');
var router = express.Router();
var blogModel = require('../../models/blogModel')



/* GET home page. */
router.get('/', async function (req, res, next) {

  var blog = await blogModel.getEntradasBlog();

  res.render('admin/blog', {
    layout: 'admin/layout',
    persona: req.session.nombre,
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

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {

      await blogModel.insertPost(req.body);
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
  await blogModel.deletePostById(id);
  res.redirect('/admin/blog');
});

/* Vista de modificar */
router.get('/editar/:id', async (req, res, next) => {
  var id = req.params.id;
  var post = await blogModel.getPostById(id);


  console.log('Fecha alta: ', req.params.titulo);
  res.render('admin/editar',
    {
      layout: 'admin/layout',
      post,
      persona: req.session.nombre
    })
});


router.post('/editar', async (req, res, next) => {
  try {
    var obj =
    {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      url_imagen: req.body.url_imagen,
      fec_alta: req.body.fec_alta,
      usuario_alta: req.body.usuario_alta
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