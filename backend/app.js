'use strict'

// Cargar Modulos de Node para crear Servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar Express (http)
var app = express();

// Cargar Archivos y rutas

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//  CORS

// Añadir prefijo a rutas

// Ruta de prueba de API
app.get('/probando', (req, res) => {
    console.log('Hola Mundo');

    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        autor: 'Victor Robles Web',
        url: 'victorroblesweb.es'
    });
});

// Exportar Módulo (Archivo actual)
module.exports = app;