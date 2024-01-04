"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const equipment_1 = require("../db/equipment");
const getAllequip = (req, res) => {
    equipment_1.default
        .selectAll()
        .then((vibros) => {
        res.status(200).send({
            message: "OK",
            result: vibros,
        });
    })
        .catch((err) => {
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
const addEquipment = (req, res) => {
    equipment_1.default
        .addEquipment(req.body)
        .then((data) => {
        res.status(200).send({
            message: "OK",
            result: data,
        });
    })
        .catch((err) => {
        console.log(err);
        res.status(500).send({
            message: "DATABASE ERROR",
            error: err.code,
        });
    });
};
exports.default = { getAllequip, addEquipment };
