function getToys() {
    fetch('/json/toys.json')
        .then(response => response.json())
        .then(data => {
            const toysList = document.getElementById('');
            data.juguetes_gatos.forEach(toy => {
                toysList.innerHTML += `
                <div class="card f-barlow" style="height: 300px;">
                <img src="${toy.imagen}" class="card-image-top" alt="">
                <div class="card-body">
                  <h2 class="product-name card-title text-center">${toy.nombre}</h2>
                  <p class="card-text product-description">${toy.descripcion}</p>
                  <div class="product-price">$${toy.precio}</div>
                  <div class="rating d-flex justify-content-center text-center">
                    <i class="bi bi-star checked"></i>
                    <i class="bi bi-star checked"></i>
                    <i class="bi bi-star checked"></i>
                    <i class="bi bi-star checked"></i>
                    <i class="bi bi-star checked"></i>
                    <div class="product-reviews">(${toy.reviews} reviews)</div>
                  </div>
                  <div class="btns">
                    <button type="button" class="fs-5">Añadir<i class="bi bi-cart-plus"></i></button>
                  </div>
                </div>
              </div> 
                `;
            });
        })
}

document.addEventListener('DOMContentLoaded', () => {
    getToys();
});