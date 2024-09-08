let readline = require('readline')

let datos= readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese una cadena: ', (cadena) => {
    let cadenaInvertida = cadena.split('').reverse().join('')
    console.log(`La cadena invertida es: ${cadenaInvertida}`)
    process.exit()
})