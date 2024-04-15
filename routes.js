const express = require('express');
const router = express.Router();
const conex = require('./config/Conex');

//#region
router.get('/aprendiz/listar', (req, res) => {

    conex.query('Select * from aprendiz', (error, resultado) => {
        if (error) {
            throw error;
        } else {
            res.render('listar', { aprendiz: resultado });
        }
    });
});

//#endregion
router.get('/aprendiz/insertar', (req, res) => {

    res.render('insertar');
});


router.get('/Api', (req, res) => {
    const id = req.params.id;
    conex.query('Select * from aprendiz', (error, resultado) => {
        if (error) {
            throw error;
        } else {

            res.send(resultado);
        }
    });
});

const Aprendiz = require('./controllers/Aprendiz');


router.post('/aprendiz/guardar', Aprendiz.guardar);

module.exports = router;