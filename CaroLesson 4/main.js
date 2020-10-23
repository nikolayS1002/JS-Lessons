// 1) 

// Написать функцию, преобразующую число в объект.
//  Передавая на вход число от 0 до 999, надо получить на выходе
//   объект, в котором в соответствующих свойствах описаны единицы,
//   сятки и сотни. Например, для числа 245 надо получить следующий
//   бъект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число 
//   превышает 999, необходимо выдать соответствующее сообщение 
//    помощью console.log и вернуть пустой объект.

function parse(number) {

    const obj = {}
    let x

    // if ((number >= 0) && (number < 1000)) {
        console.log(number % 10)
        obj.digits = 0
        obj.decades = 0
        obj.hundreds = 0
        const arr = []

        while (number >= 1) {
            x = number % 10
            arr.push(x)
            number = Math.floor(number / 10)
        }

        obj.digits = arr [0]
        obj.decades = arr [1]
        obj.hundreds = arr [2] 

        console.log(obj)

    // } else {
    //     console.log('Число за пределами заданной области [0, 999]')
    // }
}

// parse(prompt('введите число'))

// 2) Продолжить работу с интернет-магазином:

class Product {
    name = 'name'
    price = 100

    constructor(name,price) {
        this.name = name
        this.price = price
    }
}

const Scissors = new Product ('Scissors', 183)
const Pen = new Product ('Pen', 59)
const Paper = new Product ('Paper', 299)

let BasketPrice = 0

function countBasketPrice (Basket, Product) {
    BasketPrice = Basket + Product
}

countBasketPrice(BasketPrice, Scissors.price)
countBasketPrice(BasketPrice, Pen.price)
countBasketPrice(BasketPrice, Paper.price)

console.log('Стоимость товаров в корзине равна: ' + BasketPrice)

// Знаю, знаю. Нужно реализовать корзину 
// как родительский класс для Product)!
