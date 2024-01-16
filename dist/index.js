"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import needed libraries
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./src/routes/routes");
const cors = require("cors");
// get express application
const app = express();
app.use(cors());
// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// define app port
const port = process.env.PORT || 3001;
// starts the server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
const test = "test";
app.use("/api", routes_1.default);
