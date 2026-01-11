// code wars

//  1)

function getGrade(s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3

    switch (true) {
        case avg >= 90:
            return 'A'
        case avg >= 80:
            return 'B'
        case avg >= 70:
            return 'C'
        case avg >= 60:
            return 'D'
        default:
            return 'F'
    }
}


// 2)


function rowSumOddNumbers(n) {
    let result = 0
    let value = 1

    for (let a = 1; a <= n; a++) {
        for (let b = 0; b < a; b++) {
            if (a === n) {
                result += value
            }
            value += 2
        }
    }

    return result
}   


//  3) 

function findNextSquare(sq) {
    let n = 0
    while (n * n < sq) {
        n++
    }
    if (n * n !== sq) {
        return -1
    }
    return (n + 1) * (n + 1)
}