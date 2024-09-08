
function mayorDeEdad(edad){
    return new Promise((resolve, reject) =>{
        if(edad >= 18){
            resolve("Edad válida para acceder al contenido")
        }else{
            reject("No tiene acceso al contenido, saliendo del sitio web...")
        }
    })
}

mayorDeEdad("30")
.then(res =>{
    console.log(`Mensaje: ${res}`)
})
.catch(err =>{
    console.log(`Mensaje: ${err}`)
})
