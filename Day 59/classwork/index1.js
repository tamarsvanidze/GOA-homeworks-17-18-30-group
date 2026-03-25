const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

class Product {
    constructor(id, price, discount) {
        this.id = id
        this.price = price
        this.discount = discount
    }

    changePrice() {
    
        this.price = this.price - (this.price * this.discount / 100)
    }

    showPrice() {
        console.log(this.id + " price: " + Math.round(this.price))
    }

    showNewPrice() {
        console.log(this.id + " new price: " + Math.round(this.price))
    }
}

readline.question("", function(id) {
    readline.question("", function(price) {
        readline.question("", function(discount) {
            let product = new Product(id, Number(price), Number(discount))
            
          
            console.log(product.id + " price: " + Number(price))

          
            product.changePrice()

          
            console.log(product.id + " new price: " + Math.round(product.price))

            readline.close()
        })
    })
})
