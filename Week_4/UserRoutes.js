const express = require("express");
const router = express.Router();
let users = [];
router.get("/users", (req, res) => {
    res.json(users);
});
router.post("/users", (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex((user) => user.id == id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.json({ message: "User deleted" });
});
module.exports = router;