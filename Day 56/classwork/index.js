// code wars

// 1) You will be given an array and a limit value. You must check that all 
// values in the array are below or equal to
//  the limit value. If they are, return true. Else, return false.
//You can assume all values in the array are numbers.

function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false
        }
    }
    return true
}

// 2)  Replace all vowel to exclamation mark in the sentence. 
// aeiouAEIOU is vowel.Examples
//"Hi!" --> "H!!"
//"!Hi! Hi!" --> "!H!! H!!"
//"aeiou" --> "!!!!!"
//"ABCDE" --> "!BCD!"


function replace(s) {
  let result = ""
  for (let i = 0; i < s.length; i++) {
    switch (s[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        result += '!'
        break
      default:
        result += s[i]
    }
  }

  return result
}
