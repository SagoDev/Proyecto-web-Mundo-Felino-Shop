const HEALTHCARE_JSON = '/json/healthcare.json';
const TOYS_JSON = '/json/toys.json';

function getData(JSON, proper) {
  fetch(JSON)
    .then(response => response.json())
    .then(data => {
      showProducts(data, proper);
    })
}
function fillCarousel(prop, card, id) {
  if (prop === "juguetes_gatos") {
    if (id <= 3) {
      document.getElementById('item-carousel-1').innerHTML += card;
    } else if (id > 3 && id <= 6) {
      document.getElementById('item-carousel-2').innerHTML += card;
    } else if (id > 6 && id <= 9) {
      document.getElementById('item-carousel-3').innerHTML += card;
    }
  } else if (prop === "healthcare_gatos") {
    if (id <= 3) {
      document.getElementById('item-carousel-4').innerHTML += card;
    } else if (id > 3 && id <= 6) {
      document.getElementById('item-carousel-5').innerHTML += card;
    } else if (id > 6 && id <= 9) {
      document.getElementById('item-carousel-6').innerHTML += card;
    }
  }
}
function showProducts(products, property) {
  products[property].forEach(product => {
    let card = `<div class="card border shadow" style="width: 18rem">
    <div>
    <img src="img/products/default.png" class="card-img-top img-fluid">
    </div>
    <div class="card-body d-flex justify-content-center align-items-center flex-column text-center">
      <h2>${product.nombre}</h2>
      <p class="card-text">${product.descripcion}</p>
      <h3 class="card-text text-center"><strong>$${product.precio}</strong></h3>           
    </div>
    <div class="card-footer text-center">
    <a href="#" class="btn btnBuy">Comprar</a>
    </div>
  </div>`;
    fillCarousel(property, card, product.id);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getData(TOYS_JSON, "juguetes_gatos");
  getData(HEALTHCARE_JSON, "healthcare_gatos");
});