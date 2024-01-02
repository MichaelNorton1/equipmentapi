"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rentals = [];
const getRentedUnits = (req, res) => {
    res.status(200).send(rentals);
};
exports.default = { getRentedUnits };
