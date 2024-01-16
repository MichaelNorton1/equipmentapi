import { Router } from "express";
import loginController from "../controllers/login.controller";
const loginRouter = Router();
// specifies the endpoint and the method to call
loginRouter.post("/", loginController.handleLogin);

export default loginRouter;
