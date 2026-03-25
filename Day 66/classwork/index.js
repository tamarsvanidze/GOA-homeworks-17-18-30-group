
// The Date Object

function getDayOfWeek(year, month, day) {
  let date = new Date(year, month - 1, day)

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return days[date.getDay()]
}


//Display and Manipulate Date and Time Objectives

let now = new Date()
console.log("Current date and time:",new Date(now) )

now.setFullYear(2025)   
now.setMonth(0)         
now.setDate(15)         
now.setHours(12)       
now.setMinutes(30)    
now.setSeconds(45)     
console.log("Modified date and time:", now)
