function diferenciaDias(fecha1, fecha2){
    let fechaInicial = new Date(fecha1)
    let fechaFinal = new Date(fecha2)
    let difTiempo = fechaFinal - fechaInicial
    const diferenciaDias = difTiempo / (1000 * 60 * 60 * 24)
    return(diferenciaDias)
}
let fecha1 = '1971-06-26'
let fecha2 = '1977-03-20'

let diasDiferencia = diferenciaDias(fecha1, fecha2)
console.log(`La diferencia de días entre las dos fechas es: ${diasDiferencia} días`)