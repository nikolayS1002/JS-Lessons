// 1) 

function ex1() {
    const board = document.querySelector('.board')
    let block = document.createElement('div')

    let chessColor = true
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (chessColor) {
                block.classList.add('block', 'block_black')
            }
            else {
                block.classList.add('block', 'block_white')
            }
            block = document.createElement('div');
            board.appendChild(block);
            if (j == 0) {
                block.innerText = i + 1
                chessColor = !chessColor
            }

            chessColor = !chessColor
        }
    }
}

ex1()
