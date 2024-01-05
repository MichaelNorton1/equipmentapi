import { Router, Request, Response } from "express";
import { RentedUnits } from "../models/rentedUnits";
import rentals from "../db/rentals";

const getRentedUnits = (req: Request, res: Response) => {
  rentals
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

const updateRental = (req: Request, res: Response) => {
  rentals
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

export default { getRentedUnits, updateRental };
