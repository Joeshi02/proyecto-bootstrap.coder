class Product {
  constructor(title, description, brand, price) {
    this.title = title;
    this.description = description;
    this.brand = brand;
    this.price = price;
  }

  precioMasIva() {
    this.price = this.price * 1.3;
  }
}

let products = [];
let cantidadDeProductos = Number(prompt("Ingrese la cantidad de productos que se va a agregar: "));

for (let index = 0; index < cantidadDeProductos; index++) {
  let title = prompt("Ingrese el nombre del producto: ");
  let description = prompt("Ingrese la descripción del producto: ");
  let brand = prompt("Ingrese la marca del producto: ");
  let price = parseFloat(prompt("Ingrese el precio del producto: "));

  let product = new Product(title, description, brand, price);
  product.precioMasIva();
  products.push(product);
}

console.log(products);

alert ("El producto fue ingresado con exito. Consulte el precio final con el agente.")