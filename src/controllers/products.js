const ProductsModel = require('../models/products')

async function get (req, res) {
    const {id} = req.params

    let obj = {}

    if(id) {
        obj._id = id
    }

    const products = await ProductsModel.find(obj)
    
    res.send(products)

}

async function post (req, res) {
    const {
        lanche,
        ingredientes,
        preço,
    } = req.body

    const products = new ProductsModel ({
        lanche,
        ingredientes,
        preço,
    })

    products.save()

    res.send({
        message: "ok"
    })
    
}




module.exports = {
    get,
    post,
}