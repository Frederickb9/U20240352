let readline = require('readline')

let datos = readline.createInterface(
    process.stdin,
    process.stdout
)

datos.question('Ingrese una palabra: ', (palabra) => {
    palabra = palabra.toLowerCase().replace(/\s+/g, '')
    const vocales = 'aeiou';
    let count = 0;

   
    for (let char of palabra) {
        if (vocales.includes(char)) {
            count++;
        }
    }

    console.log(`Número de vocales en la palabra "${palabra}": ${count}`)
    process.exit()
});