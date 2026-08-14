const tripRepository = require("../repositories/tripRepository");

function getPlaces() {

    return tripRepository.getPlaces();

}

function generateTrip(form) {

    return tripRepository.generateTrip(form);

}

module.exports = {
    getPlaces,
    generateTrip
};