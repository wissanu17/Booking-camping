const prisma = require("../config/prisma")

// GET
exports.listCamping = async(req, res) => {
  try {
    // body
    const campings = await prisma.landmark.findMany()
    res.json({result: campings})
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// GET
exports.readCamping = async(req, res) => {
  try {
    // code
    const { id } = req.params;
    const campings = await prisma.landmark.finFirst({
      where: {
        id: Number(id)
      }
    })
    res.json({result: campings})
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// POST
exports.createCamping = async (req, res) => {
  try {
    // code
    // const { title, price } = req.body
    // console.log(title)
    // console.log(price)
    // console.log(req.body)
    //console.log(req.user.id)

    const { title, description, price, category, lat, lng, image } = req.body
    const { id } = req.user
    console.log(image)
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
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// PUT
exports.updateCamping = (req, res) => {
  try {
    // code
    // console.log(req.params.id)
    res.send("Hello PUT Update Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}

// DELETE
exports.deleteCamping = (req, res) => {
  try {
    // code
    res.send("Hello DELETE Potae")
  } catch (error) {
    console.log(error.massage)
    res.status(500).json({ message: "Server Error" })
  }
}