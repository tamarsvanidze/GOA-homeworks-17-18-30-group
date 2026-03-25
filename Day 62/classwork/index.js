
//JavaScript Array Methods Task


function modifyArray(arr1, arr2) {
    // 1
    let concatArray = arr1.concat(arr2)

    // 2
    concatArray.copyWithin(concatArray.length - 2, 0, 2)

    // 3
    concatArray.fill(0, concatArray.length - 3)

    // 4
    let lastElement = concatArray.pop()

    // 5
    let firstElement = concatArray.shift()

    // 6
    concatArray.unshift(10, 20)
}


let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

modifyArray(array1, array2)
