const db = require("../models");
const Event = db.event;
const User = db.user;

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
        res.send({ message: "Event created successfully successfully!" });
    });

}

// add guest  add event (add event id to url body "guestsId": ["guestId"] )
exports.addGuest = (req, res) => {



    Event.findById({ _id: req.params.id })
        .then(user => {
            if (user.guestsId.includes(req.body.guestsId) === true) {
                res.send("this guest is alrery exist")
            } else {
                Event.findByIdAndUpdate({ _id: req.params.id }, { $addToSet: { guestsId: req.body.guestsId } })
                    .then(() => {
                        res.send(req.body)
                    })
            }
        })




}

//  remove guest from event (add event id to url and body "guestsId": ["guestId"])

exports.deleteGuestById = (req, res) => {
    Event.findOneAndUpdate({ _id: req.params.id }, { $pullAll: { guestsId: [{ _id: req.body.guestsId }] } }, { new: true })
        .then((h) => {
            res.send(`${h} removed`)
        }).catch(e => { res.send(e) })
        // Event.findByIdAndUpdate({ _id: req.params.id }

    // ).then(user => {

    //     const temp = user.guestsId.filter(data => { return data._id.toString() !== req.body.guestsId.toString() })

    //     Event.findByIdAndUpdate({ _id: req.params.id }, { guestsId: [temp] }).then(user => {
    //         res.send(user)
    //     })
    // })
}

// get all the events
exports.getEvnts = (req, res) => {
    Event.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })

}

// get event by id add id to url
exports.getEvent = (req, res) => {
    let temp = ""
    Event.find({ _id: req.params.id }).populate("guestsId", "email username")
        .then(data => { res.send(data) })


}

// get event by user id (id user id to url)

exports.getEvetByGuestId = (req, res) => {
    Event.find({ guestsId: [req.params.id] })
        .then(user => { res.send(user) })
}




// delet event by event id "add id to url"

exports.deletEvent = (req, res) => {
    Event.deleteOne({ "_id": req.params.id })
        .then(() => {
            res.send(`${req.params.id} delited`)
        })
}