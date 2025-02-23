const prisma = require("../config/prisma");
const { calTotal } = require("../utils/booking");
const renderError = require("../utils/renderError");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
    if (!camping) {
      return renderError(400, "No camping found!!!")
    }

    // 4 Cal total
    const { total, totalNights } = calTotal(checkIn, checkOut, camping.price);
    // console.log(total, totalNights);
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
    // console.log(booking)
    const bookingId = booking.id;
    // 6 send id booking to react (inspect)
    res.json({ message: "Booking done jaaa!!", result: bookingId })


    // res.json({ message: "booking der jaaaa" })
  } catch (error) {
    next(error);
  }
}

// อย่าหาพิมพ์ผิดอีก จะบ้า
exports.checkout = async (req, res, next) => {
  try {
    const { id } = req.body
    console.log(typeof id)

    const booking = await prisma.booking.findFirst({
      where: { id: Number(id) },
      include: {
        landmark: {
          select: {
            id: true,
            secure_url: true,
            title: true,
          }
        }
      }
    });

    if (!booking) {
      return renderError(400, "Booking not found na ja!!!");
    }
    const { total, totalNights, checkIn, checkOut, landmark } = booking;
    const { title, secure_url } = landmark;

    // stripe
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      metadata: { bookingId: booking.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency : 'thb',
            product_data: {
              name: title,
              images: [secure_url],
              description: "แต้งจ้าาา",
            },
            unit_amount : total * 100,
          },
        },
      ],
      mode: 'payment',
      return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });

    // console.log(total, totalNights, checkIn, checkOut, title, secure_url);
    // res.json({ message: "Checkout successful", result: booking });
  } catch (error) {
    next(error)
  }
}

exports.checkOutStatus = async (req, res, next) => {
  try {
    // code
    const { session_id } = req.params;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    const bookingId = session.metadata?.bookingId
    console.log(session)
    // console.log(bookingId)


    // check
    if(session.status !== 'complete' || !bookingId) {
      return renderError(400, "Something Wrong!!! krub");
    }

    // UpdateDb

    const result = await prisma.booking.update({
      where: {
      id:Number(bookingId)
    },
    data:{
      paymentStatus: true
    }
  })

  res.json({ message: "Payment Success", status: session.status})

  } catch (error) {
    next(error)
  }
}