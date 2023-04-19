const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("This is where all the data will be stored" );
});

router.get("/SearchEng/PreviousHistory", (req, res) => {
    res.send("This will be if the user want to select a topic they search up prevgiously" )
});

router.post("/SearchEng/results", (req, res) => {
    res.send("This will be where the user get results from search" )
});

module.exports = router;

