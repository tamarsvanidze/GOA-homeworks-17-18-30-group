// JavaScript Array Methods Task: Comprehensive Exercise

function comprehensiveArrayTask(arr1, arr2, arr3) {
    // 1
    let mergedArray = arr1.concat(arr2)

    // 2
    mergedArray.copyWithin(5, 0, 3)

    // 3
    mergedArray.fill(0, 6)

    // 4
    mergedArray.pop()
    mergedArray.shift()
    // 5
    mergedArray.unshift(100, 200)

    // 6
    mergedArray.splice(2, 2, ...arr3)

    // 7
    let slicedArray = mergedArray.slice(-5)
    // 8
    return slicedArray.join(',')
}


let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [7, 8]

console.log(comprehensiveArrayTask(array1, array2, array3))

//Student Grades Management


let students = ["Gio", "Nika", "Lazare"]
let grades = [85, 92, 78]


function addStudent(name, grade) {
    students.unshift(name)
    grades.unshift(grade)
    return { students, grades }
}

function removeLastStudent() {
    students.pop()
    grades.pop()
    return { students, grades }
}

function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade)
    return grades
}

function updateGrades(newGrade) {
    grades.fill(newGrade)
    return grades
}

console.log(addStudent("Shalva", 90))
console.log(removeLastStudent())
console.log(replaceGrade(1, 95))
console.log(updateGrades(100))

//Playlist Management

let playlist = ["Song1", "Song2", "Song3"]


function addSong(title) {
    playlist.unshift(title)
    return playlist
}

function removeLastSong() {
    playlist.pop()
    return playlist
}

function moveSongs() {
    playlist.copyWithin(playlist.length - 2, 0, 2)
    return playlist
}

function combinePlaylists(otherPlaylist) {
    return playlist.concat(otherPlaylist)
}

console.log(addSong("Song4"))
console.log(removeLastSong())
console.log(moveSongs())
console.log(combinePlaylists(["Song X", "Song Y"]))

//Shopping Cart

// საწყისი მონაცემები
let cartItems = ["Apple", "Banana", "Orange"];
let prices = [1.2, 0.8, 1.5];


function addItem(item, price) {
    cartItems.unshift(item)
    prices.unshift(price)
    return { cartItems, prices }
}

function removeFirstItem() {
    cartItems.shift()
    prices.shift()
    return { cartItems, prices }
}

function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem)
    prices.splice(index, 1, newPrice)
    return { cartItems, prices }
}

function createReceipt() {
    return cartItems.join(", ")
}

function applyDiscount(discountPrice) {
    prices.fill(discountPrice)
    return prices
}

console.log(addItem("Grapes", 2.0))
console.log(removeFirstItem())
console.log(replaceItem(1, "Mango", 1.8))
console.log(applyDiscount(0.5))


//Library Management System

let library = [
    { title: "Book A", copies: 3 },
    { title: "Book B", copies: 5 },
    { title: "Book C", copies: 2 }
];

function addBook(book) {
    library.push(book)
    return library
}

function removeLastBook() {
    library.pop()
    return library
}

function updateBookCopies(title, newCopies) {
    let index = library.findIndex(b => b.title === title)
    if (index !== -1) {
        library.splice(index, 1, { ...library[index], copies: newCopies })
    }
    return library
}

function listBooks() {
    return library.map(b => b.title).join(", ")
}

function extractBooks(count = 2) {
    return library.slice(0, count)
}

function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1)
    return library
}


function resetCopies(number) {
    library.forEach(b => b.copies = number)
    return library
}   

function removeFirstBook() {
    library.shift()
    return library
}


function addFirstBook(book) {
    library.unshift(book)
    return library
}


console.log(addBook({ title: "Book D", copies: 4 }))
console.log(removeLastBook())
console.log(listBooks())
console.log(extractBooks())
console.log(modifyBooks())
console.log(resetCopies(5))
console.log(removeFirstBook())

//JavaScript Array Methods Task: Comprehensive Array Manipulation

// lists
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let nestedArray = [7, [8, 9], 10]

// 1
let combinedArray = arr1.concat(arr2)
// 2
combinedArray.copyWithin(5, 0, 3)
// 3.
combinedArray.fill(0, 6)
// 4
combinedArray.pop()
// 5
combinedArray.shift()
// 6
combinedArray.unshift(100, 200)
// 7
combinedArray.splice(2, 2, "x", "y", "z")
// 8
let slicedArray = combinedArray.slice(-5)
// 9
let joinedString = slicedArray.join(",")
// 10
let flatArray = nestedArray.flat()
// 11
let hasEight = flatArray.includes(8)
// 12
let indexNine = flatArray.indexOf(9)


//Task 7:


let firstArr = [1, 2, 3]
let secondArr = [4, 5, 6]
let deepArray = [7, [8, 9], 10]


// 1
let resultArray = firstArr.concat(secondArr)
// 2
resultArray.copyWithin(4, 0, 2)
// 3
resultArray.fill(0, 2, 5)
// 4
resultArray.pop()
// 5
resultArray.shift()
// 6
resultArray.unshift(10, 20)
// 7
resultArray.splice(2, 2, 30, 40)
// 8
let lastElements = resultArray.slice(-3)
// 9
let finalString = lastElements.join("-")
// 10
let flatResult = deepArray.flat()
// 11
let hasNine = flatResult.includes(9)
// 12
let indexTen = flatResult.indexOf(10)
// 13
let lastIndexNine = flatResult.lastIndexOf(9)
// 14
flatResult.push(13)

//Task 8:

// 1
let numbers = [10, 20, 30, 40, 50]
// 2
let more = [60, 70, 80]
let combined = numbers.concat(more)
// 3
numbers.copyWithin(3, 1, 3)
// 4
numbers.fill(100, 0, 3)
// 5
let last = numbers.pop()
// 6
let first = numbers.shift()
// 7
numbers.unshift(5, 15)
// 8
let str = numbers.join("-")
// 9
let part = numbers.slice(1, 4)
// 10
numbers.splice(1, 2, 200, 300)
// 11
let nestedArr = [1, [2, 3], [4, [5, 6]]]
let flatArr = nestedArr.flat(2)
// 12
let has50 = numbers.includes(50)
// 13
let index30 = numbers.indexOf(30)
// 14
let lastIndex20 = numbers.lastIndexOf(20)
// 15
numbers.push(90, 100)