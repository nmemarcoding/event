const mongoose = require("mongoose");
const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        hostId: String,
        title: String,
        date: String,
        guestsId: [Object]

    })
);
module.exports = Event;