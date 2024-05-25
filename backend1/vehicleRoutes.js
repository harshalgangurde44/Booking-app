// vehicleRoutes.js
const express = require("express");
const Vehicle = require("./vehicle");
const router = express.Router();

router.get("/types", async (req, res) => {
  const types = await Vehicle.distinct("type");
  res.json(types);
});

router.get("/models/:type", async (req, res) => {
  const models = await Vehicle.find({ type: req.params.type });
  res.json(models);
});

router.get("/", async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
});

module.exports = router;
