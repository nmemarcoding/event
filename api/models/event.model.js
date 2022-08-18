const mongoose = require("mongoose");
const user = require("./user.model")
const Event = mongoose.model(
    "Event",
    new mongoose.Schema({
        hostId: String,
        title: String,
        date: String,
        guestsId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }]

    })
);
module.exports = Event;