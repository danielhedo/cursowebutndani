const moment = require('moment');


moment.locale('es');
console.log ('Nací hace ' + moment('25/01/1988','DD/MM/YYYY') .fromNow() )

