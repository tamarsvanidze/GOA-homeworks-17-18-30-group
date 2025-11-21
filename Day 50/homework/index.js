//Logical or boolean operators

//Complete the program to output <b>am</b> to the console if the hour
//  is in the range of 0 to 11 (inclusive), and output <b>pm</b> if it's not.
//Sample Input 13
//Sample Output pm
let hour = Number(prompt("enter hour :"))

if (hour >= 0 && hour <= 11){
    console.log("am")
}else{
    console.log("pm")
}
//switch - დღის განმარტება, მოამზადე კოდი, რომელიც switch განცხადების 
// გამოყენებით განსაზღვრავს დღის სახელს კვირის დღესთან შესაბამისობაში. 
// მაგალითად: 1 -> ორშაბათი 2 -> სამშაბათი 7 -> კვირა თუ 
// რიცხვი 1-დან 7-მდე არ არის, დაბეჭდოს: "არასწორი დღე"

let day = Number(prompt("Enter the day number 1-7:"));

switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")
}

//switch - ამინდის პროგნოზი, მოამზადე კოდი, რომელიც switch - ს გამოყენებით 
// განსაზღვრავს ამინდის ტიპს. მომხმარებელი შეიყვანს რიცხვს, რომელიც შემდეგი 
// ამინდების შესატყვისი უნდა იყოს: 1 -> მზიანი 2 -> წვიმიანი 3 ->
//  მოღრუბლული 4 -> ქარიანი თუ რიცხვი სხვაა -> "არ არის დადგენილი".

let weather = Number(prompt("შეიყვანე რიცხვი 1-4მდე:"))

switch (weather) {
    case 1:
        console.log("მზიანი")
        break
    case 2:
        console.log("წვიმიანი")
        break
    case 3:
        console.log("მოღრუბლული")
        break
    case 4:
        console.log("ქარიანი")
        break
    default:
        console.log("არ არის დადგენილი")
}
