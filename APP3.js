let readline = require('readline')

let datos = readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese un texto cualquiera: ',(texto)=>{
    const numCaracteres = texto.length
    console.log(`El número de caracteres del texto escrito es de: ${numCaracteres}`)
})