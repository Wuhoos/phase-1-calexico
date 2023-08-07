document.addEventListener("DOMContentLoaded", listMenuItems)

function listMenuItems(){
    fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(menu => {
        renderMenuItem(menu)
        showMenuDetails(menu[0])
    })
}

function renderMenuItem(menuData){
    const newMenu = document.getElementById('menu-items')
    menuData.forEach(item => {
        const itemsList = document.createElement('span')
        itemsList.textContent = item.name
        newMenu.append(itemsList)
        itemsList.addEventListener('click', e => {
            e.preventDefault()
            showMenuDetails(item)})

    })
}

function showMenuDetails(menuData){
    const name = document.getElementById('dish-name')
    const img = document.getElementById('dish-image')
    const description = document.getElementById('dish-description')
    const price = document.getElementById('dish-price')
    name.textContent = menuData.name;
    img.src = menuData.image;
    description.textContent = menuData.description;
    price.textContent = menuData.price;
}


let cartNumber = 0
const form = document.getElementById('cart-form')
form.addEventListener('submit', e => {
    e.preventDefault()
    const cartAmount = document.getElementById('cart-amount').value
    cartNumber = cartNumber + Number.parseInt(cartAmount)
    const numberInCart = document.getElementById('number-in-cart')
    numberInCart.innerHTML = cartNumber
})