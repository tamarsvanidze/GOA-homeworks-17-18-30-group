// codewars 
//1)

function replace(s) {
  let result = ""
  let vowels = "aeiou"

  for (let char of s) {
    if (vowels.includes(char.toLowerCase())) {
      result += "!"
    } else {
      result += char
    }
  }

  return result
}

// 2)
function isSquare(n) {
  if (n < 0) return false
  for (let i = 0; i * i <= n; i++) {
    if (i * i === n) {
      return true
    }
  }

  return false
}

//  3)

function sumTwoSmallestNumbers(numbers) {
    let smallest = numbers[0]
    let secondSmallest = numbers[1]
    if (secondSmallest < smallest) {
        let temp = smallest
        smallest = secondSmallest
        secondSmallest = temp
    }

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            secondSmallest = smallest
            smallest = numbers[i]
        } else if (numbers[i] < secondSmallest) {
            secondSmallest = numbers[i]
        }
    }

    return smallest + secondSmallest
}


//  4)

function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false
        }
    }
    return true
}
