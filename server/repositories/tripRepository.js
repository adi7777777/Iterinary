const places = require("../data/places");

function getPlaces() {
    return places;
}

function generateTrip(form) {

    return {
        place: form.place,
        start: form.start,
        end: form.end,
        stay: form.stay,
        budget: form.budget,
        travel: form.travel,
        activities: form.activities,
        days: [
            {
                day: 1,
                title: "Arrival and Local Sightseeing"
            },
            {
                day: 2,
                title: "Adventure Activities"
            },
            {
                day: 3,
                title: "Shopping and Departure"
            }
        ]
    };

}

module.exports = {
    getPlaces,
    generateTrip
};