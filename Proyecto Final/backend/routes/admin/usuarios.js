var express = require('express');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel')
var util = require('util');
var cloudinary = require('cloudinary').v2;
var md5 = require('md5');
const { error } = require('console');


/* GET home page. */
router.get('/', async function (req, res, next) {
    var persona = req.session.nombre;
    var boolTipoUser = false;
    if (req.session.cod_tipo_usuario === 1) {
        boolTipoUser = true
    }

    var usuarios = await usuariosModel.getUsuarios();

    usuarios.forEach(function (usuario) {
        usuario.esMismoUser = (usuario.usuario === persona);
    });
    console.log(usuarios);

    res.render('admin/usuarios', {
        layout: 'admin/layout',
        persona: persona,
        boolTipoUser,
        usuarios
    });
});


router.get('/nuevoUser', async (req, res, next) => {
    try {

        var tiposUsuario = await usuariosModel.getTiposUsuario();
        res.render('admin/nuevoUser', {
            layout: 'admin/layout',
            persona: req.session.nombre,
            tiposUsuario: tiposUsuario
        });

    } catch (error) {
        console.log(error);
        res.render('admin/error', {
            layout: 'admin/layout',
            error: true,
            message: 'Error al cargar la página',
            persona: req.session.nombre
        });
    }
});


router.post('/nuevoUser', async (req, res, next) => {
    try {
        var tiposUsuario = await usuariosModel.getTiposUsuario();
        var usuarios = await usuariosModel.getUsuarios();
        var usuarioEncontrado = usuarios.find(usuario => usuario.usuario === req.body.usuario);

        if (req.body.usuario != "" && req.body.password != "" && req.body.password2 != "" && usuarioEncontrado === undefined) {

            if (req.body.password != req.body.password2) {
                res.render('admin/nuevoUser', {
                    layout: 'admin/layout',
                    error: true,
                    message: 'Error, las contraseñas no coinciden.',
                    persona: req.session.nombre,
                    tiposUsuario
                });
            }
            else {
                var insertObj = {
                    usuario: req.body.usuario,
                    password: req.body.password,
                    cod_tipo_usuario: req.body.cod_tipo_usuario
                };

                await usuariosModel.insertUser(insertObj);
                res.redirect('/admin/usuarios');
            }

        } else {

            var mensaje = "";
            if (usuarioEncontrado) {
                mensaje = "Error, ya existe un usuario con ese nombre";
            }
            else {
                mensaje = "Error, todos los campos son requeridos";
            }

            res.render('admin/nuevoUser', {
                layout: 'admin/layout',
                error: true,
                message: mensaje,
                persona: req.session.nombre,
                tiposUsuario
            });
        }
    } catch (error) {
        console.log(error)
        res.render('admin/nuevoUser', {
            layout: 'admin/layout',
            error: true,
            message: 'Error, no se creó el usuario.',
            persona: req.session.nombre,
            tiposUsuario
        });
    }
});


router.get('/bajaUsuario/:id', async (req, res, next) => {
    try {
        var fechaBaja = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var objUser = {
            id: req.params.id,
            fec_baja: fechaBaja,
            usuario_baja: req.session.nombre
        };
        await usuariosModel.deleteUser(objUser);
        res.redirect('/admin/usuarios');
    } catch (error) {
        console.log(error);
        res.render('admin/error', {
            layout: 'admin/layout',
            error: true,
            message: 'Error al eliminar usuario',
            persona: req.session.nombre
        });
    }
});

router.get('/activarUsuario/:id', async (req, res, next) => {
    try {
        var id = req.params.id;

        await usuariosModel.activateUser(id);
        res.redirect('/admin/usuarios');
    } catch (error) {
        console.log(error);
        res.render('admin/error', {
            layout: 'admin/layout',
            error: true,
            message: 'Error al activar el usuario.',
            persona: req.session.nombre
        });
    }
});

router.get('/editarUser/:id', async (req, res, next) => {
    var id = req.params.id;
    var usuario = await usuariosModel.getUserByID(id);
    var tiposUsuario = await usuariosModel.getTiposUsuario();

    tiposUsuario.forEach(tipo => {
        if (tipo.cod_tipo_usuario == usuario.cod_tipo_usuario) {
            tipo.selected = true;
        }
        else {
            tipo.selected = false;
        }
    });

    var esMismoUser = false;
    if (req.session.nombre === usuario.usuario) {
        esMismoUser = true;
    }

    res.render('admin/editarUser',
        {
            layout: 'admin/layout',
            usuario,
            persona: req.session.nombre,
            esMismoUser,
            tiposUsuario
        });
});


router.post('/editarUser', async (req, res, next) => {
    try {

        var id = req.body.id;
        var esMismoUser = req.body.esMismoUser;
        var usuario = await usuariosModel.getUserByID(id);
        var tiposUsuario = await usuariosModel.getTiposUsuario();
        var continuo = false;


        if (esMismoUser == 'true') {

            if ((req.body.password.length > 0 && req.body.password2.length > 0) && (req.body.password == req.body.password2)) {
                usuario.password = md5(req.body.password);
                continuo = true;
            }
            else if (req.body.password.length == 0 && req.body.password2.length == 0) {
                continuo = true;
            }
            else {
                continuo = false;
                res.render('admin/editarUser', {
                    layout: 'admin/layout',
                    error: true,
                    message: 'Error, las contraseñas no coinciden o no pueden ser vacías.',
                    persona: req.session.nombre,
                    tiposUsuario,
                    usuario,
                    esMismoUser
                });

            }

        }
        else {
            continuo = true;
        }

        if (continuo) {
            usuario.cod_tipo_usuario = req.body.cod_tipo_usuario;
            await usuariosModel.editarUserById(usuario, id);

            if (esMismoUser == 'true' && usuario.cod_tipo_usuario == 2) {
                res.redirect('/admin/login');
            }
            else {
                res.redirect('/admin/usuarios');
            }
        }

    }
    catch (error) {
        console.log(error);
        res.render('admin/editarUser',
            {
                layout: 'admin/editarUser',
                error: true,
                message: 'No se modificó el usuario.'
            })
    }
})

module.exports = router;