const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const session = require('expression-session');
const { v4: uuidv4 } = require('uuid');


const port = 5432;

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    console.log("HomePage set-up");
    res.send("This is the link towards the homepage");
});

process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ' + (err)); 
    process.exit(1); 
   })

const userRouter = require("./routes/Users");
const SearchEngRouter = require("./routes/SearchEng");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true });

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.use("/Users", userRouter);
app.use("/SearchEng", SearchEngRouter);

app.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log("Server is running on http://localhost: " + port);
    }
});
