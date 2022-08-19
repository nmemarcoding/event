const mongoose = require("mongoose");
const user = require("./user.model")
const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        hostId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title: String,
        date: String,
        time: String,
        location: String,
        guestsId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]

    })
);
module.exports = Event;