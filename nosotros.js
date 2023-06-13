let condition = true
let nombre = prompt ("ingresar su nombre: ")
let edad = parseInt(prompt("Ingrese su edad:"))
while (condition) {
   if (edad>= 18) {
       condition = false
   } else {
       alert("no puede visitar este sitio")
       edad = parseInt(prompt("ingrese nueva edad: "))
   }
}
function darGracias() {
    alert('Bienvenido' + " " + nombre + " " + 'usted es mayor de edad y puede seguir navegando')
}
darGracias()

