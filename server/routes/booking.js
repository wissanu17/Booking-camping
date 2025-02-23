const express = require("express");
const router = express.Router();
// controller
const { createBooking, checkout, checkOutStatus, listBooking } = require("../controllers/booking");
const { authCheck } = require("../middlewares/auth");




// @ENDPOINT: http://localhost:5000/api/bookings
router.get("/bookings",authCheck, listBooking);

// @ENDPOINT: http://localhost:5000/api/booking
router.post("/booking",authCheck, createBooking);


// @payment
// @ENDPOINT: http://localhost:5000/api/checkout
router.post("/checkout",authCheck, checkout);

router.get("/checkout-status/:session_id",authCheck, checkOutStatus);



module.exports = router;