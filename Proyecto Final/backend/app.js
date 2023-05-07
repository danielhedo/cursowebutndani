var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var fileUpload = require('express-fileupload');
var cors = require('cors');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Acceso administrador
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/blog');
var userRouter = require('./routes/admin/usuarios');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'e2d3f4a1b6c9e0fb3d2a15c8f7e6b8d1c7f9a0e3b2d8e1f6c5a9b0d1e8f6a1c',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}))


secured = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    }
    else {
      res.redirect('/admin/login');

    }
  }
  catch (error) {
    console.log(error);
  }
}

//Creamos seguridad para que los usuarios redactores no puedan ver el sistema de administración de usuarios.
secured2 = async (req, res, next) => {
  try {
    if (req.session.id_usuario && req.session.cod_tipo_usuario == 1) {
      next();
    }
    else {
      res.redirect('/admin/blog');

    }
  }
  catch (error) {
    console.log(error);
  }
}



app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//administrador
app.use('/admin/login', loginRouter);
app.use('/admin/blog', secured, adminRouter);
app.use('/admin/usuarios', secured2, userRouter);
//
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
