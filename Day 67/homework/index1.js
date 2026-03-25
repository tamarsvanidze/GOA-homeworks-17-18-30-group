
// რა არის DOM
//DOM (Document Object Model) – ეს არის HTML დოკუმენტის “ხის” ფორმა, სადაც თითოეული ელემენტი არის node,
//  რომელსაც JavaScript-ით შეგვიძლია შევცვალოთ, წავშალოთ ან შევქმნათ.
// აქვს განსხვავებული მეთოდები მაგალითად: მეთოდი	რას გვიბრუნებს
//getElementById()	ერთი ელემენტი 
///getElementsByClassName()	ყველა ელემენტი ამ კლასით 
//getElementsByTagName()	ყველა ელემენტი ამ თეგით 

//ახსენით რითი და როგორ შეგვიძლია მივწდეთ ელემენტებს js ში და რას გვიბრუნებს როცა ვწვდებით მათ

let title = document.getElementById("title"); // id
let boxes = document.getElementsByClassName("box"); // კლასი
let paragraphs = document.getElementsByTagName("p"); // ტეგი
let firstBox = document.querySelector(".box"); // CSS სელექტორი
let allBoxes = document.querySelectorAll(".box"); // ყველა ელემენტი CSS სელექტორით