function verificarCodigo(descuento){
    return new Promise((resolve, reject) =>{
        console.log("Verificando el código de descuento...")
        setTimeout(() =>{
            if(descuento==="DESCUENTO2024"){
                resolve("Código de descuento válido.")
            }else{
                reject("Código de descuento inválido.")
            }
        },3000)
    })
}
verificarCodigo("DESCUENTO2024")
.then( res => {
    console.log(`Mensaje: ${res}`)
})
.catch( err => {
    console.log(`Mensaje: ${err}`)
})