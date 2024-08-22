let readline = require('readline')

let datos = readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese un texto cualquiera: ',(texto)=>{
    const numCaracteres = texto.length
    console.log(`El número de caracteres del texto escrito es de: ${numCaracteres}`)
    datos.close()// falto el cierre de la interfaz de entrada y salida
})
