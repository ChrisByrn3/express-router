const express = require("express")
const router = express.Router();

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


// Express Routes
router.get("/", (req, res) => {
    //const userList = users
    res.send(users)
})

router.get("/:id", (req, res) => {
    const user = users[req.params.id -1]
    res.send(user)
})

module.exports = router