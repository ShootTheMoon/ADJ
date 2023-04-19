/*
 * const express = require("express");
const app = express();
const Port = 6969;

const userAccRoute = require("./routes/User");
const SearchEngRoute = require("./routes/SearchEng");

app.use('/user', userAccRoute);
app.use('/SearchEng', SearchEngRoute);

// This is to jst open and write txt in server
/*
 * const server = http.createServer(function (req, res) {
 * res.write("Welcome");
    res.end();
});
    // This is for when we call the html code from front end
    
     * res.writeHead(200, {"Content-Type": "text/html"})
     * fs.readFile( "User.js", (err, data) => {
     * if (err)
     * {
     *  res.writeHead(404);
     *  res.write("Error: File was not Found");
     * }
     * else
     * {
     * res.write(data);
     * }
     * });
     */


const http = require('http');
const fs = require('fs');
const port = 1237;



const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile( 'C:\Users\Jayon\OneDrive\Desktop\BackEndAcc\Routes\home.html', (err, data) => {
   
        if (err) {
            res.writeHead(404);
            res.write("Error: File was not found.");
        }
        else
            res.write(data);
    });
    res.end();
});

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error);
    }
    else {
        console.log("Server is running on port: " + port);
    }
});