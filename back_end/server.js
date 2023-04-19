const express = require("express");
const app = express();
const port = 3123;

const userAccRoute = require("./User");
const SearchEngRoute = require("./SearchEng");

app.use('/User', userAccRoute);
app.use('/SearchEng', SearchEngRoute);

app.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log("Server is running on port: " + port);
    }
});