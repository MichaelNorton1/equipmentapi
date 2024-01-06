"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rentals_1 = require("../db/rentals");
const getRentedUnits = (req, res) => {
    rentals_1.default
        .selectAll()
        .then((rentals) => {
        res.status(200).send({
            message: "OK",
            result: rentals,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
const addToRental = (req, res) => {
    rentals_1.default
        .addToRental(req.body)
        .then((data) => {
        res.status(200).send({
            message: "OK",
            result: data,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
const addRental = (req, res) => {
    rentals_1.default
        .add(req.body)
        .then((data) => {
        res.status(200).send({
            message: "OK",
            result: data,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
exports.default = { getRentedUnits, addToRental, addRental };
