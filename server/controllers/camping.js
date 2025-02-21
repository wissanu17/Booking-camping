const prisma = require("../config/prisma")

// GET
exports.listCamping = async(req, res, next) => {
  try {
    // body
    const campings = await prisma.landmark.findMany()
    res.json({result: campings})
  } catch (error) {
    next(error);
  }
}

// GET
exports.readCamping = async(req, res, next) => {
  try {
    // code
    const { id } = req.params;
    const camping = await prisma.landmark.findFirst({
      where: {
        id: Number(id),
      }
    })
    res.json({result: camping})
  } catch (error) {
    next(error);
  }
}

// POST
exports.createCamping = async (req, res, next) => {
  try {
    const { title, description, price, category, lat, lng, image } = req.body;
    const { id } = req.user;
    //console.log(req.user)
    //console.log(image)
    const camping = await prisma.landmark.create(
      {
        data:{
          title: title,
          description: description,
          price: price,
          category: category,
          lat: lat,
          public_id: image.public_id,
          secure_url: image.secure_url,
          lng: lng,
          profileId: id,
        },
      }
    )
    res.json({ 
      message: "Create camping success Broo!!!", 
      result: camping})
    // res.send("Hello Create Potae 66666666666666")
  } catch (error) {
    next(error);
  }
}

// PUT
exports.updateCamping = (req, res, next) => {
  try {
    // code
    // console.log(req.params.id)
    res.send("Hello PUT Update Potae")
  } catch (error) {
    next(error);
  }
}

// DELETE
exports.deleteCamping = (req, res, next) => {
  try {
    // code
    res.send("Hello DELETE Potae")
  } catch (error) {
    next(error);
  }
}