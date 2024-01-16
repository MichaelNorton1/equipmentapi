import login from "../db/login";
import { Router, Request, Response } from "express";

const handleLogin = (req: Request, res: Response) => {
  login
    .signOn(req.body)
    .then((data) => {
      res.status(200).send({
        message: "OK",
        result: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "invalid User Name or password",
        error: err.code,
      });
    });
};

export default { handleLogin };
