const fs = require('fs')
const fileName = 'estudiantes.json'
const estudiantes = [
    { nombre: 'Frederick Benavidez', edad: 18, carrera: 'Ing. Desarrollo de Software.' },
    { nombre: 'Eduardo Avelar', edad: 19, carrera: 'Ing. Civil.' },
    { nombre: 'Luis Lino', edad: 17, carrera: 'Enfermeria' }
];

function crear() {
    fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
        if (err) {
            console.error("Error al crear el archivo JSON.");
        } else {
            console.log(("El archivo JSON se ha creado con exito."))
        }
    })
}

module.exports = crear;