const fs = require('fs')
const fileName = 'estudiantes.json'

function modify() {
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        try {
            const estudiantes = JSON.parse(content);
            estudiantes[1].edad = 20;

            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error("Error al escribir en el archivo JSON.");
                } else {
                    console.log("Edad del estudiante actualizada correctamente.");
                }
            })
        } catch (err) {
            console.error("Error al parsear el archivo JSON.");
        }
    })
}

module.exports = modify;