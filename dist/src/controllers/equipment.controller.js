"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equipmentList = [];
const getAllequip = (req, res) => {
    res.status(200).send(equipmentList);
};
exports.default = { getAllequip };
