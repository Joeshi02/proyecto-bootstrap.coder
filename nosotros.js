// //circuito 3 
// // let ciudad = prompt("Para calcular envio ingrese su provincia: (ejemplo: buenos aires)")
// // switch (ciudad) {
// //     case 'catamarca':
// //         alert("el valor es 2500 ")
// //         break;
    
// //     case 'buenos aires':
// //         alert("el valor es 1000")
// //         break;
        
// //     case 'chaco':
// //         alert("el valor es 2000 ")
// //         break;

// //     case 'chubut':
// //         alert("el valor es 1800")
// //         break;

// //     case 'cordoba':
// //         alert("el valor es 1600 ")
// //         break;

// //     case 'corrientes':
// //         alert("el valor es  800")
// //         break;

// //     case 'entre rios':
// //         alert("el valor es  1200")
// //         break;

// //     case 'formosa':
// //         alert("el valor es 2500")
// //         break;

// //     case 'jujuy':
// //         alert("el valor es 2500 ")
// //         break;

// //     case 'la pampa':
// //         alert("el valor es 2100 ")
// //         break;

// //     case 'la rioja':
// //         alert("el valor es 2200")
// //         break;

// //     case 'mendoza':
// //         alert("el valor es 2800 ")
// //         break;

// //     case 'misiones':
// //         alert("el valor es 3000")
// //         break;

// //     case 'neuquen':
// //         alert("el valor es 1800 ")
// //         break; 
// //     case 'rio negro':
// //         alert("el valor es 3500")
// //         break;

// //     case 'salta':
// //         alert("el valor es 2500")
// //         break;

// //     case 'san juan':
// //         alert("el valor es 2900")
// //         break;

// //     case 'san luis':
// //         alert("el valor es 2900")
// //         break;

// //     case 'santa cruz':
// //         alert("el valor es 1400")
// //         break;

// //     case 'santa fe':
// //         alert("el valor es 1600")
// //         break;

// //     case 'santiago del estero':
// //         alert("el valor es 1800")
// //         break;

// //     case 'tierra del fuego':
// //         alert("el valor es gratis")
// //         break;

// //     case 'tucuman':
// //         alert("el valor es 3000")
// //         break;
// // }
// // function darGracias() {
// //     alert("gracias por preferirnos")
// // }
// // darGracias()

// // //circuito 1
// // let precioIngresado = Number(prompt(" ingresar el valor del producto: "))
// // for (let i = 0.30; i<= 1; i++) {
// //     let resultado = precioIngresado * i
// //     alert("El valor del envio es " + "=" + resultado )
// // }




// // let products = []
// //  class producto {
// //     constructor(){
// //         this.products = products
// //     }
// //     get (){
// //         return this.products
// //     }
// //     getById(){
// //         return this.products.find(product => product.id = id)
// //     }
// //     create (producto){
// //         const {name, description, brand, price} = producto
// //         if(!name || !description || !brand || !price){
// //             return 'faltan datos'
// //         }
// //     }
    
// // }
// var productos = []; // Array para almacenar los objetos de producto

// // Bucle para crear múltiples objetos
// do {
//   var nombre = prompt("Ingrese el nombre del producto (o escriba 'salir' para terminar):");
  
//   // Si el usuario escribe 'salir', se detiene el bucle
//   if (nombre === "salir") {
//     break;
//   }
  
//   var precio = parseFloat(prompt("Ingrese el precio del producto:"));
//   var cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
  
//   // Crear el objeto de producto
//   var producto = {
//     nombre: nombre,
//     precio: precio,
//     cantidad: cantidad
//   };
  
//   // Agregar el objeto al array de productos
//   productos.push(producto);
  
// } while (true);

// // Mostrar los productos creados
// alert("Productos creados:\n" + JSON.stringify(productos));
