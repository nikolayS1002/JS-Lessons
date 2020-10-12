function generateNumber() {
    const arr = []
    while (arr.length < 4) {
        const d = Math.floor(Math.random() * 10)
        if (arr.indexOf(d) < 0) {
            arr.push(d)
        }
    }

    return arr.join('')
}

function game() {
    const N = generateNumber()
    alert(N)
    let tryCounter = 1

    while (true) {
        const myAns = prompt('введите четырехзначное число:')
        if (myAns === N) {
            break
        }
        let cow = 0
        let bull = 0

        for (let i = 0; i < myAns.length; i++) {
            const digit = myAns[i]
            const found = N.indexOf(digit)
            if (found >= 0) {
                if (found === i) {
                    bull++
                } else {
                    cow++
                }
            }
        }

        alert(`У вас ${cow} коров и ${bull} быков`)
        tryCounter++
    }
    alert(`вы угадали за ${tryCounter} попыток`)
}

game()