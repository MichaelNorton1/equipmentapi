import { Router } from "express";
import rentalController from "../controllers/rental.controller";
const rentalRouter = Router();
// specifies the endpoint and the method to call
rentalRouter.get("/", rentalController.getRentedUnits);
// export the router
export default rentalRouter;
