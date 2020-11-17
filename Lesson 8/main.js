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

    cartSum() {
        let result = MyCart.cartItems.reduce(function(sum, current) {
            return sum + (current.count * current.price);
        }, 0);
        return result
    }


    render() {
        const cartBlock = document.getElementById('id_cart')
        cartBlock.innerHTML = ''
        str = document.createElement('div')
        cartBlock.appendChild(str)
        str.classList.add('str')

        const firstStrBlock = cartBlock.querySelector('.str')
        for (let n = 0; n < 4; n++) {
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
                    block.innerText = 'Кол-во'
                    break
                case 3:
                    block.innerText = 'Цена'
                    break

            }
        }

        for (let i = 0; i < this.cartItems.length; i++) {
            str = document.createElement('div')
            cartBlock.appendChild(str)
            str.classList.add('str')
            str.id = 'cart_id_' + i
            for (let j = 0; j < 4; j++) {
                let strBlock = document.getElementById('cart_id_' + i)
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
                        block.innerText = this.cartItems[i].count
                        break
                    case 3:
                        block.innerText = this.cartItems[i].price
                        break
                }
            }
        }
        console.log()

        str = document.createElement('div')
        cartBlock.appendChild(str)
        str.classList.add('str')
        str.id = 'cart_id_last'
        const lastStrBlock = document.getElementById('cart_id_last')
        for (let n = 0; n < 2; n++) {
            block = document.createElement('div')
            lastStrBlock.appendChild(block)
            block.classList.add('block', 'block_total')
            switch (n) {
                case 0:
                    block.innerText = 'Общая сумма:'
                    break
                case 1:
                    block.innerText = this.cartSum()
                    break
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
            let repeat = true


            MyCart.cartItems.forEach(function(item) {
                if (item.name == prod.name) {
                    repeat = false
                    item.count++
                }
            })
            if (repeat) {
                MyCart.cartItems.push(prod)
            }
            MyCart.render()
        })
    }

    render(theProduct) {
        const listBlock = document.getElementById('id_list')
        str = document.createElement('div')
        listBlock.appendChild(str)
        str.classList.add('str')

        const firstListBlock = listBlock.querySelector('.str')
        for (let n = 0; n < 4; n++) {
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
                case 3:
                    block.innerText = ' '
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
const MyCart = new Cart

MyList.items = Catalog
MyList.render(MyList.items)