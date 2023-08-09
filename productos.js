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
    this.price = this.price * 2.5;
  }
}

// Lista de productos agregados
let productosAgregados = [];

if (localStorage.getItem('productosAgregados')) {
  productosAgregados = JSON.parse(localStorage.getItem('productosAgregados'));
}

// Formulario
let form = document.getElementById("productForm");
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let model = document.getElementById("model").value;
  let brand = document.getElementById("brand").value;
  let price = parseFloat(document.getElementById("price").value);
  let amount = parseInt(document.getElementById("amount").value);
  let imageUrl = document.getElementById("imageUrl").value;

  let item = new Products(name, model, brand, price, amount, imageUrl);
  productosAgregados.push(item);
  console.log('Producto agregado', productosAgregados);

  // Limpia los campos del formulario 
  form.reset();

  const ultimoAgregado = productosAgregados[productosAgregados.length - 1];
  ultimoAgregado.precioMasIva();
  mostrarAgregados();
  guardarEnLocalStorage();
  swal.fire ({
    title: 'El producto fue añadido con exito'
  })
});

// Función para  tarjetas
let containerProducts = document.getElementById('products');

function mostrarAgregados() {
  containerProducts.innerHTML = "";
  for (const product of productosAgregados) {
    const card = document.createElement('div');
    card.classList.add(
      'card',
      'col-3', 
      'm-1',
      'border',
      'border-black',
      'cardProduct'
    );
    card.innerHTML = `
      <img src="${product.imageUrl}" class="card-img-top imagenProductos img-fluid" alt="producto" />
      <div class="card-body d-flex justify-content-center flex-column p-0">
        <h5 class="card-title d-flex justify-content-center">${product.name}</h5>
        <p class="card-text d-flex justify-content-center">Modelo: ${product.model}</p>
        <p class="card-text d-flex justify-content-center">Marca: ${product.brand}</p>
        <p class="card-text d-flex justify-content-center">Precio: ${product.price}</p>
        <p class="card-text d-flex justify-content-center">Stock: ${product.amount}</p>
        <input id="comprar" type="submit" value="comprar" class="d-flex justify-content-center comprar"/>
      </div>`;
    containerProducts.appendChild(card);
  }
}

function guardarEnLocalStorage() {
  localStorage.setItem('productosAgregados', JSON.stringify(productosAgregados));
}

mostrarAgregados();

const renderProducts = document.querySelector('#render');

fetch('/assets/data/data.json')
  .then(respuesta => respuesta.json())
  .then(data => {
    data.forEach(post => {
      const card = document.createElement('div');
      card.classList.add(
        'card',
        'col-3',
        'm-1',
        'border',
        'border-black',
        'cardProduct'
      );
      card.innerHTML = `
        <img src="${post.imgUrl}" class="card-img-top imagenProductos img-fluid" alt="producto" />
        <div class="card-body d-flex justify-content-center flex-column p-0">
          <h5 class="card-title d-flex justify-content-center">${post.name}</h5>
          <p class="card-text d-flex justify-content-center">Modelo: ${post.model}</p>
          <p class="card-text d-flex justify-content-center">Marca: ${post.brand}</p>
          <p class="card-text d-flex justify-content-center">Precio: ${post.price}</p>
          <p class="card-text d-flex justify-content-center">Stock: ${post.stock}</p>
          <input id="comprar" type="submit" value="comprar" class="d-flex justify-content-center comprar"/>
        </div>`;
      renderProducts.appendChild(card);
    });
  });
