// classwork 

// Introducing Objects

//The given class represents a cuboid (e.g. a rectangular prism) that contains the 
// properties of length, width, and height.
//Complete the program to calculate and output the volume of the given cuboid to the console.

let cuboid = {
  length: 5,
  width: 3,
  height: 2
}

let volume = cuboid.length * cuboid.width * cuboid.height
console.log(volume)


// 2)  შექმენით თქვენი თავის ობიექტი, შეიტანეთ 6 თვისება და მნიშვნელობა,
//  შემდგომ შექმენით მეთოდი და ააწყვეთ წინადადება ამ 
// შემოტანილი თვისებებით. !!! არ დაგავიწყდეთ მეთოდის გამოძახება!!!,

let myObject = {
  name: "Tako",
  age: 16,
  city: "Rustavi",
  hobby: "drawing",
  favoriteColor: "black",
  pet: "beagle",

  
  introduce: function() {
   
    return "My name is " + this.name + ", I am " + this.age + " years old" + 
           ", I live in " + this.city + 
           ", I like " + this.hobby + 
           ", my favorite color is " + this.favoriteColor + 
           ", and I have a " + this.pet + "."
  }
}
console.log(myObject.introduce())