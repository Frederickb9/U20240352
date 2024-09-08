function stock(cantidad){
    return new Promise((resolve,reject) =>{
        console.log("Verificando si hay suficiente stock...")
        setTimeout(() => {
            if(cantidad <= 100){
                resolve("Stock suficiente.")
            }else {
                reject("Stock insuficiente")
            }
        },2000)
    })
}
stock("101")
.then( res =>{
    console.log(`Mensaje: ${res}`)
})
.catch( err =>{
    console.log(`Mensaje: ${err}`)
})