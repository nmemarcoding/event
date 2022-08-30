const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/event.controller");

// creat new event
router.post("/creat", (req, res) => { controller.create(req, res) });

// get all the 
router.get('/', [authJwt.verifyToken], (req, res) => { controller.getEvnts(req, res) })

// get event by id add id to url
router.get('/:id', [authJwt.verifyToken], (req, res) => { controller.getEvent(req, res) })
    // get event by hostId (add host id to url)
router.get('/hostid/:id', (req, res) => { controller.getEventByHostId(req, res) })

// get event by user id (id user id to url)
router.get('/guestid/:id', [authJwt.verifyToken], (req, res) => { controller.getEventByGuestId(req, res) })


// add guest  add event (add event id to url and body "guestsId": ["guestId"] )
router.put('/:id', [authJwt.verifyToken], (req, res) => { controller.addGuest(req, res) })

// remove guest from event (add event id to url and body "guestsId": ["guestId"])
router.delete('/guest/:id', [authJwt.verifyToken], (req, res) => { controller.deleteGuestById(req, res) })

// delet event by event id "add id to url"
router.delete('/:id', [authJwt.verifyToken], (req, res) => { controller.deletEvent(req, res) })

module.exports = router;