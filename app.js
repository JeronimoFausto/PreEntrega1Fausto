let username = "coderhouse"
let usernameIngresado = prompt ("Ingrese su username")

if (usernameIngresado == username){
    console.log ("Bienvenido")
}
else {
    console.log ("usuario incorrecto")
}

let nota = prompt ("Que nota te sacaste?")
if (nota <= 2) {
    console.log ("Tu nota es Insuficiente, debes rendir el recuperatorio.")
    } else if (nota <= 5){
        console.log ("Tu nota es Regular, debe rendir el recuperatorio.") 
    } else if (nota <= 6) {
            console.log ("Tu nota esta Aprobada, no hace falta recuperar.")
    } else if (nota <= 7){
        console.log ("Felicitaciones! tu nota esta Muy Bien, no hace falta recuperar.")
    } else if (nota  >9){
        console.log ("La nota es perfecta, no hace falta recuperar")
    }

else{
    console.log ("noat erronea")
}


