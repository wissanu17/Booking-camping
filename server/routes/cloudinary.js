const express = require("express");
const router = express.Router();
// controller

const { authCheck } = require("../middlewares/auth");
const { createImages } = require("../controllers/cloudinary");


// @ENDPOINT: http://localhost:5000/api/profile
router.post("/images",authCheck, createImages);



module.exports = router;