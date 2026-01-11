//შექმენით წიგნის ობიექტი, რომელშიც იქნება შეტანილი რამოდენიმე თვისება, ეს თვისებებია: 
//  წიგნის სათაური, წიგნის ავტორი, წიგნის გამოშვების წელი, წიგნის ჟანრი, წიგნის ფასი.
//ობიექტის შექმნის შემდეგ, გამოიტანეთ პირველი ობიექტი.,
//გამოიტანეთ სათითაო თვისების მნიშვნელობა. გამოიყენეთ გამოტანის ორივე გზა(Dot & Bracket Notation),
// //შეტანილი თვისებებით დაბეჭდეთ ერთი დიდი წინადადება, რომელშიც გამოყენებული იქნება ყველა თვისება.

let book = {
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  year: 1997,
  genre: "Fantasy",
  price: 30
}

console.log(book)
// dot notation
console.log(book.title)
console.log(book.author)

// bracket notation
console.log(book["year"])
console.log(book["genre"])
console.log(book["price"])

console.log("The book titled " + book.title + " was written by " + book.author + ", published in " + book.year + ". Its genre is " + book.genre + " and the price of the book is " + book.price + " GEL.")




//შეიტანეთ და შექმენით სტუდენტის ობიექტი, რომელშიც იქნება შეტანილი რამდენიმე თვისება: 
// სტუდენტის სახელი, სტუდენტის ასაკი, სტუდენტის ფაკულტეტი, სტუდენტის კურსი
// , საშუალო ქულა., ობიექტის შექმნის შემდეგ, გამოიტანეთ პირველი ობიექტი.,
//  გამოიტანეთ სათითაო თვისების მნიშვნელობა, გამოიყენეთ ორივე გზა
//  (Dot Notation და Bracket Notation)., შეტანილი თვისებებით დაბეჭდეთ ერთი 
// დიდი წინადადება, რომელშიც გამოყენებული იქნება ყველა თვისება.

let student = {
  name: "gemali",
  age: 20,
  faculty: "Computer Science",
  course: 2,
  averageGrade: 3.9
}

console.log(student)

// dot 
console.log(student.name)
console.log(student.age)

// bracket 
console.log(student["faculty"])
console.log(student["course"])
console.log(student["averageGrade"])

console.log("The student named " + student.name + " is " + student.age + " years old, studies at the " + student.faculty + " faculty, is in course " + student.course + " and has an average grade of " + student.averageGrade + ".")
