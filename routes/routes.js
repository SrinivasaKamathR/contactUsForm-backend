const express = require("express");

const router = express.Router();

const controller = require("../controllers/formController");

router.use("/contact", controller.contactForm);

module.exports = router;
