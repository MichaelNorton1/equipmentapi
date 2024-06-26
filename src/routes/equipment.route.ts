import { Router } from "express";
import equipmentController from "../controllers/equipment.controller";
const equipmentRouter = Router();
// specifies the endpoint and the method to call
equipmentRouter.get("/", equipmentController.getAllequip);

equipmentRouter.post("/add", equipmentController.addEquipment);

equipmentRouter.put("/update", equipmentController.updateEquipment);
// export the router
export default equipmentRouter;
