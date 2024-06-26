import { Router } from "express";
import equipmentRouter from "./equipment.route";
import rentalRouter from "./rental.route";
import loginRouter from "./login.route";
const routes = Router();
// define the base path and the router that's going to be called
routes.use("/equipment", equipmentRouter);
routes.use("/rentals", rentalRouter);
routes.use("/login", loginRouter);

routes.get("/", (req, res) => {
  res.send("<a href='/api/equipment/'>Click for all equipment</a>");
});

// export the route
export default routes;
