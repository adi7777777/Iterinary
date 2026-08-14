const tripService = require("../services/tripService");

function getPlaces(req, res) {

    const places = tripService.getPlaces();

    res.json(places);

}

function generateTrip(req, res) {

    const trip = tripService.generateTrip(req.body);

    res.json(trip);

}

module.exports = {
    getPlaces,
    generateTrip
};