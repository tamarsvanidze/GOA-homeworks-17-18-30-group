//შექმენით ფუნქცია, რომელიც განახორციელებს ყველა მათემათიკური ოპერაციას. (+, -, *, /, **, %)

function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
    case '**':
      return a ** b
    case '%':
      return a % b
    default:
      return "itnot operator"
  }
}
// 3. ნებისმიერი ფუნქცია შექმენით რაც  ვისწავლეთ იმ მასალის გამოყენებით

// 1. Ternary მაგალითი
function checkTernary(num) {
    return num > 0 ? "Positive" : (num === 0 ? "Zero" : "Negative")
}

// 2. If-Else მაგალითი
function checkIfElse(num) {
    if (num > 100) return "Big number"
    else if (num >= 10) return "Medium number"
    else return "Small number"
}



// 3. Boolean მაგალითი
function checkBoolean(num) {
    let isPositive = num > 0
    return isPositive
}

// 4. Switch მაგალითი
function checkSwitch(num) {
    switch(num) {
        case 7:
            return "Lucky seven!"
        case 13:
            return "Unlucky thirteen!"
        default:
            return "Just a number"
    }
}