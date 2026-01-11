//codewars 

// 1)
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  let errors = 0
  let good = "abcdefghijklm"

  for (let i = 0; i < s.length; i++) {
    if (good.indexOf(s[i]) === -1) {
      errors = errors + 1
    }
  }

  return errors + "/" + s.length
}

//  2)
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//Input
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//Output
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.


function openOrSenior(data) {
  let result = []
  for (let i = 0; i < data.length; i++) {
    let age = data[i][0]
    let handicap = data[i][1]

    if (age >= 55 && handicap > 7) {
      result.push("Senior")
    } else {
      result.push("Open")
    }
  }
  return result
}
