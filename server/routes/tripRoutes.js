const express = require("express");

const router = express.Router();

const tripController = require("../controllers/tripController");

router.get("/places", tripController.getPlaces);

router.post("/generate-trip", tripController.generateTrip);

module.exports = router;