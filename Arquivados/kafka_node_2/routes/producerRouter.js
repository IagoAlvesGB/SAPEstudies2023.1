const { Router } = require("express");

const ProducerCtrl = require("../controllers/producerController");
const router = Router();

const oProducertController = new ProducerCtrl();

router.post("/newMessage", oProducertController.newMessage); 

module.exports = router;
