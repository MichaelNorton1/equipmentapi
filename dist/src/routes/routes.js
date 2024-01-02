"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipment_route_1 = require("./equipment.route");
const routes = (0, express_1.Router)();
// define the base path and the router that's going to be called
routes.use("/equipment", equipment_route_1.default);
routes.get("/", (req, res) => {
    res.send("<a href='/api/equipment/'>Click for all equipment</a>");
});
// export the route
exports.default = routes;
