//Working with Strings and Numbers

// 1
let numsArray = [10, 20, 30, 40, 50]
let strArray = ["apple", "banana", "cherry"]

// 2
let combinedArray = numsArray.concat(strArray)
// 3
combinedArray.copyWithin(4, 0, 3)
// 4
combinedArray.fill("filled", 2, 4)
// 5
combinedArray.pop()
// 6
combinedArray.shift()
// 7
combinedArray.unshift(100, 200)

console.log(combinedArray)


function modifyArray(inputArray) {
    let result = [...inputArray]
    result.copyWithin(4, 0, 3)
    result.fill("filled", 2, 4)
    result.pop()
    result.shift()
    result.unshift(100, 200)

    return result
}

//Array of Objects
let people = [{name:'Marta'}, {name:'elene'}]
let places = [{place:'Paris'}, {place:'Georgia'}]

let merged = people.concat(places)


merged.copyWithin(2, 0, 2)


merged.fill({city:'Tbilisi'}, merged.length - 2)


merged.pop()


merged.shift()


merged.unshift({name:'nika'}, {name:'David'})

console.log(merged)


function modifyObjects(peopleArr, placesArr) {
    let arr = peopleArr.concat(placesArr)
    arr.copyWithin(2, 0, 2)
    arr.fill({city:'Tbilisi'}, arr.length - 2)
    arr.pop()
    arr.shift()
    arr.unshift({name:'Charlie'}, {name:'David'})
    return arr
}

console.log(modifyObjects(people, places))

//Working with Mixed Data Types

// 1
let mixedArray = [1, 2, 3, 'four', 5]
// 2
let extendedArray = mixedArray.concat([true, false])
// 3
extendedArray.copyWithin(0, 2, 4)
//4
extendedArray.fill(0, 4, 7)
// 5
extendedArray.pop();
// 6
extendedArray.shift();
// 7
extendedArray.unshift(null, undefined)
console.log(extendedArray)

// Function 
function modifyMixed(arr) {
    let newArr = arr.concat([true, false])
    newArr.copyWithin(0, 2, 4)
    newArr.fill(0, 4, 7)
    newArr.pop()
    newArr.shift()
    newArr.unshift(null, undefined)
    return newArr
}

//JavaScript Array Methods Task: Comprehensive Exercise

// 1
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let mergedArray = arr1.concat(arr2)

// 3
mergedArray.copyWithin(5, 0, 3)

//  4
mergedArray.fill(0, 6)

//  5
mergedArray.pop()

//  6
mergedArray.shift()

// 7
mergedArray.unshift(100, 200)

//  8
mergedArray.splice(2, 2, ...arr3)

//  9
let slicedArray = mergedArray.slice(-5)

//  10
let resultString = slicedArray.join(',')

console.log(resultString)

// Function 
function comprehensiveArrayTask(a, b, c) {
    let merged = a.concat(b)
    merged.copyWithin(5, 0, 3)
    merged.fill(0, 6)
    merged.pop()
    merged.shift()
    merged.unshift(100, 200)
    merged.splice(2, 2, ...c)
    let sliced = merged.slice(-5)
    return sliced.join(',')
}



//Student Grades Management

// 1
let students = ['Tako', 'Gia', 'Lia']
let grades = [85, 92, 78]

//  2
function addStudent(name, grade) {
    students.unshift(name)
    grades.unshift(grade)
    return {students, grades}
}

//  3
function removeLastStudent() {
    students.pop()
    grades.pop()
    return {students, grades}
}

//  4
function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade)
    return grades
}

//  5
function updateGrades(newGrade) {
    grades.fill(newGrade)
    return grades
}




//Playlist Management


let playlist = ["Song1", "Song2", "Song3", "Song4"]


function addSong(songTitle) {
    playlist.unshift(songTitle)
    return playlist
}

function removeLastSong() {
    playlist.pop()
    return playlist
}


function moveSongs() {
    playlist.copyWithin(2, 0, 2)
    return playlist
}


function combinePlaylists(secondPlaylist) {
    let combined = playlist.concat(secondPlaylist)
    return combined
}

// Shopping Cart

// 1
let cartItems = ["Milk", "Bread", "Eggs"]
let prices = [2.5, 1.5, 3.0]

// 2
function addItem(item, price) {
    cartItems.unshift(item)
    prices.unshift(price)
    return [cartItems, prices]
}

// 3
function removeFirstItem() {
    cartItems.shift()
    prices.shift()
    return [cartItems, prices]
}

// 4
function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem)
    prices.splice(index, 1, newPrice)
    return [cartItems, prices]
}

// 5
function createReceipt() {
    let receipt = cartItems.join(", ")
    return receipt
}

// 6
function applyDiscount(discountPrice) {
    prices.fill(discountPrice)
    return prices
}