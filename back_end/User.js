const express = require("express");
const router = express.Router();


router.get("/user", (req, res) => {
    req.send({ data: "This is where all the data will be stored" });
});

router.post("/user", (req, res) => {
    req.send({ data: "This will be set up for when a User is created" })
});

router.put("/user", (req, res) => {
    req.send({ data: "This will be where user account is updated" })
});

router.delete("/user", (req, res) => {
    req.send({ data: "This is where user is deleted" });
});

router.listen(PORT), () => {
    console.log("Server is running");
});

module.exports = router;