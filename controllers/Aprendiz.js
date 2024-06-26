const conex = require('../config/Conex');

exports.guardar = (req, res) => {
    const nombre = req.body.nombre;
    const genero = req.body.genero;
    const foto = req.body.foto;
    conex.query('insert into aprendiz set ?', {
            nombre: nombre,
            genero: genero,
            foto: foto
        },
        (error, resultado) => {
            if (error) {
                console.log(error)
            } else {
                res.redirect('/aprendiz/listar')
            }
        })
}

exports.actualizar = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const genero = req.body.genero;
    const foto = req.body.foto;
    conex.query('Update aprendiz set ? where id = ?', [{
            nombre: nombre,
            genero: genero,
            foto: foto
        },
        id
    ], (error, resultado) => {
        if (error) {
            console.log(error)
        } else {
            res.redirect('/aprendiz/listar')
        }
    });
}