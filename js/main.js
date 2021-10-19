//Mostrar carrito
const showCart = () => {
  let menuCarrito = document.getElementById('carritoMenu')
  menuCarrito.classList.add("open");
}
const hideCart = () => {
  let menuCarrito = document.getElementById('carritoMenu')
  menuCarrito.classList.remove("open");
}