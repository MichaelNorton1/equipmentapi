import { Router, Request, Response } from "express";
import { Equipment } from "../models/equipment";

const equipmentList: Equipment[] = [];

const getAllequip = (req: Request, res: Response) => {
  res.status(200).send(equipmentList);
};

export default { getAllequip };
