import { Router, Request, Response } from "express";
import { rentedUnits } from "../models/rentedUnits";

const rentals: rentedUnits[] = [];

const getRentedUnits = (req: Request, res: Response) => {
  res.status(200).send(rentals);
};

export default { getRentedUnits };
