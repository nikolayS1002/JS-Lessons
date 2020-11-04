// Используем классы в домашнем задании. 
// Необходимо: класс Cart (корзина), класс Product (товар).
// В классе корзины реализуем методы:
// 1) Добавление товара в корзину
// 2) Подсчет стоимости в корзине
// 3) Рендер корзины
let str = document.createElement('div')
let block = document.createElement('div')

class Product {
    name = 'name'
    price = 0
    count = 1

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

class Cart {
    cartItems = []

    addInCart(name, price) {
        let Prod = new Product(name, price)
        return Prod
    }

    addInCart2(newItem) {
        this.items.push(newItem)
    }

    render() {
        const cartBlock = document.getElementById('id_cart')
        cartBlock.innerHTML = ''
        str = document.createElement('div')
        cartBlock.appendChild(str)
        str.classList.add('str')

        const firstStrBlock = cartBlock.querySelector('.str')
        for (let n = 0; n < 3; n++) {
            block = document.createElement('div')
            firstStrBlock.appendChild(block)
            block.classList.add('block', 'block_title')
            switch (n) {
                case 0:
                    block.innerText = 'Номер'
                    break
                case 1:
                    block.innerText = 'Название'
                    break
                case 2:
                    block.innerText = 'Цена'
                    break

            }
        }

        for (let i = 0; i < this.cartItems.length; i++) {
            str = document.createElement('div')
            cartBlock.appendChild(str)
            str.classList.add('str')
            str.id = 'cart_id_' + i
            for (let j = 0; j < 3; j++) {
                const strBlock = document.getElementById('cart_id_' + i)
                block = document.createElement('div')
                strBlock.appendChild(block)
                block.classList.add('block')
                switch (j) {
                    case 0:
                        block.innerText = i + 1
                        break
                    case 1:
                        block.innerText = this.cartItems[i].name
                        break
                    case 2:
                        block.innerText = this.cartItems[i].price
                        break
                }
            }
        }
    }
}

class List extends Cart {
    items = []

    constructor() {
        super()
    }

    addItem(item) {
        this.items.push(item)
    }

    btnRender(placeToRender, id) {
        const btn = document.createElement('button')
        placeToRender.appendChild(btn)
        btn.classList.add('btn')
        btn.innerText = 'Купить'

        btn.addEventListener('click', () => {
            let prod = this.items[id]


            MyCart.cartItems.forEach(function(item) {
                if (item.name == prod.name) {
                    console.log('1')

                    // MyCart.cartItems.pop(prod)
                } else {}
            })
            MyCart.cartItems.push(prod)
            MyCart.render()
        })
    }

    render(theProduct) {
        const listBlock = document.getElementById('id_list')
        str = document.createElement('div')
        listBlock.appendChild(str)
        str.classList.add('str')

        const firstListBlock = listBlock.querySelector('.str')
        for (let n = 0; n < 3; n++) {
            block = document.createElement('div')
            firstListBlock.appendChild(block)
            block.classList.add('block', 'block_title')
            switch (n) {
                case 0:
                    block.innerText = 'Номер'
                    break
                case 1:
                    block.innerText = 'Название'
                    break
                case 2:
                    block.innerText = 'Цена'
                    break

            }
        }

        for (let i = 0; i < theProduct.length; i++) {
            str = document.createElement('div')
            listBlock.appendChild(str)
            str.classList.add('str')
            str.id = 'id_list_' + i
            const strBlock = document.getElementById('id_list_' + i)
            for (let j = 0; j < 3; j++) {
                const strBlock = document.getElementById('id_list_' + i)
                block = document.createElement('div')
                strBlock.appendChild(block)
                block.classList.add('block')
                switch (j) {
                    case 0:
                        block.innerText = i + 1
                        break
                    case 1:
                        block.innerText = theProduct[i].name
                        break
                    case 2:
                        block.innerText = theProduct[i].price
                        break
                }
            }
            this.btnRender(strBlock, i)
        }
    }



}


let totalCost = Catalog.reduce(function(sum, Product) {
    return sum + Product.price
}, 0)

const MyList = new List
MyList.items = Catalog

const MyCart = new Cart
console.log(MyCart.cartItems)

// let n = 2
// MyCart[n] = MyCart.addInCart(Catalog[n].name, Catalog[n].price)



// console.log(MyCart.Product)
// MyCart.render()
MyList.render(MyList.items)




















// let str = document.createElement('div')
// let block = document.createElement('div')
// const cartBlock = document.querySelector('.main')
//     str = document.createElement('div')
//     cartBlock.appendChild(str)
//     str.classList.add('str')

//     const firstStrBlock = document.querySelector('.str')        
//     for (n = 0; n < 3; n++) {
//         block = document.createElement('div')
//         firstStrBlock.appendChild(block)
//         block.classList.add('block', 'block_title')
//         switch (n) {
//             case 0:
//                 block.innerText = 'Cart id'
//                 break
//             case 1:
//                 block.innerText = 'Product name'
//                 break
//             case 2:
//                 block.innerText = 'Price'
//                 break

//         }
//     }

// for (i = 0; i < cart.length; i++) {
//     str = document.createElement('div')
//     cartBlock.appendChild(str)
//     str.classList.add('str')
//     str.id = 'id_' + i

//     for (j = 0; j < 3; j++) {
//         const strBlock = cartBlock.getElementById('id_' + i)
//         block = document.createElement('div')
//         strBlock.appendChild(block)
//         block.classList.add('block')
//         switch (j) {
//             case 0:
//                 block.innerText = i + 1
//                 break
//             case 1:
//                 block.innerText = (cart[i].name)
//                 break
//             case 2:
//                 block.innerText = (cart[i].price)
//                 break

//         }
//     }
// }

// let cartCost = cart.reduce(function (sum, product) {
//     return sum + product.price
// }, 0)

// str = document.createElement('div')
//     cartBlock.appendChild(str)
//     str.classList.add('str')
//     str.id = 'id_last'


// for (k = 0; k < 2; k++) {
//     const lastStrBlock = document.getElementById('id_last')
//     block = document.createElement('div')
//     lastStrBlock.appendChild(block)
//     block.classList.add('block', 'block_title')
//     switch (k) {
//         case 0:
//             block.innerText = 'Total price:'
//             break
//         case 1:
//             block.innerText = cartCost
//             break

//     }
// }