
// Store Manager

let prices = [10, 20, 30, 40, 50]

let increase = Number(prompt("Enter the increase amount:"))

for (let i = 0; i < prices.length; i++) {
  prices[i] += increase
}

//////////////////////////////////////////////////////////////////////////////////


// 3.1 
function showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let day = now.getDate()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    if(month < 10) month = "0" + month
    if(day < 10) day = "0" + day
    if(hour < 10) hour = "0" + hour
    if(min < 10) min = "0" + min
    if(sec < 10) sec = "0" + sec

    console.log(year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec)
}
showDateTime()

// 3.2
function calcAge(birthStr) {
    let birth = new Date(birthStr)
    let now = new Date()
    let years = now.getFullYear() - birth.getFullYear()
    let months = now.getMonth() - birth.getMonth()
    let days = now.getDate() - birth.getDate()

    if(days < 0){
        months--
        days += 30
    }
    if(months < 0){
        years--
        months += 12
    }
    console.log("Age: " + years + " years, " + months + " months, " + days + " days")
}


// 3.3
function dayOfWeek(dateStr){
    let d = new Date(dateStr)
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log(days[d.getDay()])
}


// 4.1 
let count = 0
setInterval(function(){
    count++
    console.log("Timer: " + count)
},1000)

// 4.2
setInterval(function(){
    let now = new Date()
    console.log("Time: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds())
},1000)

// 4.3
setInterval(function(){
    let r = Math.random()
    console.log("Random: " + r.toFixed(2))
},1000)

// 5. 
function delayedMsg(msg, delay){
    setTimeout(function(){
        console.log(msg)
    }, delay)
}


// 6 & 7
function msg1(){ 
    console.log("Hello") 
}
function msg2(){ 
    console.log("How are you?") 
}
function msg3(){ 
    console.log("Bye")
}

setTimeout(msg1, 1000)
setTimeout(msg2, 2000)
setTimeout(msg3, 3000)

// 9. 
setInterval(function(){
    let now = new Date()
    let hour = now.getHours()
    let greet = ""
    if(hour < 12) greet = "Good Morning"
    else if(hour < 18) greet = "Good Afternoon"
    else greet = "Good Evening"
    console.log(greet)
},1000)
