// 1)
function Person(name, age, profession) {
  this.name = name
  this.age = age
  this.profession = profession

  this.introduce = function() {
    console.log("Hello, my name is " + this.name + ". I am " + this.age + " years old and I work as a " + this.profession + ".")
  }
}

//2) books 

function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year

  this.getSummary = function () {
    return this.title + " by " + this.author + ", published in " + this.year
  }
}


const book1 = new Book("Harry Potter", "J.K. Rowling", 1997)
const book2 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951)
const book3 = new Book("Jinsebis Taoba", "Dato Turashvili", 2008)

console.log(book1.getSummary())
console.log(book2.getSummary())
console.log(book3.getSummary())

//3)

function User(username, email, password) {
  this.username = username
  this.email = email
  this.password = password

  this.changePassword = function (newPassword) {
    this.password = newPassword
  }

  this.getDetails = function () {
    return "Username: " + this.username + ", Email: " + this.email
  }
}