const express = require('express');
const VehicleRoutes = express.Router();

const { createVehicleController , getAllVehicleController} = require("../controller/VehicleController");

VehicleRoutes.route("/create").post(createVehicleController);
VehicleRoutes.route("/get").post(getAllVehicleController)


module.exports = VehicleRoutes;
