// 1)რიცხვის შემოწმება, , მომხმარებელი შეჰყავს ერთი რიცხვი და უნდა გამოიტანოს ინფორმაცია, არის ეს
//  რიცხვი ლუწი თუ კენტი.
let number = Number(prompt("Enter number: "))

if (number % 2 === 0) {
    alert(" number is even")
} else {
    alert(" number is odd")

}

//2)ტემპერატურის სტანდარტის შემოწმება, , მომხმარებელი შეჰყავს ტემპერატურა ცელსიუსში და უნდა 
// განსაზღვროს, თუ როგორი ტემპერატურაა, ცივი, ზომიერი თუ ცხელი

let temp = Number(prompt("Enter the temperature in Celsius:"))

if (temp < 10) {
    alert("Cold temperature")
} else if (temp <= 25) {
    alert("Moderate temperature")
} else {
    alert("Hot temperature")
}


//3) სკოლის შეფასების სისტემა, , მომხმარებელი შეჰყავს ქულა (0-100) და უნდა განსაზღვროს, რა შეფასება ეკუთვნის 
// მას შემდეგი პირობის მიხედვით: 90-100: A 80-89: B 70-79: C 60-69: D 0 - 59: F

let score = Number(prompt("Enter the score: "))
let grade
if (score >= 90) {
    grade = "A"
} else if (score >= 80) {
    grade = "B"
} else if (score >= 70) {
    grade = "C"
} else if (score >= 60) {
    grade = "D"
} else {
    grade = "F"
}

alert("Grade: " + grade)