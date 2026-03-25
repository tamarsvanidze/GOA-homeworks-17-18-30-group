

const classTags = document.querySelectorAll('.text-item')

for (let i = 0; i < classTags.length; i++) {
    classTags[i].innerText = "class p tag"
    classTags[i].style.color = "gray"
    classTags[i].style.fontStyle = "italic"
}


const p6 = document.getElementById('unique-1')
const p7 = document.getElementById('unique-2')
const p8 = document.getElementById('unique-3')
const p9 = document.getElementById('unique-4')
const p10 = document.getElementById('unique-5')


p6.innerText = "Lionel Messi"
p7.innerText = "Cristiano Ronaldo"
p8.innerText = "Zinedine Zidane"
p9.innerText = "Ronaldinho"
p10.innerText = "Pele"


