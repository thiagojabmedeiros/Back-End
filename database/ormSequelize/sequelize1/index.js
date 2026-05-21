( async () => {

    const Enterprise = require('./models/Entreprise')
    const Product = require('./models/Product')

    const database = require('./db')
    await database.sync()

    const enterprise = await Enterprise.findByPk(1)
    const products = await enterprise.getProducts()
    console.log(products)
    // const product = await Product.create({
    //     name: 'macbook',
    //     price: 2010.99,
    //     description: 'best machine of all time',
    //     enterpriseId: 1
    // })

    // const enterprise = await Enterprise.create({
    //     name: 'apple'
    // })
    // const product = await Product.create({
    //     name: 'iphone',
    //     price: 1459.98,
    //     description: 'best phone to take pictures',
    //     enterpriseId: enterprise.id
    // })
    // const product = await Product.findByPk(1, { include: Enterprise })
    // // const enterprise = await product.getEnterprise()
    // console.log(product.enterprise.name)
    
    // const product = await Product.findOne({
    //     where: {
    //         id: 3
    //     }
    // })
    
    // product.name = 'xiaomi'
    // await product.save()
})()