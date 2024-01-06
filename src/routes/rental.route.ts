import { Router } from "express";
import rentalController from "../controllers/rental.controller";

const rentalRouter = Router();
// specifies the endpoint and the method to call
rentalRouter.get("/", rentalController.getRentedUnits);

rentalRouter.put("/add", rentalController.addToRental);

rentalRouter.post("/addrental", rentalController.addRental);

rentalRouter.put("/changerental", rentalController.changeRental);

// export the router
export default rentalRouter;
