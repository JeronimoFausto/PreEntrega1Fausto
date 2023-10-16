let usernameIngresado = prompt ("Ingrese su nombre, luego su apellido y al finalizar presione ESC para ingresar.")

let texto = "BIENVENIDO "

while (usernameIngresado != "ESC" && usernameIngresado != "esc") {
    texto += usernameIngresado + " "
    usernameIngresado= prompt ("Ingrese su nombre, luego su apellido y al finalizar presione ESC para ingresar.")
}
alert(texto)

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
    console.log ("nota erronea")
}
