const mongoose = require ('mongoose')

const {Schema} = mongoose

const schema = new Schema ({
    lanche: String,
    ingredientes: String,
    preço: Number,
})

const Model = mongoose.model ('produtos',schema)

module.exports = Model