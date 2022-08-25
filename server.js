/*--------------------Modules-----------------------------*/
const express = require('express');
/*-------------------Instancia----------------------------*/

const app = express();

/*-------------------MiddleWare-------------------------- */
/*app.use(express.json());
app.use(morgan('tiny'));*/
app.use(express.static('./public'))

/*------------------Servidor ----------------------------*/
const PORT = 9090;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
});
server.on('error', err => console.log(`Error en server ${err}`));