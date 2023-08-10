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

// 22/07
// boton  antiguo 
// <!-- <main class="row">
//             <button id="btnAgregar">AGREGAR PRODUCTOS</button>
//             <div class="row justify-content-center" id="products">
              
//             </div>
//           </main> -->

// simulador 22/07
// class Products {
//   constructor(name, model, brand, price, amount, imageUrl) {
//       this.name = name;
//       this.model = model;
//       this.brand = brand;
//       this.price = parseFloat(price);
//       this.amount = Number(amount);
//       this.imageUrl = imageUrl;
//   }

//   precioMasIva() {
//       this.price = this.price * 1.3;
//   }
// }

// let productosAgregados = [];

// let boton = document.getElementById("btnAgregar");
// boton.addEventListener('click', () => validar(productosAgregados));

// function validar(productosAgregados) {
//   let name = prompt("Ingrese el nombre del producto");
//   let model = prompt("Ingrese el modelo del producto");
//   let brand = prompt("Ingrese la marca del producto");
//   let price = Number(prompt("Ingrese el precio del producto"));
//   let amount = parseInt(prompt("Ingrese la cantidad del producto"));
//   let imageUrl = prompt("Ingrese la url del producto");
//   let item = new Products(name, model, brand, price, amount, imageUrl);
//   productosAgregados.push(item);
//   alert("El producto fue ingresado con éxito");
//   console.log('Producto agregado', productosAgregados);
//   const ultimoAgregado = productosAgregados[productosAgregados.length - 1];
//   ultimoAgregado.precioMasIva();
//   mostrarAgregados();
// }

// let containerProducts = document.getElementById('products');

// function mostrarAgregados() {
//   containerProducts.innerHTML = "";
//   for (const product of productosAgregados) {
//       const card = document.createElement('div');
//       card.classList.add(
//           'card',
//           'col-2',
//           'm-4',
//           'border',
//           'border-black',
//           'cardProduct'
//       );
//       card.innerHTML = `
//           <img src="${product.imageUrl}" class="card-img-top imagenProductos" alt="producto" />
//           <div class="card-body d-flex justify-content-center flex-column">
//               <h5 class="card-title d-flex justify-content-center">${product.name}</h5>
//               <p class="card-text d-flex justify-conten-center">Modelo: ${product.model}</p>
//               <p class="card-text d-flex justify-conten-center">Marca: ${product.brand}</p>
//               <p class="card-text d-flex justify-conten-center">Precio: ${product.price}</p>
//               <p class="card-text d-flex justify-conten-center">Cantidad: ${product.amount}</p>
//               <input id="comprar" type="submit" value="comprar" class="d-flex justify-content-center comprar"/>
//           </div>`;
//       containerProducts.appendChild(card);
//   }
// }