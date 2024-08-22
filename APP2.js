let readline = require('readline')

let datos = readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese su nombre: ',(nombre)=>{
    datos.question('Ingrese su apellido: ',(apellido)=>{
        console.log('Hola, ' + nombre + ' ' + apellido)
        datos.close()// falto el cierre de la interfaz de entrada y salida
    })
})
