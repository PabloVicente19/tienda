const $cardContainer = document.querySelector('.card-product-container');
const $menu = document.querySelector('.bars-menu-container');
const $menuList = document.querySelector('.navbar-list');
const $carrito = document.querySelector('.carrito');
const $modalCart = document.querySelector('.modal-cart-container')
const $productsCartContainer = document.querySelector('.modal-products-content')
const cart = []


// abrir el menu y cerrarlo
$carrito.addEventListener('click', () => {
  $modalCart.classList.toggle('hidden')
})

// Animo el menu cuando se habre
const animationMenu = () => {
  const menuLines = document.querySelectorAll('.bars')
  menuLines[0].classList.toggle('bars_line1')
  menuLines[1].classList.toggle('bars_line2')
  menuLines[2].classList.toggle('bars_line3')
  $menuList.classList.toggle('hidden');
}


// Creacion de las card en el main
const createCard = (product) => {
  const {id, imagen, marca, modelo, precio} = product;
  return `
  <div class="card-product">
    <div class="card-product-img-container">
      <img class="card-product-img" src=${imagen} alt=${modelo} ${marca}>
    </div>
    <h2 class="card-product-title">${marca} ${modelo}</h2>
    <span class="card-product-price"> $${precio}</span>
    <button class="card-product-btn" data-id=${id}>Agregar Al Carrito</button>
  </div>
  `
}

// Filta los productos

const addCart = (e) => {
  const productId = e.target.dataset.id;
  // Verifica que productId no sea undefined
  if (!productId) return;

  const item = products.find(prod => prod.id == productId)
  const sameProduct = cart.some(prod => prod.id == item.id)
  if (sameProduct) {
    item.stock++;
  }
  else {
    cart.push(item)
  }
  renderCardInCart(cart)
}

//creacion de la card en el carrito
const createCardInCart = (product) => {
  const {imagen, modelo, marca, precio, stock} = product
  return`
  <div class="product">
          <div class="product-img-container">
            <img class="product-img" src=${imagen} alt="">
          </div>
          <div class="product-details">
            <i class="fa-solid fa-circle-xmark quit"></i>
            <span class="product-title">${marca} ${modelo}</span>
            <span class="product-cant">Cantidad: ${stock}</span>
            <span class="product-price">$${precio}</span>
          </div>
        </div>`
}

// renderizo las cards en el carrito
const renderCardInCart = (product) =>{
   $productsCartContainer.innerHTML = product.map(producto => createCardInCart(producto)).join("")
}
// Renderizo las card en el main
const renderCard = (container,product) =>{
  return container.innerHTML += product.map(producto => createCard(producto) ).join("");
}

const init = () => {
  $menu.addEventListener('click', animationMenu)
  renderCard($cardContainer,products)
  $cardContainer.addEventListener('click',addCart)
}
init()