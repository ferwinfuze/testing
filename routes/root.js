const express = require("express");
const router = express.Router();
const api = require("../controller/api");
const path = require("path");

router.route("/read").get(api.list);
router.route("/read/:id").get(api.read);
router.route("/create").post(api.create);
router.route("/update/:id").post(api.update);
router.route("/delete/:id").delete(api.dbDelete);

module.exports = router;
