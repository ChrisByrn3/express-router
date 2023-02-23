const express = require("express")
const app = express()
const port = 3000
const fruit = require("./expressRouters/fruitRouter")
const user = require("./expressRouters/userRouter")

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

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

// Express Routes
// router.get("/users", async (req, res) => {
//     const userList = await users.findAll()
//     res.json(userList)
// })

// router.get("/users/:id", async (req, res) => {
//     const user = await users.findByPk(req.params.id)
//     res.json(user)
// })

// router.get("/fruits", async (req, res) => {
//     const fruitList = await fruits.findAll()
//     res.json(fruitList)
// })

// router.get("/fruits/:id", async (req, res) => {
//     const fruit = await fruits.findAll(req.params.id)
//     res.json(fruit)
// })

app.use("/users", user);
app.use("/fruits", fruit)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
