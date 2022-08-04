const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/event.controller");

// creat new event
router.post("/creat", (req, res) => { controller.create(req, res) });

// get all the 
router.get('/', [authJwt.verifyToken], (req, res) => { controller.getEvnts(req, res) })

// add guest  add event (add event id to url and body "guestsId": ["guestId"] )
router.put('/:id', [authJwt.verifyToken], (req, res) => { controller.addGuest(req, res) })

// remove guest from event (add event id to url and body "guestsId": ["guestId"])
router.delete('/:id', [authJwt.verifyToken], (req, res) => { controller.deleteGuestById(req, res) })
module.exports = router;