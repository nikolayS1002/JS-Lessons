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

let totalCost = Catalog.reduce(function (sum, Product) {
    return sum + Product.price
}, 0)

const cart = []
cart.push(Catalog[0], Catalog[2], Catalog[5])

let str = document.createElement('div')
let block = document.createElement('div')

for (i = 0; i < cart.length; i++) {
    const cartBlock = document.querySelector('.main')
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









// function ex2() {
//     const board = document.querySelector('.board')
//     let block = document.createElement('div')

//     const nameArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
//     let chessColor = true
//     for (i = 0; i < 8; i++) {
//         for (j = 0; j < 8; j++) {
//             if (chessColor) {
//                 block.classList.add('block', 'block_black')
//             }
//             else {
//                 block.classList.add('block', 'block_white')
//             }
//             block = document.createElement('div');
//             board.appendChild(block);
//             if (j == 0) {
//                 block.innerText = i + 1
//                 chessColor = !chessColor
//             }

//             if (i == 0) {
//                 block.innerText = nameArr [j]
//             }

//             chessColor = !chessColor
//         }
//     }
// }

// ex1()

