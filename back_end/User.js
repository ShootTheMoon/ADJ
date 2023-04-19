const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.send("Create new User here");
    //proccess of making a new user
});

router.get("/login", (req, res) => {
    res.send("This is where all user will login to their account");
    //Login screen to their account
});

router.get("/:id", (req, res) => {
    res.send("Get User with unique ID: ${req.params.id}");
    //Basically their Account page
});

router.get("/forgotInfo", (req, res) => {
    res.send("This will be where user account is forgot username/password")
    //Here they choose if what they can't remember is a username or password the gets sent to new route'
});

router.get("/forgotInfo-UserName", (req, res) => {
    res.send("This will be where user account is forgot username/password")
    //Code to process finding their username based off their unique password
});

router.get("/forgotInfo-Password", (req, res) => {
    res.send("This will be where user account is forgot username/password")
    //Code to process finding their Password based off their unique Username
});

router.put("/update/:id", (req, res) => {
    res.send("Update particular User ID: ${req.params.id}");
    //If they wanna update their current password
});

router.delete("delete/:id", (req, res) => {
    res.send("This is where the particular User ID: ${req.params.id}. \nWill be deleted");
    // If they wish to no longer have an account with us
});

module.exports = router;
