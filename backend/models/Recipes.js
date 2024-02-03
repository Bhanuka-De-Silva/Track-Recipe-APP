const mongoose = require('mongoose')

// model with recipe details
const RecipeSchema = new mongoose.Schema({
    recipeName: String,
    ingredients: String,
    description: String
})

const RecipeModel = new mongoose.model("recipes", RecipeSchema)
module.exports = RecipeModel
