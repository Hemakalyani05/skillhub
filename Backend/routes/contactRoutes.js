const express =
require("express");

const router =
express.Router();

const {
  saveMessage,
  getMessages
}
=
require(
  "../controllers/contactController"
);

// SAVE MESSAGE

router.post(
  "/",
  saveMessage
);

// GET ALL MESSAGES

router.get(
  "/",
  getMessages
);

module.exports = router;
