// const input = prompt('сколько будет 2+2')

// if (input === '4') {
//     alert('да четыре!)')
// } else {
//     alert('нет, хрен тебе)')
// }

// let max = 0
// let a = 30
// let b = 20

// max = a > b ? a : b
// alert(max)

// console.log(a)
// // console.log(b)
// // console.log(max)
// let n = 0
// function fibb (n) {
//     if (n <= 1) {
//         return n
//     }
//     return fibb (n - 1) + fibb (n - 2) 
// }

// alert(fibb(9))

let N = 0

function guess (tC) {
    if (tC === 1) {
        N = Math.round(Math.random() * 10)
        alert(`загаданное число ${N}`)
    }

    const myAnswer = +prompt('отгадайте число от 1 до 10 число')
    if (myAnswer === N) {
        alert(`Вы угадали за ${tC} попыток!`)
        guess(1)
    } else {
        guess(tC + 1)
    }
}    

guess(1)
