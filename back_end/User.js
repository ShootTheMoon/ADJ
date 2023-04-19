const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    res.send("Create new User here");
    //proccess of making a new user
});

// For now doing credential till i get it to look at different line for files in db
const credentials = {
    UserName: 'Admin',
    Password: 'Jesus'
};

router.get("/login", (req, res) => {
    res.send("This is where all user will login to their account");
    if (req.body.UserName == credentials.UserName && req.body.Password == credentials.Password) {
        req.session.User = req.body.UserName;
        res.redirect(/dashboard);

    }
    else {
        res.end('Invalid UserName and Password.\nPlease try again');
    }
    //Login screen to their account
});

router.get("/dashboard/:id", (req, res) => {
    res.send("Get User with unique ID: ${req.params.id}");
    if (req.session.user) {
        res.render('dashboard', { user: req.session.user });
    }
    else {
        res.send('Unauthorized User');
    }
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

router.get("/logout", (req, res) => {
    res.send("This will be where user account is to sign out")
    //Code to process finding their Password based off their unique Username
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.render('base', {title: 'Express'}, logout: 'logout completed successfully')
        }
    })
});

module.exports = router;
