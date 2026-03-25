///

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

class Flight {
    constructor(flightID, status) {
        this.flightID = flightID
        this.status = status
    }

    showStatus() {
        console.log("Flight " + this.flightID + " has " + this.status)
    }
}

readline.question("", function(flightID) {
    readline.question("", function(status) {
        let flight = new Flight(flightID, status);
        flight.showStatus()
        readline.close()
    })
})



