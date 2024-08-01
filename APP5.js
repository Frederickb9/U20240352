let readline = require('readline')

let datos= readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese una frase: ', (frase) => {
    datos.question('Ingrese la palabra que desea reemplazar: ', (palabraAReemplazar) => {
        datos.question('Ingrese la nueva palabra: ', (nuevaPalabra) => {
            const fraseModificada = frase.replace(new RegExp(palabraAReemplazar, 'g'), nuevaPalabra)
            console.log(`Frase modificada: ${fraseModificada}`)
            process.exit()
        });
    });
});