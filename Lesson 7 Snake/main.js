class Cell {
    snake = false
    food = false

    constructor() {

    }

    render(placeToRender) {
        const cellHTML = document.createElement('div')
        cellHTML.classList.add('cell')

        if (this.snake) {
            cellHTML.classList.add('snake')
        }

        if (this.food) {
            cellHTML.innerHTML = '*'
        }

        placeToRender.appendChild(cellHTML)
    }
}

class Field {
    n = 0
    m = 0
    field = []
    foodExists = false

    constructor(n, m) {
        this.n = n
        this.m = m

        this._createField()
    }

    _createField() {
        const { n, m } = this
        for (let i = 0; i < n; i++) {
            const row = []
            for (let j = 0; j < m; j++) {
                row.push(new Cell())
            }
            this.field.push(row)
        }
    }

    checkFoodExistence({ x, y }) {
        const cell = this.getCell(x, y)
        if (cell) {
            const existence = cell.food
            if (existence) {
                cell.food = false
                this.foodExists = false
            }

            return existence
        }
        return false
    }

    generateFood() {
        if (this.foodExists) {
            return
        }

        const rand = max => Math.floor(Math.random() * (max - 1))
        if (rand(10) < 3) {
            while (!this.foodExists) {
                const x = rand(this.m)
                const y = rand(this.n)
                const cell = this.getCell(x, y)
                if (cell && !cell.snake) {
                    cell.food = true
                    this.foodExists = true
                }
            }

        }
    }

    render() {
        const placeToRender = document.querySelector('.main')
        placeToRender.innerHTML = ''
        this.field.forEach(row => {
            const rowHTML = document.createElement('div')
            rowHTML.classList.add('row')

            row.forEach(cell => {
                cell.render(rowHTML)
            })

            placeToRender.appendChild(rowHTML)
        })
    }

    getCell(x, y) {
        return this.field[y] && this.field[y][x]
    }

    stepOnCell({ x, y }) {
        const newCell = this.getCell(x, y)
        if (newCell && !newCell.snake) {
            newCell.snake = true
            return true
        }
        return false
    }

    clearCell({ x, y }) {
        const newCell = this.getCell(x, y)
        if (newCell) {
            newCell.snake = false
        }
    }

}

class Snake {
    body = []
    direction = null
    fed = false


    constructor(startX = 0, startY = 0, direction = 'right') {
        this.direction = direction
        this.body = [{ x: Math.floor(startX), y: Math.floor(startY) }]
    }

    changeDirection(newDirection) {
        if (this.direction === 'up' || this.direction === 'down') {
            if (newDirection === 'up' || newDirection === 'down') {
                return
            }
        }

        if (this.direction === 'right' || this.direction === 'left') {
            if (newDirection === 'right' || newDirection === 'left') {
                return
            }
        }

        this.direction = newDirection
    }

    move() {
        const currentHead = this.body[this.body.length - 1]
        const newCoords = {}

        switch (this.direction) {
            case 'right':
                newCoords.x = currentHead.x + 1
                newCoords.y = currentHead.y
                break
            case 'left':
                newCoords.x = currentHead.x - 1
                newCoords.y = currentHead.y
                break
            case 'up':
                newCoords.x = currentHead.x
                newCoords.y = currentHead.y - 1
                break
            case 'down':
                newCoords.x = currentHead.x
                newCoords.y = currentHead.y + 1
                break
        }

        let leaved = {}

        if (!this.fed) {
            leaved = this.body.shift()
        } else {
            this.fed = false
        }

        this.body.push(newCoords)

        return {
            leaved,
            stepped: newCoords,
        }
    }
}

class Game {

    Field = null
    Snake = null
    score = 0

    constructor(n, m) {
        this._setEventListeners()

        this.Field = new Field(n, m)
        this.Snake = new Snake(n / 2, m / 2)
    }

    _setEventListeners() {

        const UP = 38
        const DOWN = 40
        const LEFT = 37
        const RIGHT = 39
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case UP:
                    this.Snake.changeDirection('up')
                    break
                case DOWN:
                    this.Snake.changeDirection('down')
                    break
                case LEFT:
                    this.Snake.changeDirection('left')
                    break
                case RIGHT:
                    this.Snake.changeDirection('right')
                    break
            }
        })
    }

    start() {
        this.logicLoop = setInterval(() => {
            const { stepped, leaved } = this.Snake.move()

            const foodOnCellExists = this.Field.checkFoodExistence(stepped)
            if (foodOnCellExists) {
                this.Snake.fed = true
                this.score++
            }
            const result = this.Field.stepOnCell(stepped)
            if (result) {
                this.Field.clearCell(leaved)
                this.Field.generateFood()
                this.Field.render()
            } else {
                alert(`You Lose! Score: ${this.score}`)
                clearInterval(this.logicLoop)
            }
        }, 500)
    }
}

const MyGame = new Game(10, 15)
MyGame.start()