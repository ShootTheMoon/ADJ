const express = require("express");
const router = express.Router();


router.get("/SearchEng", (req, res) => {
    req.send({ data: "This is where all the data will be stored" });
});

router.post("/SearchEng", (req, res) => {
    req.send({ data: "This will be set up for when a User is created" })
});

router.put("/SearchEng", (req, res) => {
    req.send({ data: "This will be where user account is updated" })
});

router.delete("/SearchEng", (req, res) => {
    req.send({ data: "This is where user is deleted" });
});

module.exports = router;