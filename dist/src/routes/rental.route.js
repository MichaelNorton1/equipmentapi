"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rental_controller_1 = require("../controllers/rental.controller");
const rentalRouter = (0, express_1.Router)();
// specifies the endpoint and the method to call
rentalRouter.get("/", rental_controller_1.default.getRentedUnits);
// export the router
exports.default = rentalRouter;
