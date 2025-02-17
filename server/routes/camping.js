const express = require("express")
const router = express.Router()
// controller
const { 
  listCamping, 
  readCamping, 
  createCamping, 
  updateCamping, 
  deleteCamping } = require("../controllers/camping")

const { authCheck } = require("../middlewares/auth")

// @ENDPOINT: http://localhost:5000/api/camping
// @METHOD: GET
// @ACCESS Private
router.get("/camping", listCamping)

// @ENDPOINT: http://localhost:5000/api/camping/5
// @METHOD: GET
// @ACCESS Private
router.get("/camping/:id", readCamping)

// @ENDPOINT: http://localhost:5000/api/camping
// @METHOD: POST
// @ACCESS Private
router.post("/camping", createCamping)

// @ENDPOINT: http://localhost:5000/api/camping/5
// @METHOD: PUT
// @ACCESS Private
router.put("/camping/:id", updateCamping)


// @ENDPOINT: http://localhost:5000/api/camping
// @METHOD: DELETE
// @ACCESS Private
router.delete("/camping", deleteCamping)










module.exports = router;