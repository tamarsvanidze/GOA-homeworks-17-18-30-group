
//////// CODEWARSS ///////

/////1////

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


////////  4  /////////

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1
  }
  let maxDiff = 0
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      let diff = Math.abs(a1[i].length - a2[j].length)
      if (diff > maxDiff) {
        maxDiff = diff
      }
    }
  }

  return maxDiff
}
