const fs = require('fs')
const fileName = 'estudiantes.json'

function deleteStudent() {
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        try {
            const estudiantes = JSON.parse(content);
            estudiantes.splice(1, 1);
            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error("Error al escribir en el archivo JSON.");
                    return;
                }
                console.log("Estudiante eliminado con exito.");
            })
        } catch (err) {
            console.error("Error al parsear el archivo JSON.");
        }
    })
}

module.exports = deleteStudent;