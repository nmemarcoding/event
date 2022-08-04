const db = require("../models");
const Event = db.event;

exports.create = (req, res) => {
    const event = new Event({
        hostId: req.body.hostId,
        title: req.body.title,
        date: req.body.date,
        guestsId: req.body.guestsId
    });
    event.save((err) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send({ message: "Event vreated successfully successfully!" });
    });

}

// add guest  add event (add event id to url body "guestsId": ["guestId"] )
exports.addGuest = (req, res) => {

    Event.findById({ _id: req.params.id })
        .then(user => {
            if (user.guestsId.includes(req.body.guestsId) === true) {
                res.send("this guest is alrery exist")
            } else {
                Event.findByIdAndUpdate({ _id: req.params.id }, { $push: { guestsId: req.body.guestsId } })
                    .then(() => {
                        res.send(req.body)
                    })
            }
        })


}

//  remove guest from event (add event id to url and body "guestsId": ["guestId"])

exports.deleteGuestById = (req, res) => {
    Event.findByIdAndUpdate({ _id: req.params.id }, { $pullAll: { guestsId: req.body.guestsId } })
        .then(() => {
            res.send(`${req.body.guestsId} removed`)
        })
}

exports.getEvnts = (req, res) => {
    Event.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })

}