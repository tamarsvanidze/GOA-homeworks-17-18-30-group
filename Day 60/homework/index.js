// 1 

const university = {
  name: "Ivane Javakhishvili Tbilisi State University",
  departments: 7,
  website: "https://www.tsu.ge/",
  ratings: {
    student1: 9,
    student2: 8,
    student3: 10,
  }
}


for (let i in university) {
  console.log(i, university[i])
}


console.log(university.hasOwnProperty("scholarship"))


const updatedUniversity = {
  ...university,
  studentsCount: 20580
}


Object.freeze(updatedUniversity)

updatedUniversity.name = " SEUL University"


console.log(Object.isFrozen(updatedUniversity))


// 2

const sportsClub = {
  clubName: " Girls Volleyball",
  sportType: "Volleyball",
  foundedYear: 2005,
  achievements: {
    title1: "Champion 2018",
    title2: "Champion 2020",
    title3: "University Winner"
  }
}


console.log(Object.keys(sportsClub))


console.log(Object.values(sportsClub))


console.log(sportsClub.hasOwnProperty("sponsors"))

const updatedClub = {
  ...sportsClub,
  stadiumCapacity: 500
}


Object.freeze(updatedClub)


updatedClub.clubName = "Rustavi volleyball"

console.log(Object.isFrozen(updatedClub))

///3 

const hotel = {
  hotelName: "Crystal Hotel ",
  stars: 5,
  location: "Bakuriani",
  guestReviews: {
    guest1: 9,
    guest2: 8,
    guest3: 10
  }
}


for (let i in hotel) {
  console.log(i, hotel[i])
}


console.log(hotel.hasOwnProperty("spa"))


const updatedHotel = {
  ...hotel,
  roomsCount: 120
}


Object.freeze(updatedHotel)


updatedHotel.hotelName = "Rustavi Hotel"


console.log(Object.isFrozen(updatedHotel))


// 4


const cinema = {
  cinemaName: "Cavea",
  moviesCount: 20,
  location: "Tbilisi Mall",
  movieReviews: {
    user1: 8,
    user2: 7,
    user3: 9
  }
}


for (let i in cinema) {
  console.log(i, cinema[i])
}


console.log(cinema.hasOwnProperty("vipSeats"))


const updatedCinema = {
  ...cinema,
  ticketPrice: 15
}


Object.freeze(updatedCinema)


updatedCinema.cinemaName = "tbilisi movie night"


console.log(Object.isFrozen(updatedCinema))