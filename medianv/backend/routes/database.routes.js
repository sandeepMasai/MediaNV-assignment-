const express = require("express");
const router = express.Router();
const controller = require("../controller/database.controller");

router.post("/create", controller.createDatabase);
router.get("/check/:dbName", controller.checkDatabase);
router.post("/migrate", controller.migrateDatabase);

module.exports = router;
