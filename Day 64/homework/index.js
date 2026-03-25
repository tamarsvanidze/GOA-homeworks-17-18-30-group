
// CODEWARSS

// 1 )

function grow(x) {
  let result = 1
  
  for (let i = 0; i < x.length; i++) {
    result *= x[i]
  }
  return result
}

// 2)
function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  
  if (c <= 0)
    return c + " is freezing temperature"
  else
    return c + " is above freezing temperature"
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
}