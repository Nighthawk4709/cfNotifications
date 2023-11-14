const express = require("express");

const router = express.Router();
const {
  handleListofAllContests,
  handleSavingListofAllContests,
} = require("../controllers/apiController");

router.get("/list", handleListofAllContests);
router.post("/list/save", handleSavingListofAllContests);

module.exports = router;
