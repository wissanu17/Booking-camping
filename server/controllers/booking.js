// const prisma = require("../config/prisma")

// POST
exports.createBooking = async(req, res, next) => {
  try {
    // body
    console.log(req.body)
    res.json({message: "booking der jaaaa"})
    // res.json({result: campings})
  } catch (error) {
    next(error);
  }
}