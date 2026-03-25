// codewarsss

// 1)
function checkAlive(health) {
  if (health > 0) {
    return true
  } else {
    return false
  }
}

// 2 )
function positiveSum(arr) {
  let sum = 0
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i]
    }
  }

  return sum
}

// 3 )

function fakeBin(x) {
  let result = ""
  
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      result += "0"
    } else {
      result += "1"
    }
  }
  return result
}

// 4)
function grow(arr) {
  let result = 1
  
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
}
