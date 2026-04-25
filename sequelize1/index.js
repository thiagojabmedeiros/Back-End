(async () => {
    const database = require("./db")
    const Product = require("./Product")
    await database.sync()

    // Product.create({
    //     name: "samsung", 
    //     price: 499.89,
    //     description: "fast and cool"
    // })

    const products = await Product.findAll()
    console.log(products)

})()