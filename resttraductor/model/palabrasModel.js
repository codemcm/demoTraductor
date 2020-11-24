'use strict'; var dbConn = require('../modules/db.conf');
//palabras object create
var Palabra = function (palabra) {
    this.palabras_id = palabras.palabras_id;
    this.nombreimagen = palabras.nombreimagen;
    this.palabra = palabras.palabra;
    this.idiomas_id = palabras.idiomas_id;
    this.creado_por = palabras.creado_por;
};

Palabra.findById = function (name, result) {
    dbConn.query("SELECT P.palabras_id as ID, P.palabra as PALABRA, TR.palabra AS TRADUCCION, P.nombreimagen FROM palabras P  INNER JOIN traduccion T " 
    + " ON P.palabras_id= T.palabra_id INNER JOIN palabras TR "
    + " ON TR.palabras_id = T.traducido_id "
    + " WHERE P.palabra = ? ", name,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        });
};
Palabra.findAll = function (result) {
    dbConn.query("SELECT P.palabras_id as ID, P.palabra as PALABRA, TR.palabra AS TRADUCCION, P.nombreimagen FROM palabras P  INNER JOIN traduccion T " 
    + " ON P.palabras_id= T.palabra_id INNER JOIN palabras TR "
    + " ON TR.palabras_id = T.traducido_id ",
        function (err, res) {
            if (err) {
                console.log("error: ", err); result(null, err);
            } else {
                console.log('employees : ', res); result(null, res);
            }
        });
};
Palabra.findByKind = function (id, result) {
    dbConn.query("SELECT P.palabras_id as ID, P.palabra as PALABRA, TR.palabra AS TRADUCCION, P.nombreimagen FROM palabras P  INNER JOIN traduccion T " 
    + " ON P.palabras_id= T.palabra_id INNER JOIN palabras TR "
    + " ON TR.palabras_id = T.traducido_id  "
    + " WHERE P.tipos_id = ? ", id,
        function (err, res) {
            if (err) {
                console.log("error: ", err); result(null, err);
            } else {
                console.log('datos : ', res); result(null, res);
            }
        });
};

//1. Definir funcion en Modelo.
Palabra.getPalabrasEspTipo = function (id, result) {
    dbConn.query("SELECT P.palabras_id as ID, P.palabra as PALABRA, P.nombreimagen FROM palabras P"
    + "     WHERE idiomas_id=1 "
    + " AND P.tipos_id = ? ", id,
        function (err, res) {
            if (err) {
                console.log("error: ", err); result(null, err);
            } else {
                console.log('datos : ', res); result(null, res);
            }
        });
};

module.exports = Palabra;