import { Router, Request, Response } from "express";
import { Equipment } from "../models/equipment";

import equipment from "../db/equipment";

const getAllequip = (req: Request, res: Response) => {
  equipment
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

const addEquipment = (req: Request, res: Response) => {
  equipment
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

const updateEquipment = (req: Request, res: Response) => {
  equipment
    .updateEquipment(req.body)
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

export default { getAllequip, addEquipment, updateEquipment };
