import { Router } from "express";
import equipmentRouter from "./equipment.route";
const routes = Router();
// define the base path and the router that's going to be called
routes.use("/equipment", equipmentRouter);

routes.get("/", (req, res) => {
  res.send("<a href='/api/equipment/'>hey</a>");
});

// export the route
export default routes;
