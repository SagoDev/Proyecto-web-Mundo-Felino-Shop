const HEALTHCARE_JSON = '../json/healthcare.json';
const TOYS_JSON = '../json/toys.json';

function getData(JSON, proper) {
  fetch(JSON)
    .then(response => response.json())
    .then(data => {
      showProducts(data, proper);
    })
}
function fillCarousel(prop, card, id) {
  propMap = {
    juguetes_gatos: ['item-carousel-1', 'item-carousel-2', 'item-carousel-3'],
    healthcare_gatos: ['item-carousel-4', 'item-carousel-5', 'item-carousel-6']
  };
  let index = Math.min(Math.floor((id - 1) / 3), propMap[prop].length - 1);
  let elId = propMap[prop][index];
  document.getElementById(elId).innerHTML += card;
}

function fillCarouselSm(prop, item) {
  let toys = document.getElementById("smToys");
  let healthcare = document.getElementById("smHealthcare");
  if (prop === "juguetes_gatos") {
    toys.innerHTML += item;
  } else if (prop === "healthcare_gatos") {
    healthcare.innerHTML += item;
  }
}

function showProducts(products, property) {
  products[property].forEach(product => {
    let card = `
                <div class="card border shadow" style="width: 18rem;">
                  <div>
                    <img src="img/products/default.png" class="card-img-top img-fluid">
                  </div>
                  <div class="card-body d-flex justify-content-center align-items-center flex-column text-center">
                   <h2>${product.nombre}</h2>
                    <p class="card-text">${product.descripcion}</p>
                    <h3 class="card-text text-center"><strong>$${product.precio}</strong></h3>
                    <p class="card-text">(${product.reviews} reviews)</p>          
                  </div>
                  <div class="card-footer text-center">
                    <a href="#" class="btn btnBuy">Comprar</a>
                  </div>
                </div>
    `;
    let item = `
                <div class="card" style="width: 18rem;">
                <img src="img/products/default.png" class="card-img-top">
                <div class="card-body">
                  <h5>${product.nombre}</h5>
                  <p>${product.descripcion}</p>
                  <h3 class="card-text"><strong>$${product.precio}</strong></h3>
                  <p><small>(${product.reviews} reviews)</small></p>
                  <a href="#" class="btn btnBuy">Comprar</a>
                </div>
              </div>                
  `;
    fillCarousel(property, card, product.id);
    fillCarouselSm(property, item);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getData(TOYS_JSON, "juguetes_gatos");
  getData(HEALTHCARE_JSON, "healthcare_gatos");
});