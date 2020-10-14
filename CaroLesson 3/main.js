// 1)

function ex1() {
    n = 0
    k = 2

    while (n <= 100) {
        while (k < n) {
            if (n % k != 0) {
                alert(n)                
            }
            k++
        }
        n++
    }

    
    
    
}

ex1()

// 2)

/*const arr = []
let n = 0
while (n <= 100) {
    arr.push(n)
    n++
}

alert(arr.length) 

n%k == 0;*/