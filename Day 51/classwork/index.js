//When provided with a number between 0-9, return it in words. 
// Note that the input is guaranteed to be within the range of 0-9.
//  Input: 1 Output: "One". If your language supports it, try using a  ternary operator

function switchItUp(number) { return number===0 ? console.log("Zero") : number===1  ? console.log("One") : number===2 ? console.log("Two") :  number===3  ? console.log("Three") : 
    number===4 ? console.log("Four") :  number===5  ? console.log("Five") : number===6 ? console.log("Six") : number===7 ? console.log("Seven") : number===8 ? console.log("Eight") :console.log("Nine") }

    
//2. Summation Write a program that finds the summation of every number from 1 to num (both inclusive).
//  The number will always be a positive integer greater than 0. Your function only needs to return the result,
//  what is shown between parentheses in the example below is how you reach that
//  result and it's not part of it, see the sample tests.   
var summation = function (num) {
  return num === 1 ? 1 : num + summation(num - 1)

}