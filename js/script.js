function getToys() {

  fetch('/json/toys.json')
    .then(response => response.json())
    .then(data => {
      data.juguetes_gatos.forEach(toy => {

        let card = `<div class="card border shadow" style="width: 18rem">
        <div>
        <img src="img/products/default.png" class="card-img-top img-fluid">
        </div>
        <div class="card-body d-flex justify-content-center align-items-center flex-column text-center">
          <h2>${toy.nombre}</h2>
          <p class="card-text">${toy.descripcion}</p>          
        </div>
        <div class="card-footer text-center">
        <a href="#" class="btn btnBuy">Comprar</a>
        </div>
      </div>`;


        if (toy.id <= 3) {
          document.getElementById('item-carousel-1').innerHTML += card;
        } else if (toy.id > 3 && toy.id <= 6) {
          document.getElementById('item-carousel-2').innerHTML += card;
        } else if (toy.id > 6 && toy.id <= 9) {
          document.getElementById('item-carousel-3').innerHTML += card;
        }
      });
    })
}

document.addEventListener('DOMContentLoaded', () => {
  getToys();
});