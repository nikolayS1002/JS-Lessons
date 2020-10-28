// 2) Делаем корзину. Есть массив с товарами. 
// Делаем блок с корзиной. Выводим каждый товар в этом блоке.
//  Под списком товаров выводим их цену.

class Product {
    name = 'name'
    price = 0

    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const Catalog = [
    new Product('Galaxy Note 20 Ultra', 99990),
    new Product('Galaxy Note 20', 79990),
    new Product('Galaxy A31', 16990),
    new Product('Galaxy A41', 18990),
    new Product('Galaxy S20', 69990),
    new Product('Galaxy S10', 44990)
]

let totalCost = Catalog.reduce(function(sum, Product) {
    return sum + Product.price
}, 0)

const cart = []
cart.push(Catalog[0], Catalog[2], Catalog[5])

let str = document.createElement('div')
let block = document.createElement('div')
const cartBlock = document.querySelector('.main')
str = document.createElement('div')
cartBlock.appendChild(str)
str.classList.add('str')

const firstStrBlock = document.querySelector('.str')
for (n = 0; n < 3; n++) {
    block = document.createElement('div')
    firstStrBlock.appendChild(block)
    block.classList.add('block', 'block_title')
    switch (n) {
        case 0:
            block.innerText = 'Cart id'
            break
        case 1:
            block.innerText = 'Product name'
            break
        case 2:
            block.innerText = 'Price'
            break

    }
}

for (i = 0; i < cart.length; i++) {
    str = document.createElement('div')
    cartBlock.appendChild(str)
    str.classList.add('str')
    str.id = 'id_' + i

    for (j = 0; j < 3; j++) {
        const strBlock = document.getElementById('id_' + i)
        block = document.createElement('div')
        strBlock.appendChild(block)
        block.classList.add('block')
        switch (j) {
            case 0:
                block.innerText = i + 1
                break
            case 1:
                block.innerText = (cart[i].name)
                break
            case 2:
                block.innerText = (cart[i].price)
                break

        }
    }
}

let cartCost = cart.reduce(function(sum, product) {
    return sum + product.price
}, 0)

str = document.createElement('div')
cartBlock.appendChild(str)
str.classList.add('str')
str.id = 'id_last'


for (k = 0; k < 2; k++) {
    const lastStrBlock = document.getElementById('id_last')
    block = document.createElement('div')
    lastStrBlock.appendChild(block)
    block.classList.add('block', 'block_title')
    switch (k) {
        case 0:
            block.innerText = 'Total price:'
            break
        case 1:
            block.innerText = cartCost
            break

    }
}