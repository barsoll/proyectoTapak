//Variables para renderizar productos
let itemProduct = document.getElementById('item-product').content
const fragment = document.createDocumentFragment()
let containerProduct = document.getElementById('container-products')
//Variables para renderizar 
let itemCart = document.getElementById('item-cart').content
let itemsCart = []
let containerCart = document.getElementById('itemCarrito')

//Conexion con el Json
const fetchData =  async() => {
  try{
    const res = await fetch('../data.json')
    const data = await res.json()
    console.log("data: ", data)
    renderProducts(data)
  }catch(error){
    console.log(error)
  }
}

//funcion para mostrar los productos en el html
const renderProducts = (data) =>{
  console.log(itemProduct)
  data.forEach(product => {
    itemProduct.querySelector('h2').textContent = product.title
    itemProduct.querySelector('p').textContent = product.price
    itemProduct.querySelector('img').setAttribute('src', "../imagenes/productos/"+product.image)
    itemProduct.querySelector('button').dataset.id = product.id
    const clone = itemProduct.cloneNode(true)
    fragment.appendChild(clone)
  });
  containerProduct.appendChild(fragment)
}
//Evento para agregar producto al carrito
document.addEventListener("click", (e) => {
  if(e.target.classList.contains('add-to-cart-button')){
    setCart(e.target.parentElement.parentElement)
  }
})

const setCart = (product) => {
    var element = document.getElementById("notification-toast");
    element.classList.add("show");
    setTimeout(() => {
        element.classList.remove("show");
    }, 2000)
  const productCart = {
    title: product.querySelector('h2').textContent,
    price: product.querySelector('p').textContent,
    img: product.querySelector('img').getAttribute('src'),
    id: product.querySelector('button').dataset.id
  }
  itemsCart.push(productCart)
  localStorage.setItem("cartProducts", JSON.stringify(itemsCart))
  setItemsCart(itemsCart)
}
const setItemsCart = (itemsCart) => {
    itemsCart.forEach( product => {
        itemCart.querySelector('.product-cart-item').setAttribute('id', "cart-"+product.id)
        itemCart.querySelector('.title-item-cart').textContent = product.title
        itemCart.querySelector('.price-item-cart').textContent = product.price
        itemCart.querySelector('img').setAttribute('src', product.img)
        const clone = itemCart.cloneNode(true)
        fragment.appendChild(clone)
        containerCart.appendChild(fragment)
        if(document.querySelectorAll("#cart-"+product.id).length !== 1) {
          removeClones(product.id)
        }
      })
}
//Eleminar repetidos
function removeClones(id)
    {
        var original = document.querySelectorAll("#cart-"+id)[0]
        var i,all = document.querySelectorAll("#cart-"+id);
        for(i=0;i<all.length;i++)
        {
            if (all[i] !== original)
            {//this is a clone
                all[i].parentNode.removeChild(all[i]);
            }
        }
    }

fetchData()
//Chequear localStorage
const checkLocalStorage = () => {
    if(localStorage.getItem("cartProducts")){
        storageProducts = JSON.parse(localStorage.getItem("cartProducts"))
        itemsCart = storageProducts
        setItemsCart(storageProducts)
    }
}
checkLocalStorage()
