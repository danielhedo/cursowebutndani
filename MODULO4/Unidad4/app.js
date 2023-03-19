var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Siempre debajo de las líneas public
app.use(session({
  secret:'Fz8KlP#x6&c2v$1m9@j3',
  resave: false,
  saveUninitialized: true
}));


//app.use('/', indexRouter);
//app.use('/users', usersRouter);



//Daniel.
app.get('/', function (req, res)
{
  var conocido = Boolean (req.session.nombre);
  var edad = Boolean (req.session.edad);
  var mayormenor = req.session.mayormenor;
  res.render('index', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre,
    mayormenor: req.session.mayormenor
  });
});


//Gestionamos el post
app.post('/ingresar', function (req, res)
{
if (req.body.nombre)
  {
    req.session.nombre = req.body.nombre; 
  }

  if (req.body.edad)
  {

    req.session.edad = req.body.edad;

      if(req.session.edad >= 18)
      {
        req.session.mayormenor = "mayor";
      }
      else{
        req.session.mayormenor = "menor";
      }

  }



  res.redirect('/')
});


app.get('/salir', function (req , res)
{
req.session.destroy();
res.redirect('/');
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
