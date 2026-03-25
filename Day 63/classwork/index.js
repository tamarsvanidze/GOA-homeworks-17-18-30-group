
//JavaScript Array Methods Task: Join, Slice, Splice


let fruits = ["apple", "orange", "banana", "grape"]


let citrus = fruits.slice(1, 3)


let fruitString = fruits.join("-")

 //function
function processFruits(arr) {
    let part = arr.slice(1, 3)
    return arr.join("-")
}