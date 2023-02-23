const express = require("express")
const fruitRouter = express.Router();

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

fruitRouter.get("/", (req, res) => {
    res.send(fruits)
})

fruitRouter.get("/:id", (req, res) => {
    const fruit = fruits[req.params.id -1]
    res.json(fruit)
})

module.exports = fruitRouter