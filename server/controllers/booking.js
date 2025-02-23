const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");

// POST
exports.createBooking = async (req, res, next) => {
  try {
    // body
    // 1 Destruc req.body
    // 2 Delete booking
    // 3 Find camping
    // 4 Cal total
    // 5 insert to db
    // 6 send id booking to react



    // 1 Destruc req.body
    const { campingId, checkIn, checkOut } = req.body;
    const { id } = req.user;
    

    // 2 Delete booking
    await prisma.booking.deleteMany({
      where: {
        profileId: id,
        paymentStatus: false,
      },
    });
    // 3 Find camping
    const camping = await prisma.landmark.findFirst({
      where: {
        id: campingId,
      },
      select: {
        price: true,
      }
    })
    if(!camping) {
      return renderError(400, "No camping found!!!")
    }
    
    // 4 Cal total
    const {total, totalNights} = calTotal(checkIn, checkOut, camping.price);
    console.log(total, totalNights);
    // 5 insert to db
    const booking = await prisma.booking.create({
      data: {
      profileId: id,
      landmarkId: campingId,
      checkIn: checkIn,
      checkOut: checkOut,
      total: total,
      totalNights: totalNights,
      }
    });
    console.log(booking)
    const bookingId = booking.id;
    // 6 send id booking to react (inspect)
    res.json({ message: "Booking done jaaa!!", result: bookingId})


    // res.json({ message: "booking der jaaaa" })
  } catch (error) {
    next(error);
  }
}