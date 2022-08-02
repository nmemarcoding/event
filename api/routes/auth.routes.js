const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

router.post('/signup', [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
], (req, res) => {
    controller.signup(req, res)
})

router.post("/signin", (req, res) => { controller.signin(req, res) });
router.post("/signout", controller.signout);

module.exports = router;