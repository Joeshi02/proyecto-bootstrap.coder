//circuito 2
let condition = true
let nombre = prompt ("ingresar su nombre: ")
while (nombre=='') {
    nombre = prompt ('Ingrese un nombre valido')
}
let edad = (prompt("Bienvenido " + nombre + 'Ingrese su edad:' ))
while (condition) {
   if (edad>= 18) {
       condition = false
   } else {
       alert("no puede visitar este sitio")
       edad = (prompt("ingrese nueva edad: "))
   }
}
function darGracias() {
    alert("Bienvenido "+ ""+nombre+""+ "usted es mayor de edad y puede seguir navegando")
}
darGracias()
