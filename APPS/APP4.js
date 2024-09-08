let readline = require('readline')

let datos = readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese un mensaje: ',(mensaje)=>{
    const cadena = mensaje.toUpperCase()
    console.log(`La cadena de caracteres en mayúsculas es: ${cadena}`)
    process.exit()
})