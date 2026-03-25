//Leap year - Leap Year Challenge Exercise

// JavaScript

let year = parseInt(prompt("Enter a year:"))

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year.")
        } else {
            console.log(year + " is not a leap year.")
        }
    } else {
        console.log(year + " is a leap year.")
    }
} else {
    console.log(year + " is not a leap year.")
}


// ------------------------- 1 ------------------------


let names = ["Tako", "Giorgi", "Nino", "Luka", "Salome"]

let index = Math.floor(Math.random() * names.length)
let payer = names[index]

console.log(payer + " will pay for everyone's food!")

// --------------------------- 2 -----------------------------

function fizzBuzz(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]

    if (num % 3 === 0 && num % 5 === 0) {
      result.push("FizzBuzz")
    } else if (num % 3 === 0) {
      result.push("Fizz")
    } else if (num % 5 === 0) {
      result.push("Buzz")
    } else {
      result.push(num)
    }
  }

  return result
}