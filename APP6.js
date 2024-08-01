let readline = require('readline')

let datos= readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese una cadena: ', (cadena) => {
    datos.question('Ingrese el índice de inicio para la subcadena: ', (inicio) => {
        datos.question('Ingrese la longitud de la subcadena: ', (longitud) => {
            inicio = parseInt(inicio)
            longitud = parseInt(longitud)
            const subcadena = cadena.substring(inicio, inicio + longitud)
            console.log(`La subcadena es: ${subcadena}`)
            process.exit()
        })
    })
})
