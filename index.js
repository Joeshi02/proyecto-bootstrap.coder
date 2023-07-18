//circuito 2 (corregido)
let condition = true
let nombre = prompt ("ingresar su nombre: ")
while (nombre=='') {
    nombre = prompt ('Ingrese un nombre valido')
}
let edad = (prompt("Bienvenido " + nombre + 'ingrese su edad:' ))
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

//objetos preentrega 2 
// const motor1 = {
//     tipo: '1jz',
//     cilindraje: '2500 6 cilindros',
//     valor: '2.000.000 clp'
// }
// const motor2 = {
//     tipo: '2jz',
//     cilindraje: '3000 6 cilindros turbo',
//     valor: '4.000.000 clp'
// }
// const motor3 = {
//     tipo: 'EP6',
//     cilindraje: '1600 6 cilindros',
//     valor: '1.500.000 clp'
// }
// const motor4 = {
//     tipo: '1GZ',
//     cilindraje: '5000 12 cilindros',
//     valor: '6.000.000 clp'
// }

// function motor(tipo) {
//     this.tipo = tipo 
// }

// const motor1 = new motor("MODELO: 1JZ - 2.500cc 6 cilindros - VALOR: 2.000.000 CLP")
// const motor2 = new motor("MODELO: 2JZ - 3.000cc 6 cilindros turbo - VALOR: 4.000.000 CLP")
// const motor3 = new motor("MODELO: 1GZ - 5.000cc 12 cilindros - VALOR: 6.000.000 CLP")

// alert (motor1.tipo)

// function motor(tipo) {
//     this.tipo = tipo 
// }

// const motor1        = new motor("MODELO: 1JZ - 2.500cc 6 cilindros - VALOR: 2.000.000 CLP")
// const motor2        = new motor("MODELO: 2JZ - 3.000cc 6 cilindros turbo - VALOR: 4.000.000 CLP")
// const motor3        = new motor("MODELO: 1GZ - 5.000cc 12 cilindros - VALOR: 6.000.000 CLP")

// function escape(tipo) {
//     this.tipo = tipo 
// }

// const escape1       = new escape("MODELO: Yoshimura - VALOR: 150.000 CLP")
// const escape2       = new escape("MODELO: TOPGUN - VALOR: 300.000 CLP")
// const escape3       = new escape("MODELO: GENERICO - VALOR: 50.000 CLP")

// function butaca(tipo) {
//     this.tipo = tipo 
// }

// const butaca1       = new butaca("MODELO: RECARO  - VALOR: 250.000 CLP")
// const butaca2       = new butaca("MODELO: PEUGEOT - VALOR: 150.000 CLP")
// const butaca3       = new butaca("MODELO: GENERICA - VALOR: 100.000 CLP")
// function manubrio(tipo) {
//     this.tipo = tipo 
// }

// const manubrio1     = new manubrio("MODELO: MOMO - VALOR: 80.000 CLP")
// const manubrio2     = new manubrio("MODELO: F1 - VALOR: 200.000 CLP")
// const manubrio3     = new manubrio("MODELO: GENERICO - VALOR: 100.000 CLP")

// function suspencion(tipo) {
//     this.tipo = tipo 
// }

// const suspencion1   = new suspencion("MODELO: K&N - VALOR: 500.000 CLP")
// const suspencion2   = new suspencion("MODELO: FOX - VALOR: 1.000.000 CLP")
// const suspencion3   = new suspencion("MODELO: GENERICA - VALOR: 250.000 CLP")

// function llanta(tipo) {
//     this.tipo = tipo 
// }

// const llanta1       = new llanta("MODELO: BSS - VALOR: 650.000 CLP")
// const llanta2       = new llanta("MODELO: PEUGEOT - VALOR: 300.000 CLP")
// const llanta3       = new llanta("MODELO: GENERICAS - VALOR: 200.000 CLP")

// console.log(llanta1);

// function productos(nombre, cilindrada, marca, precio ) {
//     this.nombre     = nombre
//     this.cilindrada = cilindrada
//     this.marca      = marca
//     this.precio     = precio 
// }

// let nombre      = prompt ("ingrese nombre del producto")
// let cilindrada  = Numberprompt ("ingrese la cilindrada del producto: ")
// let marca       = prompt ("Ingrese la marca del producto: ")
// let precio      = parseFloatprompt ("Ingrese el precio del producto: ") 

// return {nombre, cilindrada, marca, precio}

// class product {

//     constructor(title, description, brand, price){
//         this.title          = title
//         this.description    = description
//         this.brand          = brand
//         this.price          = price
//     }
//         precioMasIva(){
//             this.price = this.price * 1.3
//         }
    

//         let products = []
//         let cantidadDeProductos = Number(prompt('Ingrese la cantidad de productos que se va a agregar: '))
//         for (let index = 0; index < cantidadDeProductos; index++) {
//             let title           = prompt("Ingrese el nombre del producto: ")
//             let description     = Number(prompt("ingrese la cilindrada del producto: "))
//             let brand           = prompt("Ingrese la matrca de producto: ")
//             let price           = parseFloatprompt("Ingrese el precio del producto: ")
//             let product         = new Product(title,description,brand,price)
//         product.precioMasIva()
//         products.push()
//         }

//     }