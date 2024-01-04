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
exports.default = { getRentedUnits };
