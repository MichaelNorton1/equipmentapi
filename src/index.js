"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import needed libraries
var express = require("express");
var bodyParser = require("body-parser");
// get express application
var app = express();
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// define app port
var port = process.env.PORT || 3000;
// starts the server
app.listen(port, function () {
    console.log("Listening on http://localhost:".concat(port));
});
