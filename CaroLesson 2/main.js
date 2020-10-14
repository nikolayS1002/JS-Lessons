// 1)

function ex1() {
    var a = 1, b = 1, c, d;
    // i++ и ++i прибавляют к a единицу, но i++ возвращает i,
    // ++i возвращает (i + 1) 
    c = ++a; alert(c);           // 2 - ++a возвращает (a + 1) = 2, уже a = 2
    d = b++; alert(d);           // 1 - b++ возвращает b, уже b = 2
    c = (2 + ++a); alert(c);      // 5 - a = 2, (2 + 2 + 1) = 5, теперь a = 3
    d = (2 + b++); alert(d);      // 4 - b = 2, 2 + 2 = 4, теперь b = 3
    alert(a);                    // 3 - соответственно
    alert(b);                    // 3 - 
}
//ex1()

// 2)

function ex2() {
    var a = 2;
    var x = 1 + (a *= 2);
}
// ex2()
// (a *= 2) тождественно a = a * 2
// то есть взять переменную a, умножить на 2 и сохратить в переменную a
// x == 5

// 3)
function ex3() {
    let a = +prompt('введите a')
    let b = +prompt('введите b')

    if (a >= 0 & b >= 0) {
        alert(a - b)
    } else if (a < 0 & b < 0) {
        alert(a * b + 'vtas')
    } else {
        alert(a + b)
    }
}
// ex3()

// 4)
// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

function ex4() {
    let a = +prompt('введите a от 0 до 15')

    switch (a) {
        case 0:
            alert(a); a++;
        case 0:
            alert(a); a++;
        case 1:
            alert(a); a++;
        case 2:
            alert(a); a++;
        case 3:
            alert(a); a++;
        case 4:
            alert(a); a++;
        case 5:
            alert(a); a++;
        case 6:
            alert(a); a++;
        case 7:
            alert(a); a++;
        case 8:
            alert(a); a++;
        case 9:
            alert(a); a++;
        case 10:
            alert(a); a++;
        case 11:
            alert(a); a++;
        case 12:
            alert(a); a++;
        case 12:
            alert(a); a++;
        case 13:
            alert(a); a++;
        case 14:
            alert(a); a++;
        case 15:
            alert(a);
            break
        default:
            alert('а не попадает в заданный диапазон')
            break
    }
}

// ex4()

// 5)
// alert(sum(9, 7))
// alert(sub(6, 1))
// alert(mult(3, 6))
// alert(division(9, 3))

function sum(a, b) {
    a = a + b
    return a
}

function sub(a, b) {
    a = a - b
    return a
}

function mult(a, b) {
    a = a * b
    return a
}

function division(a, b) {
    a = a / b
    return a
}

// 6)
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 1:
            return sum(arg1, arg2)
        case 2:
            return sub(arg1, arg2)
        case 3:
            return mult(arg1, arg2)
        case 4:
            return division(arg1, arg2)
        default:
            return 'Неверная математическая операция'
    }
}

let x1 = +prompt('введите первое число')
let z = +prompt('Какую математическую операцию вы хотите совершить? 1 - сложение, 2- вычитание, 3 - умножение, 4 - деление')
let x2 = +prompt('введите второе число')
alert(mathOperation(x1, x2, z))