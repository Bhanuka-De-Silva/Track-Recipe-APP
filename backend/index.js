const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RecipeModel = require('./models/Recipes')

const app = express()
app.use(cors())
app.use(express.json())

// mongodb port and url
const port = 3001
const DB_URL = 'mongodb+srv://Bha:Bha123@code94cluster01.nivu8ao.mongodb.net/recipes'

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB Connected')
})
.catch((err) => console.log('DB connection error',err))


// add recipes - post method
app.post("/createRecipe", (req, res) => {
    RecipeModel.create(req.body)
    .then(recipes => res.json(recipes))
    .catch(err => res.json(err))
})

// get recipes - get method
app.get("/", (req, res) => {
    RecipeModel.find({})
    .then(recipes => res.json(recipes))
    .catch(err => res.json(err))
})

// get recipes to edit - get method
app.get("/getRecipe/:id", (req, res) => {
    const id = req.params.id;
    RecipeModel.findById({_id:id})
    .then(recipes => res.json(recipes))
    .catch(err => res.json(err))
})

// update recipes - put method
app.put("/updateRecipe/:id", (req, res) => {
    const id = req.params.id;
    RecipeModel.findByIdAndUpdate({_id: id}, {
        recipeName: req.body.recipeName,
        ingredients: req.body.ingredients,
        description: req.body.description})
        .then(recipes => res.json(recipes))
        .catch(err => res.json(err))
})

// delete recipes - delete method
app.delete("/deleteRecipe/:id", (req, res,) => {
    const id = req.params.id;
    RecipeModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})


// run the server
app.listen(port, () => {
    console.log("Server is running on port " + port)
})