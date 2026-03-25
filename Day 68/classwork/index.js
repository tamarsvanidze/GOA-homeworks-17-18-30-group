
// CODEWARSS

//////1////

function invert(array) {
  return array.map(function(num) {
    return -num
  })
}

////// 2  //////

function getAverage(marks) {
  let sum = 0
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i]
  }
  return Math.floor(sum / marks.length)
}

////// 3 ////////

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {   
      return true
    }
  }
  return false
}
