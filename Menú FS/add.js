const fs = require('fs')
const fileName = 'estudiantes.json'

function addStudent() {
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        const estudiantes = JSON.parse(content)
        const nuevoEstudiante = { nombre: 'Jose Gutierrez', edad: 19, carrera: 'Lic. Enfermeria' }
        estudiantes.push(nuevoEstudiante);
        try {
            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error("Error al escribir en el archivo JSON.");
                    return;
                }
                console.log("Nuevo estudiante agregado exitosamente");
            })
        } catch (err) {
            console.error("Error al parsear el archivo JSON.");
        }
    })
}

module.exports = addStudent;