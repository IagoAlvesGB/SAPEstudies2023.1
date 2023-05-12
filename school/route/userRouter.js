const { Router } = require("express");

const UserCtrl = require("../controller/userController");
const router = Router();

const oUserController = new UserCtrl();

router.post("/authenticate", oUserController.authenticate);

module.exports = router;
