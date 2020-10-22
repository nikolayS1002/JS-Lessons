// 1) список простых чисел до 100

function ex1() {
    let n = 2
    let k = 2
    let PrimeNumerArr = []


    while (n <= 100) {
        PrimeNumerArr.push(n)
        k = 2
        while (k <= n) {
            if ((n % k == 0) && (n != k)) {
                PrimeNumerArr.pop()
                break
            }
            k++
        }
        n++

    }

    alert(PrimeNumerArr)




}

// ex1()

// 2) Функция подсчета суммы товаров в карзине

function ex2() {
    const Basket = []
    let n = 2
    while (n <= 10) {
        Basket.push(n)
        n = n + 2
    }
    Basket.push(15)
    return Basket
}

function countBasketPrice() {
    const Basket = ex2()
    let BasketSum = 0
    for (i = 0; i < Basket.length; i++) {
        BasketSum += Basket[i]
    }
    alert('Стоимость товаров в корзине равна: ' + BasketSum)
}
// countBasketPrice()


//3 Вывести с помощью цикла for числа от 0 до 9, 
// не используя тело цикла
function ex3() {
    for (n = 0; n < 10; alert(n++)) {

    }
}
// ex3 ()

//4 Нарисовать пирамиду с помощью console.log


function ex4() {
    let x = 'x'
    for (i = 0; i <= 19; i++) {
        console.log(x)
        x += 'x'
    }
}

ex4()