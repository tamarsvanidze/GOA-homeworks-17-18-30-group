// arrays

// 2
function getArrayLength(array) {
  return arr.length
}

// 3
function concatArrays(array1, array2) {
  return array1.concat(array2)
}

// 4
function addValue(array, value) {
  return array.push(value)
}

// 5
function removeLast(array) {
  return array.pop()
}

// 6
function concatAndPush(array1, array2, value) {
  let newArray = array1.concat(arrat2)
  return newArray
}

// 7
function sumArray(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

// 8
function getEvenIndex(array) {
  let result = []
  for (let i = 0; i < array.length; i += 2) {
    result.push(array[i])
  }
  return result
}

// 9
function stringLengths(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(array[i].length)
  }
  return result
}