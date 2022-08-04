const mongoose = require("mongoose");
const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        hostId: String,
        title: String,
        date: String,
        guestsId: [String]

    })
);
module.exports = Event;