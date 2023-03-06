const $cardContainer = document.querySelector('.card-product-container');
const $menu = document.querySelector('.bars-menu-container');
const $menuList = document.querySelector('.navbar-list');

$menu.addEventListener('click', ()=> {
  $menuList.classList.toggle('hidden')
})






const createCard = (product) => {
  const {id, imagen, marca, modelo, precio} = product;
  return `
  <div class="card-product">
    <div class="card-product-img-container">
      <img class="card-product-img" src=${imagen} alt=${modelo} ${marca}>
    </div>
    <h2 class="card-product-title">${marca} ${modelo}</h2>
    <span class="card-product-price">Precio: $${precio}</span>
    <button class="card-product-btn" data-id=${id}>Agregar Al Carrito</button>
  </div>
  `
}

const renderCard = (product) =>{
  return $cardContainer.innerHTML = product.map(producto => createCard(producto) ).join("");
}















const init = () => {
  renderCard(products)

}
init()