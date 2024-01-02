"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipment_controller_1 = require("../controllers/equipment.controller");
const equipmentRouter = (0, express_1.Router)();
// specifies the endpoint and the method to call
equipmentRouter.get("/", equipment_controller_1.default.getAllequip);
// export the router
exports.default = equipmentRouter;