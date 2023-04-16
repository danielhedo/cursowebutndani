var express = require('express');
var router = express.Router();
var blogModel = require('../../models/blogModel')



/* GET home page. */
router.get('/', async function(req, res, next) {

  var blog = await blogModel.getEntradasBlog();

  res.render('admin/blog',{
    layout:'admin/layout',
    persona: req.session.nombre,
    blog
  });
});


router.get('/nuevo', (req, res, next) =>{
  
  res.render('admin/nuevo', {
    layout: 'admin/layout',
    persona: req.session.nombre
  })
});

router.post('/nuevo', async (req, res, next) => 
  { 
    try
      {

          if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "")
            {
                
                await blogModel.insertPost(req.body);
                res.redirect('/admin/blog')
            }
            else
            {
              res.render('admin/nuevo',{
              layout: 'admin/layout',
              error: true,
              message: 'Error, campos requeridos Titulo, subtitulo y cuerpo.',
              persona: req.session.nombre
            })
          }

      } catch (error)
        {
          console.log(error)
          res.render('admin/nuevo', {
            layout:'admin/layout',
            error: true,
            message:'Error. no se subió el post',
            persona: req.session.nombre
          })
        }

  })





module.exports = router;