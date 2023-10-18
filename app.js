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

function TuNota (calificacion, lugar, fecha){
    this.calificacion = calificacion;
    this.lugar = lugar;
    this.fecha = fecha;
};

let comoSigo = prompt ("ahora que sabes tu nota, escribila para saber donde y cuando recuperar la materia")

var insuficiente = new TuNota ("Insuficiente", "Facultad de Derecho", 20-12);
var regular = new TuNota ("Regular", "Facultad de Ciencias Exactas", 23-12);
var aprobado = new TuNota ("Aprobado", "No hace falta recuperar", "-");
var muyBien = new TuNota ("Aprobado", "No hace falta recuperar", "-");
var perfecto = new TuNota ("Aprobado", "No hace falta recuperar", "-");

if (comoSigo = "insuficiente"){
    console.log (insuficiente)
    } else if (ComoSigo = "regular"){
        console.log (regular)
    } else if (ComoSigo = "Aprobado"){
        console.log (aprobado)
    } else if (ComoSigo = "Muy Bien"){
        console.log (muybien)
    } else if (ComoSigo = "perfecto"){
        console.log (perfecto)
    }
    else {
        console.log ("Error")
    }


const Titulo = document.querySelector("h1").textContent="Asignacion de notas."

const Subtitle = document.querySelector("h3")
Subtitle.remove

let agregado = document.createElement("p")
agregado.innerHTML= "Parrafo de demostracion"
document.body.appendChild(agregado)

