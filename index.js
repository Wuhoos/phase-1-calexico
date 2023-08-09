document.addEventListener("DOMContentLoaded", listMenuItems)

function listMenuItems(){
    fetch('http://localhost:3000/menu')
    .then(Response => Response.json())
    .then(menuList => {
        menuDisplay(menuList)
        renderMenuDetail(menuList[0])
        addingToCart()
    })
}

function menuDisplay(menuList){
    const mainMenu = document.querySelector('#menu-items')
    menuList.forEach(menuItem => {
        const menuTag = document.createElement('span')
        menuTag.textContent = menuItem.name
        mainMenu.append(menuTag)
        menuTag.addEventListener('click', () => {
            renderMenuDetail(menuItem)})
    })
}

function renderMenuDetail(menuItem){
    const image = document.getElementById('dish-image')
    const name = document.querySelector('#dish-name')
    const description = document.querySelector('#dish-description')
    const price = document.querySelector('#dish-price')

    image.src = menuItem.image
    name.textContent = menuItem.name
    description.textContent = menuItem.description
    price.textContent = `$${menuItem.price}`
}

function addingToCart(){
    const submitForm = document.getElementById('cart-form')
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputValue = document.getElementById('cart-amount').value
        const totalValue = document.getElementById('number-in-cart')
        totalValue.textContent = parseInt(totalValue.textContent) + parseInt(inputValue)
    })
}


// addingToCart()