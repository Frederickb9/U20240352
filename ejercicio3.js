//Escribe un programa que obtenga el nombre del mes actual y lo muestre en la consola

let fecha = new Date()
let mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
console.log(mes[fecha.getMonth()])