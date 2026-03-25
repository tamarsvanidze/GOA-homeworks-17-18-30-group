
//academy

let academy = {
    name: "Code Academy",
    courses: ["JavaScript", "Python", "HTML/CSS"],
    socialLink: "https://www.facebook.com/nika11keshelava/?locale=ka_GE",
    reviews: {
        user1: { name: "Tako", status: "parent", review: "Great courses!" },
        user2: { name: "Nino", status: "child", review: "Loved JS!" },
        user3: { name: "Luka", status: "parent", review: "Helpful instructors." }
    }
}

// 2
console.log(Object.entries(academy))

// 3
console.log(Object.keys(academy))

// 4
console.log(Object.values(academy))

// 5
console.log(academy.hasOwnProperty("name"))
console.log(academy.hasOwnProperty("location"))

// 6
let merged = Object.assign({}, academy, { member: 150 })
console.log(merged)

// 7
Object.freeze(academy)

// 8
console.log(Object.isFrozen(academy))