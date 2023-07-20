class Products {
  constructor(name, model, brand, price, amount, imageUrl) {
      this.name = name;
      this.model = model;
      this.brand = brand;
      this.price = parseFloat(price);
      this.amount = Number(amount);
      this.imageUrl = imageUrl;
  }

  precioMasIva() {
      this.price = this.price * 1.3;
  }
}

let productosAgregados = [];

let boton = document.getElementById("btnAgregar");
boton.addEventListener('click', () => validar(productosAgregados));

function validar(productosAgregados) {
  let name = prompt("Ingrese el nombre del producto");
  let model = prompt("Ingrese el modelo del producto");
  let brand = prompt("Ingrese la marca del producto");
  let price = Number(prompt("Ingrese el precio del producto"));
  let amount = parseInt(prompt("Ingrese la cantidad del producto"));
  let imageUrl = prompt("Ingrese la url del producto");
  let item = new Products(name, model, brand, price, amount, imageUrl);
  productosAgregados.push(item);
  alert("El producto fue ingresado con éxito");
  console.log('Producto agregado', productosAgregados);
  const ultimoAgregado = productosAgregados[productosAgregados.length - 1];
  ultimoAgregado.precioMasIva();
  mostrarAgregados();
}

let containerProducts = document.getElementById('products');

function mostrarAgregados() {
  containerProducts.innerHTML = "";
  for (const product of productosAgregados) {
      const card = document.createElement('div');
      card.classList.add(
          'card',
          'col-4',
          'm-4',
          'border',
          'border-black',
          'cardProduct'
      );
      card.innerHTML = `
          <img src="${product.imageUrl}" class="card-img-top imagenProductos" alt="producto" />
          <div class="card-body d-flex justify-content-center flex-colum">
              <h5 class="card-title d-flex justify-content-center">${product.name}</h5>
              <p class="card-text d-flex justify-conten-center">Modelo: ${product.model}</p>
              <p class="card-text d-flex justify-conten-center">Marca: ${product.brand}</p>
              <p class="card-text d-flex justify-conten-center">Precio: ${product.price}</p>
              <p class="card-text d-flex justify-conten-center">Cantidad: ${product.amount}</p>
              <input id="comprar" type="submit" value="comprar" class="d-flex justify-content-center comprar"/>
          </div>`;
      containerProducts.appendChild(card);
  }
}
